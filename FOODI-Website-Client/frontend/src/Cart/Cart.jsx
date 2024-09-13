// import React from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import { FaTrash } from 'react-icons/fa'; // Import delete icon
// import { Link } from 'react-router-dom';
// // Sample data for cart items
// const cartItems  = [
//   {
//     id: 1,
//     image: "/recipes/img1.png",
//     itemName: "Chicken Breast",
//     quantity: 2,
//     price: 15.99
//   },
//   {
//     id: 2,
//     image: "/recipes/img1.png",
//     itemName: "Pizza Slice",
//     quantity: 1,
//     price: 12.99
//   },
//   {
//     id: 3,
//     image: "/recipes/img1.png",
//     itemName: "Salad Bowl",
//     quantity: 3,
//     price: 9.99
//   }
// ];

// export default function Cart() {

//   return (
//     <div className="p-4 md:p-8">
//       <Navbar />
      
//       {/* Menu Banner */}
//       <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-[#FAFAFA] to-[#FCFCFC]">
//         <div className="py-24 md:py-48 flex flex-col items-center justify-center">
//           <div className="text-center px-4 space-y-4 md:space-y-7">
//             <h2 className="text-3xl md:text-5xl font-bold leading-snug">
//               Items Added to the <span className="text-green">Food</span>
//             </h2>
//           </div>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto mb-8 md:mb-12 px-4 md:px-16">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-green">
//             <tr>
//               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
//               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Food</th>
//               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Name</th>
//               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
//               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
//               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {cartItems.map((item, index) => (
//               <tr key={item.id}>
//                 <td className="px-4 py-2 text-sm text-gray-500">{index + 1}</td>
//                 <td className="px-4 py-2 text-sm text-gray-500 flex items-center space-x-2">
//                   <img src={item.image} alt={item.itemName} className="w-8 h-8 md:w-12 md:h-12 object-cover rounded" />
//                 </td>
//                 <td className="px-4 py-2 text-sm text-gray-500">{item.itemName}</td>
//                 <td className="px-4 py-2 text-sm text-gray-500">
//                   <div className="flex items-center space-x-2">
//                     <button
//                       className="px-1 py-1 bg-gray-300 rounded text-gray-700 hover:bg-gray-400 text-sm md:text-base"
//                     >
//                       -
//                     </button>
//                     <span className="text-sm text-gray-700">{item.quantity}</span>
//                     <button
//                       className="px-1 py-1 bg-gray-300 rounded text-gray-700 hover:bg-gray-400 text-sm md:text-base"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </td>
//                 <td className="px-4 py-2 text-sm text-gray-500">${item.price.toFixed(2)}</td>
//                 <td className="px-4 py-2 text-sm font-medium">
//                   <button className="text-red">
//                     <FaTrash className="w-4 h-4 md:w-5 md:h-5" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Customer and Shopping Details */}
//       <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-12 px-4 md:px-16">
//         {/* Customer Details */}
//         <div className="flex-1 mb-8 md:mb-0 md:mr-8">
//           <h3 className="text-lg md:text-xl font-semibold mb-4">Customer Details</h3>
//           <div className="space-y-2">
//             <p><strong className='text-green'>Name:</strong> Abedalmajeed Alajarmah</p>
//             <p><strong className='text-green'>Email:</strong> abedalmajedalajarmah@gmail.com</p>
//           </div>
//         </div>

//         {/* Shopping Details */}
//         <div className="flex-1">
//           <h3 className="text-lg md:text-xl font-semibold mb-4">Shopping Details</h3>
//           <div className="space-y-2">
//             <p><strong className='text-green'>Total Items:</strong>3</p>
//             <p><strong className='text-green'>Total Price:</strong> $50</p>
//           </div>
//        <Link to="/Menu/Cart/payment">   <button
//             className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded bg-green hover:bg-black"
//           >
//             Proceed to Checkout
//           </button></Link>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }




// import React, { useState, useEffect } from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import { FaTrash } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// export default function Cart() {
//   const [cartItems, setCartItems] = useState([]);
//   const [user, setUser] = useState(null);
//   const [cartCount, setCartCount] = useState(0);

//   useEffect(() => {
//     fetchCartItems();
//     fetchUserDetails();
//   }, []);

