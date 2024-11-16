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
//         const response = await axios.get('http://localhost:4000/api/DriveOrder/driver', {
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
//         const response = await axios.get('http://localhost:4000/api/DriveOrder/driver/payments', {
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
//         const response = await axios.get('http://localhost:4000/api/DriveOrder/driver/payments', {
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
//         const response = await axios.get('http://localhost:4000/api/DriveOrder/driver/payments', {
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
//       const response = await axios.get('http://localhost:4000/api/DriveOrder/driver/payments', {
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
//       await axios.put(`http://localhost:4000/api/DriveOrder/driver/payment/${paymentId}/status`, 
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

////////////////////////////////////////////////////done...........................

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Sidebar from './Sidebar';

// function Orders() {
//   const [payments, setPayments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedOrder, setSelectedOrder] = useState(null);

//   useEffect(() => {
//     fetchPayments();
//   }, []);

//   const fetchPayments = async () => {
//     try {
//       const token = localStorage.getItem('driverToken');
//       const response = await axios.get('http://localhost:4000/api/DriveOrder/driver/payments', {
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
//       await axios.put(`http://localhost:4000/api/DriveOrder/driver/payment/${paymentId}/status`, 
//         { status: newStatus },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );
      
//       setPayments(payments.map(payment => 
//         payment._id === paymentId ? { ...payment, status: newStatus } : payment
//       ));
//     } catch (err) {
//       console.error('Error updating payment status:', err.response || err);
//       setError('Error updating payment status: ' + (err.response?.data?.message || err.message));
//     }
//   };

//   const viewOrderItems = (order) => {
//     setSelectedOrder(order);
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
//                       <th className="py-2 px-4 border-b">Location</th>
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
//                           {payment.deliveryInfo?.address}, {payment.deliveryInfo?.city}
//                         </td>
//                         <td className="py-2 px-4 border-b">
//                           <select
//                             value={payment.status}
//                             onChange={(e) => updatePaymentStatus(payment._id, e.target.value)}
//                             className="border rounded px-2 py-1 bg-slate-50 mr-2"
//                           >
//                             <option value="pending">Pending</option>
//                             <option value="completed">Completed</option>
//                             <option value="failed">Failed</option>
//                           </select>
//                           <button
//                             onClick={() => viewOrderItems(payment)}
//                             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
//                           >
//                             View Items
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )
//           )}
//         </div>
        
//         {selectedOrder && (
//           <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
//             <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
//               <div className="mt-3 text-center">
//                 <h3 className="text-lg leading-6 font-medium text-gray-900">Order Items</h3>
//                 <div className="mt-2 px-7 py-3">
//                   {selectedOrder.orderSummary.items.map((item, index) => (
//                     <p key={index} className="text-sm text-gray-500">
//                       {item.name} - Quantity: {item.quantity} - Price: ${item.price}
//                     </p>
//                   ))}
//                 </div>
//                 <div className="items-center px-4 py-3">
//                   <button
//                     id="ok-btn"
//                     className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
//                     onClick={() => setSelectedOrder(null)}
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
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
//   const [selectedOrder, setSelectedOrder] = useState(null);

//   useEffect(() => {
//     fetchPayments();
//   }, []);

//   const fetchPayments = async () => {
//     try {
//       const token = localStorage.getItem('driverToken');
//       const response = await axios.get('http://localhost:4000/api/DriveOrder/driver/payments', {
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
//       await axios.put(`http://localhost:4000/api/DriveOrder/driver/payment/${paymentId}/status`, 
//         { status: newStatus },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );
      
//       setPayments(payments.map(payment => 
//         payment._id === paymentId ? { ...payment, status: newStatus } : payment
//       ));
//     } catch (err) {
//       console.error('Error updating payment status:', err.response || err);
//       setError('Error updating payment status: ' + (err.response?.data?.message || err.message));
//     }
//   };

