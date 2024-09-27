// // pages/Orders.js
// import React from 'react';
// import Sidebar from "./Sidebar"

// function Orders() {
//   return (
//    <>
//     <Sidebar/>

// <div>
//   <h1 className="text-3xl font-bold mb-4">Orders</h1>
//   <p>Here you can see all the food orders.</p>
// </div>
//    </>
//    );

// }

// export default Orders;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Sidebar from './Sidebar';

// function Orders() {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/DriveOrder/driver', {
//           withCredentials: true
//         });
        
//         setOrders(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error details:', err.response || err);
//         setError('Error fetching orders: ' + (err.response?.data?.message || err.message));
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   if (loading) return <div className="flex-1 p-10">Loading...</div>;
//   if (error) return <div className="flex-1 p-10 text-red-500">Error: {error}</div>;

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1 p-10">
//         <h1 className="text-2xl font-bold mb-5">Orders</h1>
//         {orders.length === 0 ? (
//           <p>No orders found.</p>
//         ) : (
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr>
//                 <th className="py-2 px-4 border-b">Order ID</th>
//                 <th className="py-2 px-4 border-b">Customer</th>
//                 <th className="py-2 px-4 border-b">Amount</th>
//                 <th className="py-2 px-4 border-b">Status</th>
//                 <th className="py-2 px-4 border-b">Date</th>
//                 <th className="py-2 px-4 border-b">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((order) => (
//                 <tr key={order._id}>
//                   <td className="py-2 px-4 border-b">{order._id}</td>
//                   <td className="py-2 px-4 border-b">{order.userId?.name || 'N/A'}</td>
//                   <td className="py-2 px-4 border-b">${order.amount}</td>
//                   <td className="py-2 px-4 border-b">{order.status}</td>
//                   <td className="py-2 px-4 border-b">{new Date(order.createdAt).toLocaleDateString()}</td>
//                   <td className="py-2 px-4 border-b">
//                     <button 
//                       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
//                       onClick={() => handleViewDetails(order._id)}
//                     >
//                       View Details
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );

//   function handleViewDetails(orderId) {
//     // Implement view details functionality
//     console.log(`View details for order ${orderId}`);
//     // You could navigate to a details page or open a modal here
//   }
// }

// export default Orders;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Sidebar from './Sidebar';

// function Orders() {
//   const [payments, setPayments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPayments = async () => {
//       try {
//         const token = localStorage.getItem('driverToken');
//         const response = await axios.get('http://localhost:5000/api/DriveOrder/driver/payments', {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
        
//         setPayments(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error details:', err.response || err);
//         setError('Error fetching payments: ' + (err.response?.data?.message || err.message));
//         setLoading(false);
//       }
//     };

//     fetchPayments();
//   }, []);

//   if (loading) return <div className="flex-1 p-10">Loading...</div>;
//   if (error) return <div className="flex-1 p-10 text-red-500">Error: {error}</div>;

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1 p-10">
//         <h1 className="text-2xl font-bold mb-5">Your Payments</h1>
//         {payments.length === 0 ? (
//           <p>No payments found.</p>
//         ) : (
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr>
//                 <th className="py-2 px-4 border-b">Payment ID</th>
//                 <th className="py-2 px-4 border-b">Customer</th>
//                 <th className="py-2 px-4 border-b">Amount</th>
//                 <th className="py-2 px-4 border-b">Status</th>
//                 <th className="py-2 px-4 border-b">Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {payments.map((payment) => (
//                 <tr key={payment._id}>
//                   <td className="py-2 px-4 border-b">{payment._id}</td>
//                   <td className="py-2 px-4 border-b">{payment.userId?.name || 'N/A'}</td>
//                   <td className="py-2 px-4 border-b">${payment.amount}</td>
//                   <td className="py-2 px-4 border-b">{payment.status}</td>
//                   <td className="py-2 px-4 border-b">{new Date(payment.createdAt).toLocaleDateString()}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Orders;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Sidebar from './Sidebar';

// function Orders() {
//   const [payments, setPayments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPayments = async () => {
//       try {
//         const token = localStorage.getItem('driverToken');
//         const response = await axios.get('http://localhost:5000/api/DriveOrder/driver/payments', {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
        
//         setPayments(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error details:', err.response || err);
//         setError('Error fetching payments: ' + (err.response?.data?.message || err.message));
//         setLoading(false);
//       }
//     };
//     fetchPayments();
//   }, []);