//   const fetchCartItems = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.get('http://localhost:5000/api/cart', {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true
//       });
//       setCartItems(response.data.items);
//       setCartCount(response.data.items.reduce((sum, item) => sum + item.quantity, 0));
//     } catch (error) {
//       console.error('Error fetching cart items:', error);
//     }
//   };

//   const fetchUserDetails = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const userId = localStorage.getItem('userID');
//       const response = await axios.get(`http://localhost:5000/api/users/profile/${userId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true
//       });
//       setUser(response.data);
//     } catch (error) {
//       console.error('Error fetching user details:', error);
//     }
//   };

//   const handleQuantityChange = async (itemId, change) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         'http://localhost:5000/api/cart/update',
//         { itemId, quantity: change },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true
//         }
//       );
//       fetchCartItems();
//     } catch (error) {
//       console.error('Error updating item quantity:', error);
//     }
//   };

//   const handleRemoveItem = async (itemId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.delete(`http://localhost:5000/api/cart/remove/${itemId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true
//       });
//       fetchCartItems();
//     } catch (error) {
//       console.error('Error removing item from cart:', error);
//     }
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0).toFixed(2);
//   };

//   return (
//     <div className="p-4 md:p-8">
//       <Navbar cartCount={cartCount} />
      
//       {/* Menu Banner */}
//       <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-[#FAFAFA] to-[#FCFCFC]">
//         <div className="py-24 md:py-48 flex flex-col items-center justify-center">
//           <div className="text-center px-4 space-y-4 md:space-y-7">
//             <h2 className="text-3xl md:text-5xl font-bold leading-snug">
//               Items Added to the <span className="text-green">Cart</span>
//             </h2>
//           </div>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto mb-8 md:mb-12 px-4 md:px-16">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-green">
//             <tr>
//               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
//               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Food</th>
//               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Name</th>
//               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
//               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
//               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {cartItems.map((item, index) => (
//               <tr key={item.menuItem._id}>
//                 <td className="px-4 py-2 text-sm text-gray-500">{index + 1}</td>
//                 <td className="px-4 py-2 text-sm text-gray-500 flex items-center space-x-2">
//                   <img src={item.menuItem.imageUrl} alt={item.menuItem.recipeName} className="w-8 h-8 md:w-12 md:h-12 object-cover rounded" />
//                 </td>
//                 <td className="px-4 py-2 text-sm text-gray-500">{item.menuItem.recipeName}</td>
//                 <td className="px-4 py-2 text-sm text-gray-500">
//                   <div className="flex items-center space-x-2">
//                     <button
//                       className="px-1 py-1 bg-gray-300 rounded text-gray-700 hover:bg-gray-400 text-sm md:text-base"
//                       onClick={() => handleQuantityChange(item.menuItem._id, -1)}
//                     >
//                       -
//                     </button>
//                     <span className="text-sm text-gray-700">{item.quantity}</span>
//                     <button
//                       className="px-1 py-1 bg-gray-300 rounded text-gray-700 hover:bg-gray-400 text-sm md:text-base"
//                       onClick={() => handleQuantityChange(item.menuItem._id, 1)}
//                     >
//                       +
//                     </button>
//                   </div>
//                 </td>
//                 <td className="px-4 py-2 text-sm text-gray-500">${(item.menuItem.price * item.quantity).toFixed(2)}</td>
//                 <td className="px-4 py-2 text-sm font-medium">
//                   <button className="text-red" onClick={() => handleRemoveItem(item.menuItem._id)}>
//                     <FaTrash className="w-4 h-4 md:w-5 md:h-5" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Customer and Shopping Details */}
//       <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-12 px-4 md:px-16">
//         {/* Customer Details */}
//         <div className="flex-1 mb-8 md:mb-0 md:mr-8">
//           <h3 className="text-lg md:text-xl font-semibold mb-4">Customer Details</h3>
//           <div className="space-y-2">
//             <p><strong className='text-green'>Name:</strong> {user?.name || 'N/A'}</p>
//             <p><strong className='text-green'>Email:</strong> {user?.email || 'N/A'}</p>
//           </div>
//         </div>