//   const viewOrderItems = (order) => {
//     setSelectedOrder(order);
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
//                       <th className="py-2 px-4 border-b">Location</th>
//                       <th className="py-2 px-4 border-b">Dilivery Price</th>

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
//                           {payment.deliveryInfo?.address}, {payment.deliveryInfo?.city}
//                         </td>
//                         <td className="py-2 px-4 border-b">${payment.amount*5/100}</td>
//                         <td className="py-2 px-4 border-b">
//                           <select
//                             value={payment.status}
//                             onChange={(e) => updatePaymentStatus(payment._id, e.target.value)}
//                             className="border rounded px-2 py-1 bg-slate-50 mr-2"
//                           >
//                             <option value="pending">Pending</option>
//                             <option value="completed">Completed</option>
//                             <option value="failed">Failed</option>
//                           </select>
//                           <button
//                             onClick={() => viewOrderItems(payment)}
//                             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
//                           >
//                             View Items
//                           </button>
//                         </td>
//                       </tr>
                      
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )
//           )}
//         </div>
        
//         {selectedOrder && (
//           <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
//             <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
//               <div className="mt-3 text-center">
//                 <h3 className="text-lg leading-6 font-medium text-gray-900">Order Items</h3>
//                 <div className="mt-2 px-7 py-3">
//                   {selectedOrder.orderSummary.items.map((item, index) => (
//                     <p key={index} className="text-sm text-gray-500">
//                       {item.name} - Quantity: {item.quantity} - Price: ${item.price}
//                     </p>
//                   ))}
//                 </div>
//                 <div className="items-center px-4 py-3">
//                   <button
//                     id="ok-btn"
//                     className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
//                     onClick={() => setSelectedOrder(null)}
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Orders;










//////////////////////////////////////////////////////////final vesion /////////////////////////////








// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Sidebar from './Sidebar';

// function Orders() {
//   const [payments, setPayments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [totalCommission, setTotalCommission] = useState(0);

//   useEffect(() => {
//     fetchPayments();
//   }, []);

//   const fetchPayments = async () => {
//     try {
//       const token = localStorage.getItem('driverToken');
//       const response = await axios.get('http://localhost:4000/api/DriveOrder/driver/payments', {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
      
//       setPayments(response.data);
//       calculateTotalCommission(response.data);
//       setLoading(false);
//     } catch (err) {
//       console.error('Error details:', err.response || err);
//       setError('Error fetching payments: ' + (err.response?.data?.message || err.message));
//       setLoading(false);
//     }
//   };

//   const calculateTotalCommission = (paymentsData) => {
//     const total = paymentsData.reduce((sum, payment) => sum + (payment.amount * 0.05), 0);
//     setTotalCommission(total);
//   };

//   const updatePaymentStatus = async (paymentId, newStatus) => {
//     try {
//       const token = localStorage.getItem('driverToken');
//       await axios.put(`http://localhost:4000/api/DriveOrder/driver/payment/${paymentId}/status`, 
//         { status: newStatus },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );
      
//       const updatedPayments = payments.map(payment => 
//         payment._id === paymentId ? { ...payment, status: newStatus } : payment
//       );
//       setPayments(updatedPayments);
//       calculateTotalCommission(updatedPayments);
//     } catch (err) {
//       console.error('Error updating payment status:', err.response || err);
//       setError('Error updating payment status: ' + (err.response?.data?.message || err.message));
//     }
//   };

//   const viewOrderItems = (order) => {
//     setSelectedOrder(order);
//   };

