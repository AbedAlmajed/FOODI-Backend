// src/pages/MenuItemDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CommentSection from './CommentSection';

const MenuItemDetails = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/menu-items/${id}`);
        setItem(response.data);
      } catch (error) {
        console.error('Error fetching menu item:', error);
      }
    };
    fetchItem();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={item.imageUrl} alt={item.recipeName} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{item.recipeName}</h1>
            <p className="text-gray-600 mb-4">{item.recipeDetails}</p>
            <p className="text-2xl font-bold text-green-600 mb-4">${item.price.toFixed(2)}</p>
            <p className="text-gray-600 mb-2"><span className="font-semibold">Category:</span> {item.category}</p>
            {/* Add more details as needed */}
          </div>
          <CommentSection menuItemId={id} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MenuItemDetails;