//         {/* Shopping Details */}
//         <div className="flex-1">
//           <h3 className="text-lg md:text-xl font-semibold mb-4">Shopping Details</h3>
//           <div className="space-y-2">
//             <p><strong className='text-green'>Total Items:</strong> {cartCount}</p>
//             <p><strong className='text-green'>Total Price:</strong> ${calculateTotal()}</p>
//           </div>
//           <Link to="/Menu/Cart/payment">   
//             <button className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded bg-green hover:bg-black">
//               Proceed to Checkout
//             </button>
//           </Link>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }



// import React, { useState, useEffect } from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import { FaTrash } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// export default function Cart() {
//   const [cartItems, setCartItems] = useState([]);
//   const [user, setUser] = useState(null);
//   const [cartCount, setCartCount] = useState(0);

//   useEffect(() => {
//     fetchCartItems();
//     fetchUserDetails();
//   }, []);

//   const fetchCartItems = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.get('http://localhost:5000/api/cart', {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true
//       });
//       setCartItems(response.data.items);
//       setCartCount(response.data.items.reduce((sum, item) => sum + item.quantity, 0));
//     } catch (error) {
//       console.error('Error fetching cart items:', error);
//     }
//   };

//   const fetchUserDetails = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const userId = localStorage.getItem('userID');
//       const response = await axios.get(`http://localhost:5000/api/users/profile/${userId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true
//       });
//       setUser(response.data);
//     } catch (error) {
//       console.error('Error fetching user details:', error);
//     }
//   };

//   const handleQuantityChange = async (itemId, change) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         'http://localhost:5000/api/cart/update',
//         { itemId, quantity: change },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true
//         }
//       );
//       fetchCartItems();
//     } catch (error) {
//       console.error('Error updating item quantity:', error);
//     }
//   };

//   const handleRemoveItem = async (itemId, itemName) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: `Do you want to remove ${itemName} from your cart?`,
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!'
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           const token = localStorage.getItem('token');
//           await axios.delete(`http://localhost:5000/api/cart/remove/${itemId}`, {
//             headers: { Authorization: `Bearer ${token}` },
//             withCredentials: true
//           });
//           fetchCartItems();
//           Swal.fire(
//             'Deleted!',
//             `${itemName} has been removed from your cart.`,
//             'success'
//           );
//         } catch (error) {
//           console.error('Error removing item from cart:', error);
//           Swal.fire(
//             'Error!',
//             'There was an error removing the item from your cart.',
//             'error'
//           );
//         }
//       }
//     });
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0).toFixed(2);
//   };

//   return (
//     <div className="p-4 md:p-8">
//       <Navbar cartCount={cartCount} />
      
//       {/* Menu Banner */}
//       <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-[#FAFAFA] to-[#FCFCFC]">
//         <div className="py-24 md:py-48 flex flex-col items-center justify-center">
//           <div className="text-center px-4 space-y-4 md:space-y-7">
//             <h2 className="text-3xl md:text-5xl font-bold leading-snug">
//               Items Added to the <span className="text-green">Cart</span>
//             </h2>
//           </div>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto mb-8 md:mb-12 px-4 md:px-16">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-green">
//             <tr>
//               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
//               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Food</th>
//               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Name</th>
//               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
//               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
//               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {cartItems.map((item, index) => (
//               <tr key={item.menuItem._id}>
//                 <td className="px-4 py-2 text-sm text-gray-500">{index + 1}</td>
//                 <td className="px-4 py-2 text-sm text-gray-500 flex items-center space-x-2">
//                   <img src={item.menuItem.imageUrl} alt={item.menuItem.recipeName} className="w-8 h-8 md:w-12 md:h-12 object-cover rounded" />
//                 </td>
//                 <td className="px-4 py-2 text-sm text-gray-500">{item.menuItem.recipeName}</td>
//                 <td className="px-4 py-2 text-sm text-gray-500">
//                   <div className="flex items-center space-x-2">
//                     <button
//                       className="px-1 py-1 bg-gray-300 rounded text-gray-700 hover:bg-gray-400 text-sm md:text-base"
//                       onClick={() => handleQuantityChange(item.menuItem._id, item.quantity - 1)}
//                     >
//                       -
//                     </button>
//                     <span className="text-sm text-gray-700">{item.quantity}</span>
//                     <button
//                       className="px-1 py-1 bg-gray-300 rounded text-gray-700 hover:bg-gray-400 text-sm md:text-base"
//                       onClick={() => handleQuantityChange(item.menuItem._id, item.quantity + 1)}
//                     >
//                       +
//                     </button>
//                   </div>
//                 </td>
//                 <td className="px-4 py-2 text-sm text-gray-500">${(item.menuItem.price * item.quantity).toFixed(2)}</td>
//                 <td className="px-4 py-2 text-sm font-medium">
//                   <button className="text-red" onClick={() => handleRemoveItem(item.menuItem._id, item.menuItem.recipeName)}>
//                     <FaTrash className="w-4 h-4 md:w-5 md:h-5" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Customer and Shopping Details */}
//       <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-12 px-4 md:px-16">
//         {/* Customer Details */}
//         <div className="flex-1 mb-8 md:mb-0 md:mr-8">
//           <h3 className="text-lg md:text-xl font-semibold mb-4">Customer Details</h3>
//           <div className="space-y-2">
//             <p><strong className='text-green'>Name:</strong> {user?.name || 'N/A'}</p>
//             <p><strong className='text-green'>Email:</strong> {user?.email || 'N/A'}</p>
//           </div>
//         </div>

