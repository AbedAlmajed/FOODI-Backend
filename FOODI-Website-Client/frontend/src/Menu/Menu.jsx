// import React, { useState } from 'react';
// import { FaHeart } from 'react-icons/fa';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import {Link} from "react-router-dom"
// // Sample items array
// const items = [
//   {
//     _id: "642c155b2c4774f05c36eeaa",
//     name: "Haddock",
//     recipe: "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
//     image: "/recipes/img1.png",
//     category: "salad",
//     price: 14.7
//   },
//   {
//     _id: "642c155b2c4774f05c36eeb9",
//     name: "Haddock",
//     recipe: "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
//     image: "/recipes/img2.png",
//     category: "drinks",
//     price: 14.7
//   },
//   {
//     _id: "642c155b2c4774f05c36ee7c",
//     name: "Escalope de Veau",
//     recipe: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
//     image: "/recipes/img1.png",
//     category: "popular",
//     price: 14.5
//   },
//   {
//     _id: "642c155b2c4774f05c36ee88",
//     name: "Escalope de Veau",
//     recipe: "Pan roasted haddock fillet wrapped in smoked French bacon with pea purée and tomato and chive vinaigrette",
//     image: "/recipes/img1.png",
//     category: "dessert",
//     price: 12.5
//   },
//   {
//     _id: "642c155b2c4774f05c36ee7a",
//     name: "Roast Duck Breast",
//     recipe: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
//     image: "/recipes/img2.png",
//     category: "popular",
//     price: 14.5
//   },
//   {
//     _id: "642c155b2c47e7a74f05c36e",
//     name: "Roast Duck Breast",
//     recipe: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
//     image: "/recipes/img2.png",
//     category: "popular",
//     price: 14.5
//   },
//   {
//     _id: "642c155b2c4774f05c36ee7a",
//     name: "Roast Duck Breast",
//     recipe: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
//     image: "/recipes/img2.png",
//     category: "popular",
//     price: 14.5
//   },
//   {
//     _id: "642c155b77775c36ee7a",
//     name: "Roast Duck Breast",
//     recipe: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
//     image: "/recipes/img2.png",
//     category: "popular",
//     price: 14.5
//   },
//   {
//     _id: "642c88888f05c36ee7a",
//     name: "Roast Duck Breast",
//     recipe: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
//     image: "/recipes/img2.png",
//     category: "popular",
//     price: 14.5
//   },
//   {
//     _id: "642c1778805c36ee7a",
//     name: "Roast Duck Breast",
//     recipe: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
//     image: "/recipes/img2.png",
//     category: "popular",
//     price: 14.5
//   },
//   {
//     _id: "642c1778805c58587a",
//     name: "Roast Duck Breast",
//     recipe: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
//     image: "/recipes/img2.png",
//     category: "popular",
//     price: 14.5
//   },
//   {
//     _id: "642c1778805c3699a",
//     name: "Roast Duck Breast",
//     recipe: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
//     image: "/recipes/img2.png",
//     category: "popular",
//     price: 14.5
//   },
// ];

// const itemsPerPage = 6; // Items per page

// const Card = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [likedItems, setLikedItems] = useState({});
//   const [selectedCategory, setSelectedCategory] = useState('all');

//   // Filter items based on the search query and selected category
//   const filteredItems = items.filter(item =>
//     (item.name.toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery === '') &&
//     (selectedCategory === 'all' || item.category === selectedCategory)
//   );

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

//   const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

//   // Create an array of page numbers for pagination
//   const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//     setCurrentPage(1); // Reset to the first page when searching
//   };

//   const handleHeartClick = (id) => {
//     setLikedItems((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     setCurrentPage(1); // Reset to the first page when changing category
//   };