//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex-1 overflow-auto ml-64">
//         <div className="p-10">
//           <h1 className="text-2xl font-bold mb-5">Your Orders</h1>
//           {loading && <div>Loading...</div>}
//           {error && <div className="text-red-500">Error: {error}</div>}
//           {!loading && !error && (
//             payments.length === 0 ? (
//               <p>No payments found.</p>
//             ) : (
//               <>
//                 <div className="mb-4">
//                   <strong>Total Delivery Commission: JD{totalCommission.toFixed(2)}</strong>
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full bg-white">
//                     <thead>
//                       <tr>
//                         <th className="py-2 px-4 border-b">Payment ID</th>
//                         <th className="py-2 px-4 border-b">Customer</th>
//                         <th className="py-2 px-4 border-b">Amount</th>
//                         <th className="py-2 px-4 border-b">Status</th>
//                         <th className="py-2 px-4 border-b">Date</th>
//                         <th className="py-2 px-4 border-b">Location</th>
//                         <th className="py-2 px-4 border-b">Delivery Commission</th>
//                         <th className="py-2 px-4 border-b">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {payments.map((payment) => (
//                         <tr key={payment._id}>
//                           <td className="py-2 px-4 border-b">{payment._id}</td>
//                           <td className="py-2 px-4 border-b">{payment.userId?.name || 'N/A'}</td>
//                           <td className="py-2 px-4 border-b">JD{payment.amount}</td>
//                           <td className="py-2 px-4 border-b">{payment.status}</td>
//                           <td className="py-2 px-4 border-b">{new Date(payment.createdAt).toLocaleDateString()}</td>
//                           <td className="py-2 px-4 border-b">
//                             {payment.deliveryInfo?.address}, {payment.deliveryInfo?.city}
//                           </td>
//                           <td className="py-2 px-4 border-b">JD{(payment.amount * 0.05).toFixed(2)}</td>
//                           <td className="py-2 px-4 border-b">
//                             <select
//                               value={payment.status}
//                               onChange={(e) => updatePaymentStatus(payment._id, e.target.value)}
//                               className="border rounded px-2 py-1 bg-slate-50 mr-2"
//                             >
//                               <option value="pending">Pending</option>
//                               <option value="completed">Completed</option>
//                               {/* <option value="failed">Failed</option> */}
//                             </select>
//                             <button
//                               onClick={() => viewOrderItems(payment)}
//                               className="bg-green hover:bg-[#059212] text-white font-bold py-1 px-2 rounded"
//                             >
//                               View Items
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </>
//             )
//           )}
//         </div>
        
//         {selectedOrder && (
//           <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
//             <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
//               <div className="mt-3 text-center">
//                 <h3 className="text-lg leading-6 font-medium text-gray-900">Order Items</h3>
//                 <div className="mt-2 px-7 py-3">
//                   {selectedOrder.orderSummary.items.map((item, index) => (
//                     <p key={index} className="text-sm text-gray-500">
//                       {item.name} - Quantity: {item.quantity} - Price: ${item.price}
//                     </p>
//                   ))}
//                 </div>
//                 <div className="items-center px-4 py-3">
//                   <button
//                     id="ok-btn"
//                     className="px-4 py-2 bg-green text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-[#059212] focus:outline-none focus:ring-2 focus:ring-blue-300"
//                     onClick={() => setSelectedOrder(null)}
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Orders;














////////////////////////////////////////////work with status //////////////////////

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Sidebar from './Sidebar';

// function Orders() {
//   const [payments, setPayments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [totalCommission, setTotalCommission] = useState(0);
//   const [driverStatus, setDriverStatus] = useState('available');

//   useEffect(() => {
//     fetchPayments();
//     fetchDriverStatus();
//   }, []);

//   const fetchDriverStatus = async () => {
//     try {
//       const token = localStorage.getItem('driverToken');
//       const response = await axios.get('http://localhost:4000/api/drivers/driver/status', {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       setDriverStatus(response.data.status);
//     } catch (err) {
//       console.error('Error fetching driver status:', err);
//     }
//   };

//   const fetchPayments = async () => {
//     try {
//       const token = localStorage.getItem('driverToken');
//       const response = await axios.get('http://localhost:4000/api/DriveOrder/driver/payments', {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
      
//       setPayments(response.data);
//       calculateTotalCommission(response.data);
//       setLoading(false);
//     } catch (err) {
//       console.error('Error details:', err.response || err);
//       setError('Error fetching payments: ' + (err.response?.data?.message || err.message));
//       setLoading(false);
//     }
//   };

//   const calculateTotalCommission = (paymentsData) => {
//     const total = paymentsData.reduce((sum, payment) => sum + (payment.amount * 0.05), 0);
//     setTotalCommission(total);
//   };