//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex-1 overflow-auto">
//         <div className="p-10">
//           <h1 className="text-2xl font-bold mb-5">Your Payments</h1>
//           {loading && <div>Loading...</div>}
//           {error && <div className="text-red-500">Error: {error}</div>}
//           {!loading && !error && (
//             payments.length === 0 ? (
//               <p>No payments found.</p>
//             ) : (
//               <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white">
//                   <thead>
//                     <tr>
//                       <th className="py-2 px-4 border-b">Payment ID</th>
//                       <th className="py-2 px-4 border-b">Customer</th>
//                       <th className="py-2 px-4 border-b">Amount</th>
//                       <th className="py-2 px-4 border-b">Status</th>
//                       <th className="py-2 px-4 border-b">Date</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {payments.map((payment) => (
//                       <tr key={payment._id}>
//                         <td className="py-2 px-4 border-b">{payment._id}</td>
//                         <td className="py-2 px-4 border-b">{payment.userId?.name || 'N/A'}</td>
//                         <td className="py-2 px-4 border-b">${payment.amount}</td>
//                         <td className="py-2 px-4 border-b">{payment.status}</td>
//                         <td className="py-2 px-4 border-b">{new Date(payment.createdAt).toLocaleDateString()}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Orders;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Sidebar from './Sidebar';

// function Orders() {
//   const [payments, setPayments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPayments = async () => {
//       try {
//         const token = localStorage.getItem('driverToken');
//         const response = await axios.get('http://localhost:5000/api/DriveOrder/driver/payments', {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
        
//         setPayments(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error details:', err.response || err);
//         setError('Error fetching payments: ' + (err.response?.data?.message || err.message));
//         setLoading(false);
//       }
//     };
//     fetchPayments();
//   }, []);

//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex-1 overflow-auto ml-64"> {/* Added ml-64 to offset the sidebar width */}
//         <div className="p-10">
//           <h1 className="text-2xl font-bold mb-5">Your Payments</h1>
//           {loading && <div>Loading...</div>}
//           {error && <div className="text-red-500">Error: {error}</div>}
//           {!loading && !error && (
//             payments.length === 0 ? (
//               <p>No payments found.</p>
//             ) : (
//               <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white">
//                   <thead>
//                     <tr>
//                       <th className="py-2 px-4 border-b">Payment ID</th>
//                       <th className="py-2 px-4 border-b">Customer</th>
//                       <th className="py-2 px-4 border-b">Amount</th>
//                       <th className="py-2 px-4 border-b">Status</th>
//                       <th className="py-2 px-4 border-b">Date</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {payments.map((payment) => (
//                       <tr key={payment._id}>
//                         <td className="py-2 px-4 border-b">{payment._id}</td>
//                         <td className="py-2 px-4 border-b">{payment.userId?.name || 'N/A'}</td>
//                         <td className="py-2 px-4 border-b">${payment.amount}</td>
//                         <td className="py-2 px-4 border-b">{payment.status}</td>
//                         <td className="py-2 px-4 border-b">{new Date(payment.createdAt).toLocaleDateString()}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Orders;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Sidebar from './Sidebar';

// function Orders() {
//   const [payments, setPayments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchPayments();
//   }, []);

//   const fetchPayments = async () => {
//     try {
//       const token = localStorage.getItem('driverToken');
//       const response = await axios.get('http://localhost:5000/api/DriveOrder/driver/payments', {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
      
//       setPayments(response.data);
//       setLoading(false);
//     } catch (err) {
//       console.error('Error details:', err.response || err);
//       setError('Error fetching payments: ' + (err.response?.data?.message || err.message));
//       setLoading(false);
//     }
//   };

//   const updatePaymentStatus = async (paymentId, newStatus) => {
//     try {
//       const token = localStorage.getItem('driverToken');
//       await axios.put(`http://localhost:5000/api/DriveOrder/driver/payment/${paymentId}/status`, 
//         { status: newStatus },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );
      
