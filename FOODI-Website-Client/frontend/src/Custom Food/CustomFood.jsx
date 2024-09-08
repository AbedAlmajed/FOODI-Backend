import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
export default function CustomFood() {
  const [formData, setFormData] = useState({
    name: '',
    notes: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-1 flex justify-center items-center p-6 mt-20">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-8">
          <h1 className="text-3xl font-bold text-gray-9 mb-4 text-center">Add Custom Food</h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Food Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green sm:text-sm bg-white"
                placeholder="Enter food name"
                required
              />
            </div>

            {/* Notes Field */}
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green sm:text-sm bg-white"
                placeholder="Add any notes about the food"
              ></textarea>
            </div>

            {/* Image Upload */}
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Image</label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-lg file:text-sm file:font-medium hover:file:bg-black file:bg-green"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green text-white py-3 px-6 rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-2 "
            >
              Add to Cart
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