//   const updatePaymentStatus = async (paymentId, newStatus) => {
//     try {
//       const token = localStorage.getItem('driverToken');
//       const response = await axios.put(
//         `http://localhost:4000/api/DriveOrder/driver/payment/${paymentId}/status`,
//         { status: newStatus },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );
      
//       const updatedPayments = payments.map(payment => 
//         payment._id === paymentId ? { ...payment, status: newStatus } : payment
//       );
//       setPayments(updatedPayments);
//       calculateTotalCommission(updatedPayments);
      
//       // Update driver status based on response
//       if (response.data.driverStatus) {
//         setDriverStatus(response.data.driverStatus);
//       }

//       // Refresh driver status
//       fetchDriverStatus();
//     } catch (err) {
//       console.error('Error updating payment status:', err.response || err);
//       setError('Error updating payment status: ' + (err.response?.data?.message || err.message));
//     }
//   };

//   const viewOrderItems = (order) => {
//     setSelectedOrder(order);
//   };

//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex-1 overflow-auto ml-64">
//         <div className="p-10">
//           <div className="flex justify-between items-center mb-5">
//             <h1 className="text-2xl font-bold">Your Orders</h1>
//             <div className={`px-4 py-2 rounded ${
//               driverStatus === 'available' ? 'bg-green' : 'bg-yellow-500'
//             } text-white font-medium`}>
//              Drvier  Status: {driverStatus.charAt(0).toUpperCase() + driverStatus.slice(1)}
//             </div>
//           </div>
          
//           {loading && <div className="text-center py-4">Loading...</div>}
//           {error && <div className="text-red-500 bg-red-50 p-4 rounded mb-4">Error: {error}</div>}
          
//           {!loading && !error && (
//             payments.length === 0 ? (
//               <p className="text-gray-500 text-center py-4">No payments found.</p>
//             ) : (
//               <>
//                 <div className="mb-6 p-4 bg-gray-50 rounded-lg">
//                   <strong className="text-lg">Total Delivery Commission: JD {totalCommission.toFixed(2)}</strong>
//                 </div>
                
//                 <div className="overflow-x-auto bg-white rounded-lg shadow">
//                   <table className="min-w-full">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment ID</th>
//                         <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
//                         <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
//                         <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                         <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//                         <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
//                         <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commission</th>
//                         <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-200">
//                       {payments.map((payment) => (
//                         <tr key={payment._id} className="hover:bg-gray-50">
//                           <td className="py-4 px-4 text-sm">{payment._id}</td>
//                           <td className="py-4 px-4 text-sm">{payment.userId?.name || 'N/A'}</td>
//                           <td className="py-4 px-4 text-sm">JD {payment.amount}</td>
//                           <td className="py-4 px-4 text-sm">
//                             <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                               payment.status === 'completed' ? 'bg-green text-white' :
//                               payment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
//                               'bg-red-100 text-red-800'
//                             }`}>
//                               {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
//                             </span>
//                           </td>
//                           <td className="py-4 px-4 text-sm">{new Date(payment.createdAt).toLocaleDateString()}</td>
//                           <td className="py-4 px-4 text-sm">
//                             {payment.deliveryInfo?.address}, {payment.deliveryInfo?.city}
//                           </td>
//                           <td className="py-4 px-4 text-sm">JD{(payment.amount * 0.05).toFixed(2)}</td>
//                           <td className="py-4 px-4 text-sm">
//                             <div className="flex items-center space-x-2">
//                               <select
//                                 value={payment.status}
//                                 onChange={(e) => updatePaymentStatus(payment._id, e.target.value)}
//                                 className="border rounded px-2 py-1 text-sm bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                               >
//                                 <option value="pending">Pending</option>
//                                 <option value="completed">Completed</option>
//                               </select>
                              
//                               <button
//                                 onClick={() => viewOrderItems(payment)}
//                                 className="bg-green hover:bg-green text-white text-sm font-medium py-1 px-3 rounded focus:outline-none focus:ring-2 focus:ring-green"
//                               >
//                                 View Items
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </>
//             )
//           )}
//         </div>
        
//         {selectedOrder && (
//           <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
//             <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
//               <div className="mt-3">
//                 <h3 className="text-lg font-medium text-gray-900 mb-4">Order Items</h3>
//                 <div className="mt-2 space-y-3">
//                   {selectedOrder.orderSummary.items.map((item, index) => (
//                     <div key={index} className="flex justify-between items-center text-sm text-gray-600 border-b pb-2">
//                       <div>
//                         <p className="font-medium">{item.name}</p>
//                         <p className="text-xs text-gray-500">Quantity: {item.quantity}</p>
//                       </div>
//                       <p className="font-medium">JD{item.price}</p>
//                     </div>
//                   ))}
//                   <div className="pt-3 text-right">
//                     <p className="text-sm font-medium text-gray-900">
//                       Total: JD{selectedOrder.orderSummary.totalPrice}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="mt-4">
//                   <button
//                     className="w-full bg-green text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2"
//                     onClick={() => setSelectedOrder(null)}
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Orders;









////////////



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from './Sidebar';

// function Orders() {
//   const [payments, setPayments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [totalCommission, setTotalCommission] = useState(0);
//   const [driverStatus, setDriverStatus] = useState('available');

//   useEffect(() => {
//     fetchPayments();
//     fetchDriverStatus();
//   }, []);

//   const fetchDriverStatus = async () => {
//     try {
//       const token = localStorage.getItem('driverToken');
//       const response = await axios.get('http://localhost:4000/api/drivers/driver/status', {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       setDriverStatus(response.data.status);
//     } catch (err) {
//       console.error('Error fetching driver status:', err);
//     }
//   };

//   const fetchPayments = async () => {
//     try {
//       const token = localStorage.getItem('driverToken');
//       const response = await axios.get('http://localhost:4000/api/DriveOrder/driver/payments', {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
      
//       setPayments(response.data);
//       calculateTotalCommission(response.data);
//       setLoading(false);
//     } catch (err) {
//       console.error('Error details:', err.response || err);
//       setError('Error fetching payments: ' + (err.response?.data?.message || err.message));
//       setLoading(false);
//     }
//   };

//   const calculateTotalCommission = (paymentsData) => {
//     const total = paymentsData.reduce((sum, payment) => sum + (payment.amount * 0.05), 0);
//     setTotalCommission(total);
//   };

//   const updatePaymentStatus = async (paymentId, newStatus) => {
//     try {
//       const token = localStorage.getItem('driverToken');
//       const response = await axios.put(
//         `http://localhost:4000/api/DriveOrder/driver/payment/${paymentId}/status`,
//         { status: newStatus },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );
      
//       const updatedPayments = payments.map(payment => 
//         payment._id === paymentId ? { ...payment, status: newStatus } : payment
//       );
//       setPayments(updatedPayments);
//       calculateTotalCommission(updatedPayments);
      
//       if (response.data.driverStatus) {
//         setDriverStatus(response.data.driverStatus);
//       }

//       fetchDriverStatus();
//     } catch (err) {
//       console.error('Error updating payment status:', err.response || err);
//       setError('Error updating payment status: ' + (err.response?.data?.message || err.message));
//     }
//   };

//   const viewOrderItems = (order) => {
//     setSelectedOrder(order);
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <div className="flex-1 overflow-auto">
//         <div className="p-10">
//           <div className="flex justify-between items-center mb-5">
//             <h1 className="text-2xl font-bold">Your <span className='text-green'>Orders</span></h1>
          
//           </div>
          
//           {loading && <div className="text-center py-4">Loading...</div>}
//           {error && <div className="text-red-500 bg-red-50 p-4 rounded mb-4">{error}</div>}
          
//           {!loading && !error && (
//             payments.length === 0 ? (
//               <p className="text-gray-500 text-center py-4">No orders found.</p>
//             ) : (
//               <>
//                 <div className="mb-6 p-4 bg-gray-50 rounded-lg">
//                   <strong className="text-lg">Total Delivery Commission: JD {totalCommission.toFixed(2)}</strong>
//                 </div>
                
//                 <div className="overflow-x-auto bg-white rounded-lg shadow">
//                   <table className="min-w-full">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment ID</th>
//                         <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
//                         <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
//                         <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                         <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//                         <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
//                         <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commission</th>
//                         <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-200">
//                       {payments.map((payment) => (
//                         <tr key={payment._id} className="hover:bg-gray-50">
//                           <td className="py-4 px-4 text-sm">{payment._id}</td>
//                           <td className="py-4 px-4 text-sm">{payment.userId?.name || 'N/A'}</td>
//                           <td className="py-4 px-4 text-sm">JD {payment.amount}</td>
//                           <td className="py-4 px-4 text-sm">
//                             <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                               payment.status === 'completed' ? 'bg-green text-white' :
//                               payment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
//                               'bg-red-100 text-red-800'
//                             }`}>
//                               {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
//                             </span>
//                           </td>
//                           <td className="py-4 px-4 text-sm">{new Date(payment.createdAt).toLocaleDateString()}</td>
//                           <td className="py-4 px-4 text-sm">
//                             {payment.deliveryInfo?.address}, {payment.deliveryInfo?.city}
//                           </td>
//                           <td className="py-4 px-4 text-sm">JD{(payment.amount * 0.05).toFixed(2)}</td>
//                           <td className="py-4 px-4 text-sm">
//                             <div className="flex items-center space-x-2">
//                               <select
//                                 value={payment.status}
//                                 onChange={(e) => updatePaymentStatus(payment._id, e.target.value)}
//                                 className="border rounded px-2 py-1 text-sm bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                               >
//                                 <option value="pending">Pending</option>
//                                 <option value="completed">Completed</option>
//                               </select>
                              
//                               <button
//                                 onClick={() => viewOrderItems(payment)}
//                                 className="bg-green hover:bg-green text-white text-sm font-medium py-1 px-3 rounded focus:outline-none focus:ring-2 focus:ring-green"
//                               >
//                                 View Items
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </>
//             )
//           )}
//         </div>
        
//         {selectedOrder && (
//           <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
//             <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
//               <div className="mt-3">
//                 <h3 className="text-lg font-medium text-gray-900 mb-4">Order Items</h3>
//                 <div className="mt-2 space-y-3">
//                   {selectedOrder.orderSummary.items.map((item, index) => (
//                     <div key={index} className="flex justify-between items-center text-sm text-gray-600 border-b pb-2">
//                       <div>
//                         <p className="font-medium">{item.name}</p>
//                         <p className="text-xs text-gray-500">Quantity: {item.quantity}</p>
//                       </div>
//                       <p className="font-medium">JD{item.price}</p>
//                     </div>
//                   ))}
//                   <div className="pt-3 text-right">
//                     <p className="text-sm font-medium text-gray-900">
//                       Total: JD{selectedOrder.orderSummary.totalPrice}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="mt-4">
//                   <button
//                     className="w-full bg-green text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2"
//                     onClick={() => setSelectedOrder(null)}
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Orders;

















import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Sidebar';

