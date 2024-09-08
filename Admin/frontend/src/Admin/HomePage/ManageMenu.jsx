
// import React, { useState } from 'react';
// import Sidebar from './Sidebar'; // Make sure you have a Sidebar component
// import { Pencil, Trash2 } from 'lucide-react';
// import { Link } from "react-router-dom";

// const menuItems = [
//   { id: 1, image: '/recipes/img1.png', name: 'Blini Pancakes', price: 20 },
//   { id: 2, image: '/recipes/img2.png', name: 'Haddock', price: 14.7 },
//   { id: 3, image: '/recipes/img3.png', name: 'Roast Duck Breast', price: 14.5 },
//   { id: 4, image: '/recipes/img1.png', name: 'Escalope de Veau', price: 12.5 },
//   { id: 5, image: '/recipes/img2.png', name: 'Chicken and Walnut Salad', price: 13.5 },
//   { id: 6, image: '/recipes/img3.png', name: 'Haddock', price: 14.7 },
//   { id: 7, image: '/recipes/img1.png', name: 'Haddock', price: 14.7 },
//   // Add more items as needed
// ];

// const ITEMS_PER_PAGE = 5;

// const ManageMenu = () => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(menuItems.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const endIndex = startIndex + ITEMS_PER_PAGE;
//   const currentItems = menuItems.slice(startIndex, endIndex);

//   const handlePrevPage = () => {
//     setCurrentPage((prev) => Math.max(prev - 1, 1));
//   };

//   const handleNextPage = () => {
//     setCurrentPage((prev) => Math.min(prev + 1, totalPages));
//   };

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen">
//       <Sidebar />
//       <div className="flex-grow p-6 md:ml-2">
//         <div className="container mx-auto px-4 py-8">
//           <h1 className="text-3xl font-bold mb-6">
//             Manage All <span className="text-green">Menu Items!</span>
//           </h1>
//           <div className="overflow-x-auto">
//             <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
//               <thead className="bg-gray-200">
//                 <tr>
//                   <th className="px-4 py-2 text-left">#</th>
//                   <th className="px-4 py-2 text-left">Image</th>
//                   <th className="px-4 py-2 text-left">Item Name</th>
//                   <th className="px-4 py-2 text-left">Price</th>
//                   <th className="px-4 py-2 text-center">Update</th>
//                   <th className="px-4 py-2 text-center">Delete</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentItems.map((item, index) => (
//                   <tr key={item.id} className="border-b hover:bg-gray-50">
//                     <td className="px-4 py-2">{startIndex + index + 1}</td>
//                     <td className="px-4 py-2">
//                       <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
//                     </td>
//                     <td className="px-4 py-2">{item.name}</td>
//                     <td className="px-4 py-2">${item.price.toFixed(2)}</td>
//                     <td className="px-4 py-2 text-center">
//                       <Link>
//                         <button className="text-white hover:text-black bg-green p-2 rounded">
//                           <Pencil size={20} />
//                         </button>
//                       </Link>
//                     </td>
//                     <td className="px-4 py-2 text-center">
//                       <button className="text-red hover:text-red">
//                         <Trash2 size={20} />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <div className="mt-4 flex justify-between items-center">
//             <button
//               onClick={handlePrevPage}
//               disabled={currentPage === 1}
//               className="px-4 py-2 bg-green text-white rounded hover:bg-black "
//             >
//               Prev
//             </button>
//             <span>
//               Page {currentPage} of {totalPages}
//             </span>
//             <button
//               onClick={handleNextPage}
//               disabled={currentPage === totalPages}
//               className="px-4 py-2 bg-green text-white rounded hover:bg-black "
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageMenu;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import Sidebar from './Sidebar';
// import { Pencil, Trash2 } from 'lucide-react';
// import { Link } from "react-router-dom";

// const ITEMS_PER_PAGE = 5;

// const ManageMenu = () => {
//   const [menuItems, setMenuItems] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);

//   useEffect(() => {
//     fetchMenuItems();
//   }, [currentPage]);

//   const fetchMenuItems = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/menu-items?page=${currentPage}&limit=${ITEMS_PER_PAGE}`);
//       setMenuItems(response.data.items);
//       setTotalPages(Math.ceil(response.data.total / ITEMS_PER_PAGE));
//     } catch (error) {
//       console.error('Error fetching menu items:', error);
//       Swal.fire('Error', 'Failed to fetch menu items', 'error');
//     }
//   };

//   const handleDelete = async (id) => {
//     const result = await Swal.fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!'
//     });

//     if (result.isConfirmed) {
//       try {
//         await axios.delete(`http://localhost:5000/api/menu-items/${id}`);
//         Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
//         fetchMenuItems();
//       } catch (error) {
//         console.error('Error deleting menu item:', error);
//         Swal.fire('Error', 'Failed to delete the item', 'error');
//       }
//     }
//   };

