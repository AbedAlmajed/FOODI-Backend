import React from 'react';
import { CheckCircle, Trash2 } from 'lucide-react'; // Import Trash2 icon
import Sidebar from './Sidebar'; // Import Sidebar component

const Booking = () => {
  // Sample bookings data
  const bookings = [
    { user: 'John Doe', transactionId: 'TX12345', price: 29.99, status: 'confirmed' },
    { user: 'Jane Smith', transactionId: 'TX12346', price: 45.00, status: 'order pending' },
    { user: 'Emily Johnson', transactionId: 'TX12347', price: 12.50, status: 'confirmed' },
    { user: 'Michael Brown', transactionId: 'TX12348', price: 99.99, status: 'order pending' },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar /> {/* Include Sidebar */}
      <div className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-6">Manage All <span className='text-green'>Bookings!</span></h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">User</th>
                <th className="py-3 px-4 text-left">Transaction ID</th>
                <th className="py-3 px-4 text-left">Price</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Confirm Order</th>
                <th className="py-3 px-4 text-left">Delete</th> {/* Changed to Delete */}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bookings.map((booking, index) => (
                <tr key={booking.transactionId} className="hover:bg-gray-50">
                  <td className="py-4 px-4">{index + 1}</td>
                  <td className="py-4 px-4">{booking.user}</td>
                  <td className="py-4 px-4">{booking.transactionId}</td>
                  <td className="py-4 px-4">${booking.price.toFixed(2)}</td>
                  <td className="py-4 px-4">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      booking.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'text-white bg-green'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    {booking.status === 'order pending' ? (
                      <button className="text-green hover:text-green">
                        <CheckCircle size={20} />
                      </button>
                    ) : (
                      <span className="text-gray-400">done</span>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-red hover:text-red">
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Booking;
