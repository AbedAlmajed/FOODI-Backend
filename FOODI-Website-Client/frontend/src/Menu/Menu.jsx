



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHeart } from 'react-icons/fa';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link, useLocation } from "react-router-dom";
import Swal from 'sweetalert2';

const itemsPerPage = 6; // Items per page

const Card = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [likedItems, setLikedItems] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [totalPages, setTotalPages] = useState(0);
  // const [cartCount, setCartCount] = useState(0);
  const location = useLocation();
  const isProfilePage = location.pathname.includes('/profile');

  useEffect(() => {
    fetchItems();
    fetchLikedItems();
    // fetchCartCount();
  }, [currentPage, searchQuery, selectedCategory]);

  const fetchItems = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/menu-items`, {
        params: {
          page: currentPage,
          limit: itemsPerPage,
          search: searchQuery,
          category: selectedCategory === 'all' ? '' : selectedCategory
        }
      });
      setItems(response.data.items);
      setTotalPages(Math.ceil(response.data.total / itemsPerPage));
    } catch (error) {
      console.error('Error fetching menu items:', error);
    }
  };

  const fetchLikedItems = async () => {
    try {
      const userId = localStorage.getItem('userID');
      const token = localStorage.getItem('token');
      
      if (!userId || !token) {
        console.error('User ID or token not found');
        return;
      }

      const response = await axios.get(`http://localhost:5000/api/users/${userId}/favorites`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true
      });

      const likedItemsMap = {};
      response.data.forEach(item => {
        likedItemsMap[item._id] = true;
      });
      setLikedItems(likedItemsMap);
    } catch (error) {
      console.error('Error fetching liked items:', error);
    }
  };

  // const fetchCartCount = async () => {
  //   try {
  //     const userId = localStorage.getItem('userID');
  //     const token = localStorage.getItem('token');
      
  //     if (!userId || !token) {
  //       console.error('User ID or token not found');
  //       return;
  //     }

  //     const response = await axios.get(`http://localhost:5000/api/cart/count`, {
  //       headers: { Authorization: `Bearer ${token}` },
  //       withCredentials: true
  //     });

  //     setCartCount(response.data.count);
  //   } catch (error) {
  //     console.error('Error fetching cart count:', error);
  //   }
  // };

  const handleHeartClick = async (id) => {
    try {
      const userId = localStorage.getItem('userID');
      const token = localStorage.getItem('token');
      
      if (!userId || !token) {
        console.error('User ID or token not found');
        return;
      }

      const isLiked = likedItems[id];

      const response = await axios.post(
        `http://localhost:5000/api/users/${userId}/favorite`,
        { itemId: id },
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true
        }
      );

      if (response.status === 200) {
        setLikedItems((prev) => {
          const newLikedItems = { ...prev };
          if (isLiked) {
            delete newLikedItems[id];
          } else {
            newLikedItems[id] = true;
          }
          return newLikedItems;
        });

        if (isProfilePage && isLiked) {
          setItems((prevItems) => prevItems.filter((item) => item._id !== id));
        }
      }
    } catch (error) {
      console.error('Error updating favorite food:', error);
    }
  };

  const handleAddToCart = async (itemId) => {
    try {
      const userId = localStorage.getItem('userID');
      const token = localStorage.getItem('token');
      
      if (!userId || !token) {
        console.error('User ID or token not found');
        return;
      }

      const response = await axios.post(
        `http://localhost:5000/api/cart/add`,
        { itemId, quantity: 1 },
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true
        }
      );

      if (response.status === 200) {
        // fetchCartCount();
        
        // Find the item name
        const addedItem = items.find(item => item._id === itemId);
        const itemName = addedItem ? addedItem.recipeName : 'Item';

        // Show sweet alert
        Swal.fire({
          title: 'Added to Cart!',
          text: `${itemName} added to cart successfully`,
          icon: 'success',
          confirmButtonColor: '#4CAF50', // Green color to match your theme
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false
        });
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to add item to cart. Please try again.',
        icon: 'error',
        confirmButtonColor: '#4CAF50',
      });
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const [categories, setCategories] = useState(['all']);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/categories');
        setCategories(['all', ...response.data]);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar  />
      {/* menu banner */}
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
        <div className="py-48 flex flex-col items-center justify-center">
          {/* content */}
          <div className=" text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              For the Love of Delicious <span className="text-green">Food</span>
            </h2>
            <p className="text-[#4A4A4A] text-xl md:w-4/5 mx-auto">
              Come with family & feel the joy of mouthwatering food such as
              Lasagne, Butternut Pumpkin, Tokusen Wagyu, Olivas Rellenas and more for a moderate cost
            </p>
            <a href="#order"> 
              <button className="bg-green font-semibold btn text-white px-8 py-3 rounded-full mt-10">
                Order Now
              </button>
            </a>
            <Link to="/custom"> 
              <button className="bg-green font-semibold btn text-white px-8 py-3 rounded-full ml-3 mt-5">
                Custom Your Food
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-4">
        {/* Filter and Search Inputs Side by Side */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <label htmlFor="category-filter" className="font-semibold text-gray-700 ">Filter by Category:</label>
            <select
              id="category-filter"
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="input input-bordered bg-white"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Search Input */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search by Title"
              value={searchQuery}
              onChange={handleSearchChange}
              className="input input-bordered bg-white focus:border-green"
            />
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" id='order'>
          {items.map((item) => (
            <div key={item._id} className="card bg-white shadow-lg rounded-lg overflow-hidden relative border border-gray-200">
              <div className="relative">
                <figure>
                  <img src={item.imageUrl} alt={item.recipeName} className="hover:scale-105 transition-all duration-300 md:h-72" />
                </figure>
                <div
                  className={`absolute top-2 right-2 p-2 rounded-full ${
                    likedItems[item._id] ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => handleHeartClick(item._id)}
                >
                  <FaHeart 
                    className="w-6 h-6 cursor-pointer" 
                    fill={likedItems[item._id] ? "red" : "gray"}
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.recipeName}</h3>
                <p className="text-gray mb-2">{item.recipeDetails}</p>
                <p className="text-green-600 font-bold mb-4">${item.price.toFixed(2)}</p>
                <button 
                  className="bg-green text-white px-4 py-2 rounded-lg hover:bg-black transition-colors duration-300"
                  onClick={() => handleAddToCart(item._id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="flex justify-center mt-4">
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`px-3 py-1 rounded ${
                  currentPage === pageNumber ? 'bg-green text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Card;