//   const handlePrevPage = () => {
//     setCurrentPage((prev) => Math.max(prev - 1, 1));
//   };

//   const handleNextPage = () => {
//     setCurrentPage((prev) => Math.min(prev + 1, totalPages));
//   };

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen">
//       <Sidebar />
//       <div className="flex-grow p-6 md:ml-2">
//         <div className="container mx-auto px-4 py-8">
//           <h1 className="text-3xl font-bold mb-6">
//             Manage All <span className="text-green">Menu Items!</span>
//           </h1>
//           <div className="overflow-x-auto">
//             <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
//               <thead className="bg-gray-200">
//                 <tr>
//                   <th className="px-4 py-2 text-left">#</th>
//                   <th className="px-4 py-2 text-left">Image</th>
//                   <th className="px-4 py-2 text-left">Item Name</th>
//                   <th className="px-4 py-2 text-left">Price</th>
//                   <th className="px-4 py-2 text-center">Update</th>
//                   <th className="px-4 py-2 text-center">Delete</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {menuItems.map((item, index) => (
//                   <tr key={item._id} className="border-b hover:bg-gray-50">
//                     <td className="px-4 py-2">{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</td>
//                     <td className="px-4 py-2">
//                       <img src={item.imageUrl} alt={item.recipeName} className="w-12 h-12 rounded-full object-cover" />
//                     </td>
//                     <td className="px-4 py-2">{item.recipeName}</td>
//                     <td className="px-4 py-2">${item.price.toFixed(2)}</td>
//                     <td className="px-4 py-2 text-center">
//                       <Link to={`/update-menu-item/${item._id}`}>
//                         <button className="text-white hover:text-black bg-green p-2 rounded">
//                           <Pencil size={20} />
//                         </button>
//                       </Link>
//                     </td>
//                     <td className="px-4 py-2 text-center">
//                       <button onClick={() => handleDelete(item._id)} className="text-red hover:text-red">
//                         <Trash2 size={20} />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <div className="mt-4 flex justify-between items-center">
//             <button
//               onClick={handlePrevPage}
//               disabled={currentPage === 1}
//               className="px-4 py-2 bg-green text-white rounded hover:bg-black"
//             >
//               Prev
//             </button>
//             <span>
//               Page {currentPage} of {totalPages}
//             </span>
//             <button
//               onClick={handleNextPage}
//               disabled={currentPage === totalPages}
//               className="px-4 py-2 bg-green text-white rounded hover:bg-black"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageMenu;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Sidebar from './Sidebar';
import { Pencil, Trash2 } from 'lucide-react';
import { Link } from "react-router-dom";

const ITEMS_PER_PAGE = 5;

const ManageMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchMenuItems();
  }, [currentPage]);

  const fetchMenuItems = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/menu-items?page=${currentPage}&limit=${ITEMS_PER_PAGE}`);
      setMenuItems(response.data.items);
      setTotalPages(Math.ceil(response.data.total / ITEMS_PER_PAGE));
    } catch (error) {
      console.error('Error fetching menu items:', error);
      Swal.fire('Error', 'Failed to fetch menu items', 'error');
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:5000/api/menu-items/${id}`);
        Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
        fetchMenuItems();
      } catch (error) {
        console.error('Error deleting menu item:', error);
        Swal.fire('Error', 'Failed to delete the item', 'error');
      }
    }
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-grow p-6 md:ml-2">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">
            Manage All <span className="text-green">Menu Items!</span>
          </h1>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left">#</th>
                  <th className="px-4 py-2 text-left">Image</th>
                  <th className="px-4 py-2 text-left">Item Name</th>
                  <th className="px-4 py-2 text-left">Price</th>
                  <th className="px-4 py-2 text-center">Update</th>
                  <th className="px-4 py-2 text-center">Delete</th>
                </tr>
              </thead>
              <tbody>
                {menuItems.map((item, index) => (
                  <tr key={item._id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</td>
                    <td className="px-4 py-2">
                      <img src={item.imageUrl} alt={item.recipeName} className="w-12 h-12 rounded-full object-cover" />
                    </td>
                    <td className="px-4 py-2">{item.recipeName}</td>
                    <td className="px-4 py-2">${item.price.toFixed(2)}</td>
                    <td className="px-4 py-2 text-center">
                      <Link to={`/update-menu-item/${item._id}`}>
                        <button className="text-white hover:text-black bg-green p-2 rounded">
                          <Pencil size={20} />
                        </button>
                      </Link>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <button onClick={() => handleDelete(item._id)} className="text-red hover:text-red">
                        <Trash2 size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-green text-white rounded hover:bg-black"
            >
              Prev
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-green text-white rounded hover:bg-black"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageMenu;