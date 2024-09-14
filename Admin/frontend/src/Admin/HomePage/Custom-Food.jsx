


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Sidebar from './Sidebar';

function CustomFood() {
  const [customFoods, setCustomFoods] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCustomFoods();
  }, []);

  const fetchCustomFoods = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/custom-foods');
      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      if (!response.data || !Array.isArray(response.data)) {
        throw new Error('Invalid data format received');
      }
      setCustomFoods(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching custom foods:', error);
      setCustomFoods([]);
      setError(error.message || 'An error occurred while fetching custom foods');
    }
  };

  const handleToggleApproval = async (id, currentStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/custom-foods/toggle-approval/${id}`);
      
      Swal.fire({
        title: 'Success!',
        text: `Custom food ${currentStatus ? 'rejected' : 'approved'} successfully.`,
        icon: 'success',
        confirmButtonText: 'OK'
      });

      fetchCustomFoods();
    } catch (error) {
      console.error('Error toggling approval:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to update approval status.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-4 overflow-auto">
        <h1 className="text-2xl font-bold mb-4">Custom Foods</h1>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">UserName</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {customFoods.map((food) => (
                <tr key={food._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{food.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{food.notes}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {food.image && <img src={food.image} alt={food.name} className="w-24 h-16 object-cover" />}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{food.isApproved ? 'Approved' : 'Not Approved'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {food.user ? food.user.name : 'Unknown'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {food.user ? food.user.email : 'Unknown'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleToggleApproval(food._id, food.isApproved)}
                      className={`px-4 py-2 rounded ${food.isApproved ? 'bg-red hover:bg-red' : 'bg-green hover:bg-green'} text-white`}
                    >
                      {food.isApproved ? 'Reject' : 'Approve'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default CustomFood;