function Orders() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [totalCommission, setTotalCommission] = useState(0);
  const [driverStatus, setDriverStatus] = useState('available');

  useEffect(() => {
    fetchPayments();
    fetchDriverStatus();
  }, []);

  const fetchDriverStatus = async () => {
    try {
      const token = localStorage.getItem('driverToken');
      const response = await axios.get('http://localhost:4000/api/drivers/driver/status', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setDriverStatus(response.data.status);
    } catch (err) {
      console.error('Error fetching driver status:', err);
    }
  };

  const fetchPayments = async () => {
    try {
      const token = localStorage.getItem('driverToken');
      const response = await axios.get('http://localhost:4000/api/DriveOrder/driver/payments', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      setPayments(response.data);
      calculateTotalCommission(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error details:', err.response || err);
      setError('Error fetching payments: ' + (err.response?.data?.message || err.message));
      setLoading(false);
    }
  };

  const calculateTotalCommission = (paymentsData) => {
    const total = paymentsData.reduce((sum, payment) => sum + (payment.amount * 0.05), 0);
    setTotalCommission(total);
  };

  const updatePaymentStatus = async (paymentId, newStatus) => {
    try {
      // Prevent changing from completed to pending
      const payment = payments.find(p => p._id === paymentId);
      if (payment.status === 'completed' && newStatus === 'pending') {
        setError('Cannot change status from completed to pending');
        return;
      }

      const token = localStorage.getItem('driverToken');
      const response = await axios.put(
        `http://localhost:4000/api/DriveOrder/driver/payment/${paymentId}/status`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      
      const updatedPayments = payments.map(payment => 
        payment._id === paymentId ? { ...payment, status: newStatus } : payment
      );
      setPayments(updatedPayments);
      calculateTotalCommission(updatedPayments);
      
      if (response.data.driverStatus) {
        setDriverStatus(response.data.driverStatus);
      }

      fetchDriverStatus();
      setError(null); // Clear any existing errors
    } catch (err) {
      console.error('Error updating payment status:', err.response || err);
      setError('Error updating payment status: ' + (err.response?.data?.message || err.message));
    }
  };

  const viewOrderItems = (order) => {
    setSelectedOrder(order);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 overflow-auto">
        <div className="p-10">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-2xl font-bold">Your <span className='text-green'>Orders</span></h1>
          </div>
          
          {loading && <div className="text-center py-4">Loading...</div>}
          {error && <div className="text-red-500 bg-red-50 p-4 rounded mb-4">{error}</div>}
          
          {!loading && !error && (
            payments.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No orders found.</p>
            ) : (
              <>
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <strong className="text-lg">Total Delivery Commission: JD {totalCommission.toFixed(2)}</strong>
                </div>
                
                <div className="overflow-x-auto bg-white rounded-lg shadow">
                  <table className="min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment ID</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commission</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {payments.map((payment) => (
                        <tr key={payment._id} className="hover:bg-gray-50">
                          <td className="py-4 px-4 text-sm">{payment._id}</td>
                          <td className="py-4 px-4 text-sm">{payment.userId?.name || 'N/A'}</td>
                          <td className="py-4 px-4 text-sm">JD {payment.amount}</td>
                          <td className="py-4 px-4 text-sm">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              payment.status === 'completed' ? 'bg-green text-white' :
                              payment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-sm">{new Date(payment.createdAt).toLocaleDateString()}</td>
                          <td className="py-4 px-4 text-sm">
                            {payment.deliveryInfo?.address}, {payment.deliveryInfo?.city}
                          </td>
                          <td className="py-4 px-4 text-sm">JD{(payment.amount * 0.05).toFixed(2)}</td>
                          <td className="py-4 px-4 text-sm">
                            <div className="flex items-center space-x-2">
                              <select
                                value={payment.status}
                                onChange={(e) => updatePaymentStatus(payment._id, e.target.value)}
                                disabled={payment.status === 'completed'}
                                className={`border rounded px-2 py-1 text-sm bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                  payment.status === 'completed' ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                              >
                                <option value="pending">Pending</option>
                                <option value="completed">Completed</option>
                              </select>
                              
                              <button
                                onClick={() => viewOrderItems(payment)}
                                className="bg-green hover:bg-green text-white text-sm font-medium py-1 px-3 rounded focus:outline-none focus:ring-2 focus:ring-green"
                              >
                                View Items
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )
          )}
        </div>
        
        {selectedOrder && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Order Items</h3>
                <div className="mt-2 space-y-3">
                  {selectedOrder.orderSummary.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center text-sm text-gray-600 border-b pb-2">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-xs text-gray-500">Quantity: {item.quantity}</p>
                      </div>
                      <p className="font-medium">JD{item.price}</p>
                    </div>
                  ))}
                  <div className="pt-3 text-right">
                    <p className="text-sm font-medium text-gray-900">
                      Total: JD{selectedOrder.orderSummary.totalPrice}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    className="w-full bg-green text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2"
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