import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaPaypal } from 'react-icons/fa'; // Importing icons

export default function Payment() {
  return (
    <div className="p-4 md:p-8">
      <Navbar />

      <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-12 px-4 md:px-16">

        {/* Shopping Details */}
        <div className="flex-1 md:w-1/2 pr-4 mt-10 md:mt-20">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Order Summary</h3>
          <div className="space-y-2">
            <p><strong className='text-green'>Total Price: </strong> $50</p>
            <p><strong className='text-green'>Number of Items: </strong>3</p>
          </div>
        </div>

        {/* Payment Method */}
        <div className="flex-1 md:w-1/2 pl-4 bg-white shadow-md rounded-md mt-10 md:mt-20">
          <h3 className="text-lg md:text-xl font-semibold mb-4 mt-6">Process Your Payment</h3>
          
          {/* Credit/Debit Card Payment */}
          <form className="space-y-4">
            <div className="relative">
              <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">Credit / Debit Card</label>
              <input
                type="text"
                id="cardNumber"
                className="w-full pl-12 py-4 border border-gray-300 rounded-md bg-white"
                placeholder="Card Number"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 flex items-center">
                <FaCcVisa size={20} className="mr-2 mb-5" />
                <FaCcMastercard size={20} className="mr-2 mb-5" />
                <FaCcAmex size={20}  className="mr-2 mb-5"/>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md bg-green hover:bg-black"
            >
              Pay Now
            </button>
            <hr className='my-4 border-gray-300' />
          </form>
          
          {/* PayPal Button */}
          <div className="mt-6 flex justify-center mb-5">
            <button
              type="button"
              className="flex items-center justify-center w-80 bg-green-500 text-white py-2 rounded-md bg-green hover:bg-black"
            >
              <FaPaypal size={20} className="mr-2" />
              Pay with PayPal
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