//         {/* Shopping Details */}
//         <div className="flex-1">
//           <h3 className="text-lg md:text-xl font-semibold mb-4">Shopping Details</h3>
//           <div className="space-y-2">
//             <p><strong className='text-green'>Total Items:</strong> {cartCount}</p>
//             <p><strong className='text-green'>Total Price:</strong> ${calculateTotal()}</p>
//           </div>
//           <Link to="/Menu/Cart/payment">   
//             <button className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded bg-green hover:bg-black">
//               Proceed to Checkout
//             </button>
//           </Link>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import { FaTrash } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// export default function Cart() {
//   const [cartItems, setCartItems] = useState([]);
//   const [user, setUser] = useState(null);
//   const [cartCount, setCartCount] = useState(0);

//   useEffect(() => {
//     fetchCartItems();
//     fetchUserDetails();
//   }, []);

//   const fetchCartItems = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.get('http://localhost:5000/api/cart', {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true
//       });
//       setCartItems(response.data.items);
//       setCartCount(response.data.items.reduce((sum, item) => sum + item.quantity, 0));
//     } catch (error) {
//       console.error('Error fetching cart items:', error);
//       Swal.fire('Error', 'Failed to fetch cart items', 'error');
//     }
//   };

//   const fetchUserDetails = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const userId = localStorage.getItem('userID');
//       const response = await axios.get(`http://localhost:5000/api/users/profile/${userId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true
//       });
//       setUser(response.data);
//     } catch (error) {
//       console.error('Error fetching user details:', error);
//       Swal.fire('Error', 'Failed to fetch user details', 'error');
//     }
//   };

//   const handleQuantityChange = async (itemId, newQuantity) => {
//     try {
//       const token = localStorage.getItem('token');
//       if (newQuantity < 1) {
//         // If quantity becomes 0 or negative, remove the item
//         await handleRemoveItem(itemId);
//       } else {
//         await axios.post(
//           'http://localhost:5000/api/cart/update',
//           { itemId, quantity: newQuantity },
//           {
//             headers: { Authorization: `Bearer ${token}` },
//             withCredentials: true
//           }
//         );
        
//         // Update the frontend state
//         setCartItems(prevItems => 
//           prevItems.map(item => 
//             item.menuItem._id === itemId ? { ...item, quantity: newQuantity } : item
//           )
//         );
        
//         // Update cart count
//         setCartCount(prevCount => {
//           const oldQuantity = cartItems.find(item => item.menuItem._id === itemId).quantity;
//           return prevCount - oldQuantity + newQuantity;
//         });
//       }
//     } catch (error) {
//       console.error('Error updating item quantity:', error);
//       Swal.fire('Error', 'Failed to update item quantity', 'error');
//     }
//   };

//   const handleRemoveItem = async (itemId) => {
//     const itemToRemove = cartItems.find(item => item.menuItem._id === itemId);
//     if (!itemToRemove) return;

//     try {
//       const token = localStorage.getItem('token');
//       await axios.delete(`http://localhost:5000/api/cart/remove/${itemId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true
//       });
      
//       // Update the frontend state
//       setCartItems(prevItems => prevItems.filter(item => item.menuItem._id !== itemId));
//       setCartCount(prevCount => prevCount - itemToRemove.quantity);
      