//       // Update the local state
//       setPayments(payments.map(payment => 
//         payment._id === paymentId ? { ...payment, status: newStatus } : payment
//       ));
//     } catch (err) {
//       console.error('Error updating payment status:', err.response || err);
//       setError('Error updating payment status: ' + (err.response?.data?.message || err.message));
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex-1 overflow-auto ml-64">
//         <div className="p-10">
//           <h1 className="text-2xl font-bold mb-5">Your Payments</h1>
//           {loading && <div>Loading...</div>}
//           {error && <div className="text-red-500">Error: {error}</div>}
//           {!loading && !error && (
//             payments.length === 0 ? (
//               <p>No payments found.</p>
//             ) : (
//               <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white">
//                   <thead>
//                     <tr>
//                       <th className="py-2 px-4 border-b">Payment ID</th>
//                       <th className="py-2 px-4 border-b">Customer</th>
//                       <th className="py-2 px-4 border-b">Amount</th>
//                       <th className="py-2 px-4 border-b">Status</th>
//                       <th className="py-2 px-4 border-b">Date</th>
//                       <th className="py-2 px-4 border-b">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {payments.map((payment) => (
//                       <tr key={payment._id}>
//                         <td className="py-2 px-4 border-b">{payment._id}</td>
//                         <td className="py-2 px-4 border-b">{payment.userId?.name || 'N/A'}</td>
//                         <td className="py-2 px-4 border-b">${payment.amount}</td>
//                         <td className="py-2 px-4 border-b">{payment.status}</td>
//                         <td className="py-2 px-4 border-b">{new Date(payment.createdAt).toLocaleDateString()}</td>
//                         <td className="py-2 px-4 border-b">
//                           <select
//                             value={payment.status}
//                             onChange={(e) => updatePaymentStatus(payment._id, e.target.value)}
//                             className="border rounded px-2 py-1 bg-slate-50"
//                           >
//                             <option value="pending">Pending</option>
//                             <option value="complete">Complete</option>
//                           </select>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Orders;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

function Orders() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const token = localStorage.getItem('driverToken');
      const response = await axios.get('http://localhost:5000/api/DriveOrder/driver/payments', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      setPayments(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error details:', err.response || err);
      setError('Error fetching payments: ' + (err.response?.data?.message || err.message));
      setLoading(false);
    }
  };

  const updatePaymentStatus = async (paymentId, newStatus) => {
    try {
      const token = localStorage.getItem('driverToken');
      await axios.put(`http://localhost:5000/api/DriveOrder/driver/payment/${paymentId}/status`, 
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      
      setPayments(payments.map(payment => 
        payment._id === paymentId ? { ...payment, status: newStatus } : payment
      ));
    } catch (err) {
      console.error('Error updating payment status:', err.response || err);
      setError('Error updating payment status: ' + (err.response?.data?.message || err.message));
    }
  };

  const viewOrderItems = (order) => {
    setSelectedOrder(order);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto ml-64">
        <div className="p-10">
          <h1 className="text-2xl font-bold mb-5">Your Payments</h1>
          {loading && <div>Loading...</div>}
          {error && <div className="text-red-500">Error: {error}</div>}
          {!loading && !error && (
            payments.length === 0 ? (
              <p>No payments found.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b">Payment ID</th>
                      <th className="py-2 px-4 border-b">Customer</th>
                      <th className="py-2 px-4 border-b">Amount</th>
                      <th className="py-2 px-4 border-b">Status</th>
                      <th className="py-2 px-4 border-b">Date</th>
                      <th className="py-2 px-4 border-b">Location</th>
                      <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((payment) => (
                      <tr key={payment._id}>
                        <td className="py-2 px-4 border-b">{payment._id}</td>
                        <td className="py-2 px-4 border-b">{payment.userId?.name || 'N/A'}</td>
                        <td className="py-2 px-4 border-b">${payment.amount}</td>
                        <td className="py-2 px-4 border-b">{payment.status}</td>
                        <td className="py-2 px-4 border-b">{new Date(payment.createdAt).toLocaleDateString()}</td>
                        <td className="py-2 px-4 border-b">
                          {payment.deliveryInfo?.address}, {payment.deliveryInfo?.city}
                        </td>
                        <td className="py-2 px-4 border-b">
                          <select
                            value={payment.status}
                            onChange={(e) => updatePaymentStatus(payment._id, e.target.value)}
                            className="border rounded px-2 py-1 bg-slate-50 mr-2"
                          >
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                          </select>
                          <button
                            onClick={() => viewOrderItems(payment)}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                          >
                            View Items
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          )}
        </div>
        
        {selectedOrder && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <div className="mt-3 text-center">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Order Items</h3>
                <div className="mt-2 px-7 py-3">
                  {selectedOrder.orderSummary.items.map((item, index) => (
                    <p key={index} className="text-sm text-gray-500">
                      {item.name} - Quantity: {item.quantity} - Price: ${item.price}
                    </p>
                  ))}
                </div>
                <div className="items-center px-4 py-3">
                  <button
                    id="ok-btn"
                    className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    onClick={() => setSelectedOrder(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;