//   // Get unique categories for the filter options
//   const categories = Array.from(new Set(items.map(item => item.category)));
//   const allCategories = ['all', ...categories]; // Include 'all' as an option

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       {/* menu banner */}
//       <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
//         <div className="py-48 flex flex-col items-center justify-center">
//           {/* content */}
//           <div className=" text-center px-4 space-y-7">
//             <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
//               For the Love of Delicious <span className="text-green">Food</span>
//             </h2>
//             <p className="text-[#4A4A4A] text-xl md:w-4/5 mx-auto">
//               Come with family & feel the joy of mouthwatering food such as
//                 , Lasagne, Butternut Pumpkin, Tokusen Wagyu, Olivas
//               Rellenas and more for a moderate cost
//             </p>
//            <a href="#order"> <button className="bg-green font-semibold btn text-white px-8 py-3 rounded-full mt-10">
//               Order Now
//             </button></a>
//             <Link to="/custom"> 
//          <button className="bg-green font-semibold btn text-white px-8 py-3 rounded-full ml-3 mt-5">
//             Custom Your Food
//           </button>
//           </Link>
//           </div>
//         </div>
//       </div>
//       <div className="p-4 flex flex-col gap-4">
//         {/* Filter and Search Inputs Side by Side */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
//           {/* Category Filter */}
//           <div className="flex items-center gap-2">
//             <label htmlFor="category-filter" className="font-semibold text-gray-700 ">Filter by Category:</label>
//             <select
//               id="category-filter"
//               value={selectedCategory}
//               onChange={(e) => handleCategoryChange(e.target.value)}
//               className="input input-bordered bg-white"
//             >
//               {allCategories.map((category) => (
//                 <option key={category} value={category}>
//                   {category.charAt(0).toUpperCase() + category.slice(1)}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Search Input */}
//           <div className="flex items-center gap-2">
//             <input
//               type="text"
//               placeholder="Search by Title"
//               value={searchQuery}
//               onChange={handleSearchChange}
//               className="input input-bordered bg-white focus:border-green"
//             />
//           </div>
//         </div>

//         {/* Items Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" id='order'>
//           {currentItems.map((item) => (
//             <div key={item._id} className="card bg-white shadow-lg rounded-lg overflow-hidden relative border border-gray-200">
//               <div className="relative">
//                 <figure>
//                   <img src={item.image} alt={item.name} className="hover:scale-105 transition-all duration-300 md:h-72" />
//                 </figure>
//                 <div
//                   className={`absolute top-2 right-2 p-2 rounded-full ${
//                     likedItems[item._id] ? "text-red" : "text-black"
//                   }`}
//                   onClick={() => handleHeartClick(item._id)}
//                 >
//                   <FaHeart className="w-6 h-6 cursor-pointer" />
//                 </div>
//               </div>
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.name}</h3>
//                 <p className="text-gray mb-2">{item.recipe}</p>
//                 <p className="text-green-600 font-bold mb-4">${item.price.toFixed(2)}</p>
//                 <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-black transition-colors duration-300">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination controls */}
//         <div className="flex justify-center mt-4">
//           <div className="flex space-x-2">
//             {pageNumbers.map((number) => (
//               <button
//                 key={number}
//                 onClick={() => handlePageChange(number)}
//                 className={`px-4 py-2 mx-2 rounded-md ${
//                   currentPage === number
//                     ? "bg-green text-white"
//                     : "bg-gray-200"
//                 }`}
//               >
//                 {number}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Card;





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHeart } from 'react-icons/fa';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from "react-router-dom";

const itemsPerPage = 6; // Items per page

const Card = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [likedItems, setLikedItems] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchItems();
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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const handleHeartClick = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page when changing category
  };

  // Get unique categories for the filter options
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
      <Navbar />
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
                    likedItems[item._id] ? "text-red" : "text-black"
                  }`}
                  onClick={() => handleHeartClick(item._id)}
                >
                  <FaHeart className="w-6 h-6 cursor-pointer" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.recipeName}</h3>
                <p className="text-gray mb-2">{item.recipeDetails}</p>
                <p className="text-green-600 font-bold mb-4">${item.price.toFixed(2)}</p>
                <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-black transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="flex justify-center mt-4">
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
              <button
                key={number}
                onClick={() => handlePageChange(number)}
                className={`px-4 py-2 mx-2 rounded-md ${
                  currentPage === number
                    ? "bg-green text-white"
                    : "bg-gray-200"
                }`}
              >
                {number}
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