//       Swal.fire(
//         'Deleted!',
//         `${itemToRemove.menuItem.recipeName} has been removed from your cart.`,
//         'success'
//       );
//     } catch (error) {
//       console.error('Error removing item from cart:', error);
//       Swal.fire(
//         'Error!',
//         'There was an error removing the item from your cart.',
//         'error'
//       );
//     }
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0).toFixed(2);
//   };

//   return (
//     <div className="p-4 md:p-8">
//       <Navbar cartCount={cartCount} />
      
//       {/* Menu Banner */}
//       <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-[#FAFAFA] to-[#FCFCFC]">
//         <div className="py-24 md:py-48 flex flex-col items-center justify-center">
//           <div className="text-center px-4 space-y-4 md:space-y-7">
//             <h2 className="text-3xl md:text-5xl font-bold leading-snug">
//               Items Added to the <span className="text-green">Cart</span>
//             </h2>
//           </div>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto mb-8 md:mb-12 px-4 md:px-16">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-green">
//             <tr>
//               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
//               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Food</th>
//               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Name</th>
//               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
//               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
//               <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {cartItems.map((item, index) => (
//               <tr key={item.menuItem._id}>
//                 <td className="px-4 py-2 text-sm text-gray-500">{index + 1}</td>
//                 <td className="px-4 py-2 text-sm text-gray-500 flex items-center space-x-2">
//                   <img src={item.menuItem.imageUrl} alt={item.menuItem.recipeName} className="w-8 h-8 md:w-12 md:h-12 object-cover rounded" />
//                 </td>
//                 <td className="px-4 py-2 text-sm text-gray-500">{item.menuItem.recipeName}</td>
//                 <td className="px-4 py-2 text-sm text-gray-500">
//                   <div className="flex items-center space-x-2">
//                     <button
//                       className="px-1 py-1 bg-gray-300 rounded text-gray-700 hover:bg-gray-400 text-sm md:text-base"
//                       onClick={() => handleQuantityChange(item.menuItem._id, item.quantity - 1)}
//                     >
//                       -
//                     </button>
//                     <span className="text-sm text-gray-700">{item.quantity}</span>
//                     <button
//                       className="px-1 py-1 bg-gray-300 rounded text-gray-700 hover:bg-gray-400 text-sm md:text-base"
//                       onClick={() => handleQuantityChange(item.menuItem._id, item.quantity + 1)}
//                     >
//                       +
//                     </button>
//                   </div>
//                 </td>
//                 <td className="px-4 py-2 text-sm text-gray-500">${(item.menuItem.price * item.quantity).toFixed(2)}</td>
//                 <td className="px-4 py-2 text-sm font-medium">
//                   <button className="text-red" onClick={() => handleRemoveItem(item.menuItem._id)}>
//                     <FaTrash className="w-4 h-4 md:w-5 md:h-5" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Customer and Shopping Details */}
//       <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-12 px-4 md:px-16">
//         {/* Customer Details */}
//         <div className="flex-1 mb-8 md:mb-0 md:mr-8">
//           <h3 className="text-lg md:text-xl font-semibold mb-4">Customer Details</h3>
//           <div className="space-y-2">
//             <p><strong className='text-green'>Name:</strong> {user?.name || 'N/A'}</p>
//             <p><strong className='text-green'>Email:</strong> {user?.email || 'N/A'}</p>
//           </div>
//         </div>

//         {/* Shopping Details */}
//         <div className="flex-1">
//           <h3 className="text-lg md:text-xl font-semibold mb-4">Shopping Details</h3>
//           <div className="space-y-2">
//             <p><strong className='text-green'>Total Items:</strong> {cartCount}</p>
//             <p><strong className='text-green'>Total Price:</strong> ${calculateTotal()}</p>
//           </div>
//           <Link to="/Menu/Cart/payment">   
//             <button className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded bg-green hover:bg-black">
//               Proceed to Checkout
//             </button>
//           </Link>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetchCartItems();
    fetchUserDetails();
  }, []);

  const fetchCartItems = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/cart', {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true
      });
      setCartItems(response.data.items);
      setCartCount(response.data.items.reduce((sum, item) => sum + item.quantity, 0));
    } catch (error) {
      console.error('Error fetching cart items:', error);
      Swal.fire('Error', 'Failed to fetch cart items', 'error');
    }
  };

  const fetchUserDetails = async () => {
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userID');
      const response = await axios.get(`http://localhost:5000/api/users/profile/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true
      });
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
      Swal.fire('Error', 'Failed to fetch user details', 'error');
    }
  };

  const handleQuantityChange = async (itemId, newQuantity) => {
    try {
      const token = localStorage.getItem('token');
      if (newQuantity < 1) {
        // If quantity becomes 0 or negative, remove the item
        await handleRemoveItem(itemId);
      } else {
        const response = await axios.post(
          'http://localhost:5000/api/cart/update',
          { itemId, quantity: newQuantity },
          {
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: true
          }
        );
        
        // Update the frontend state
        setCartItems(prevItems => 
          prevItems.map(item => 
            item.menuItem._id === itemId ? { ...item, quantity: newQuantity } : item
          )
        );
        
        // Update cart count from the response
        setCartCount(response.data.cartCount);
      }
    } catch (error) {
      console.error('Error updating item quantity:', error);
      Swal.fire('Error', 'Failed to update item quantity', 'error');
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`http://localhost:5000/api/cart/remove/${itemId}`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true
      });
      
      // Update the frontend state
      setCartItems(prevItems => prevItems.filter(item => item.menuItem._id !== itemId));
      
      // Update cart count from the response
      setCartCount(response.data.cartCount);
      
      Swal.fire(
        'Deleted!',
        'The item has been removed from your cart.',
        'success'
      );
    } catch (error) {
      console.error('Error removing item from cart:', error);
      Swal.fire(
        'Error!',
        'There was an error removing the item from your cart.',
        'error'
      );
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="p-4 md:p-8">
      <Navbar cartCount={cartCount} />
      
      {/* Menu Banner */}
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-[#FAFAFA] to-[#FCFCFC]">
        <div className="py-24 md:py-48 flex flex-col items-center justify-center">
          <div className="text-center px-4 space-y-4 md:space-y-7">
            <h2 className="text-3xl md:text-5xl font-bold leading-snug">
              Items Added to the <span className="text-green">Cart</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mb-8 md:mb-12 px-4 md:px-16">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-green">
            <tr>
              <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
              <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Food</th>
              <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Name</th>
              <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
              <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cartItems.map((item, index) => (
              <tr key={item.menuItem._id}>
                <td className="px-4 py-2 text-sm text-gray-500">{index + 1}</td>
                <td className="px-4 py-2 text-sm text-gray-500 flex items-center space-x-2">
                  <img src={item.menuItem.imageUrl} alt={item.menuItem.recipeName} className="w-8 h-8 md:w-12 md:h-12 object-cover rounded" />
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">{item.menuItem.recipeName}</td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <button
                      className="px-1 py-1 bg-gray-300 rounded text-gray-700 hover:bg-gray-400 text-sm md:text-base"
                      onClick={() => handleQuantityChange(item.menuItem._id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="text-sm text-gray-700">{item.quantity}</span>
                    <button
                      className="px-1 py-1 bg-gray-300 rounded text-gray-700 hover:bg-gray-400 text-sm md:text-base"
                      onClick={() => handleQuantityChange(item.menuItem._id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">${(item.menuItem.price * item.quantity).toFixed(2)}</td>
                <td className="px-4 py-2 text-sm font-medium">
                  <button className="text-red" onClick={() => handleRemoveItem(item.menuItem._id)}>
                    <FaTrash className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Customer and Shopping Details */}
      <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-12 px-4 md:px-16">
        {/* Customer Details */}
        <div className="flex-1 mb-8 md:mb-0 md:mr-8">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Customer Details</h3>
          <div className="space-y-2">
            <p><strong className='text-green'>Name:</strong> {user?.name || 'N/A'}</p>
            <p><strong className='text-green'>Email:</strong> {user?.email || 'N/A'}</p>
          </div>
        </div>

        {/* Shopping Details */}
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Shopping Details</h3>
          <div className="space-y-2">
            <p><strong className='text-green'>Total Items:</strong> {cartCount}</p>
            <p><strong className='text-green'>Total Price:</strong> ${calculateTotal()}</p>
          </div>
          <Link to="/Menu/Cart/payment">   
            <button className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded bg-green hover:bg-black">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}