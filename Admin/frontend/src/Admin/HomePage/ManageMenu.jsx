


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import Sidebar from './Sidebar';
// import { Pencil, Trash2 } from 'lucide-react';
// import EditMenuItemModal from './EditMenuItemModal';

// const ITEMS_PER_PAGE = 5;

// const ManageMenu = () => {
//   const [menuItems, setMenuItems] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [currentEditItem, setCurrentEditItem] = useState(null);

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

//   const handleEdit = (item) => {
//     setCurrentEditItem(item);
//     setIsEditModalOpen(true);
//   };

//   const handleUpdate = (updatedItem) => {
//     setMenuItems(menuItems.map(item => item._id === updatedItem._id ? updatedItem : item));
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
//                       <button onClick={() => handleEdit(item)} className="text-white hover:text-black bg-green p-2 rounded">
//                         <Pencil size={20} />
//                       </button>
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
//       <EditMenuItemModal
//         isOpen={isEditModalOpen}
//         onClose={() => setIsEditModalOpen(false)}
//         item={currentEditItem}
//         onUpdate={handleUpdate}
//       />
//     </div>
//   );
// };

// export default ManageMenu;























import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Sidebar from './Sidebar';
import { Pencil, Trash2, Search } from 'lucide-react';
import EditMenuItemModal from './EditMenuItemModal';

const ITEMS_PER_PAGE = 5;

const ManageMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentEditItem, setCurrentEditItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMenuItems();
  }, [currentPage]);

  useEffect(() => {
    // Filter items whenever search term or menuItems change
    const filtered = menuItems.filter(item =>
      item.recipeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.price.toString().includes(searchTerm)
    );
    setFilteredItems(filtered);
    // Reset to first page when search changes
    setCurrentPage(1);
    // Update total pages based on filtered results
    setTotalPages(Math.ceil(filtered.length / ITEMS_PER_PAGE));
  }, [searchTerm, menuItems]);

  const fetchMenuItems = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`http://localhost:5000/api/menu-items?page=${currentPage}&limit=${ITEMS_PER_PAGE}`);
      setMenuItems(response.data.items);
      setTotalPages(Math.ceil(response.data.total / ITEMS_PER_PAGE));
    } catch (error) {
      console.error('Error fetching menu items:', error);
      Swal.fire('Error', 'Failed to fetch menu items', 'error');
    } finally {
      setIsLoading(false);
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

  const handleEdit = (item) => {
    setCurrentEditItem(item);
    setIsEditModalOpen(true);
  };

  const handleUpdate = (updatedItem) => {
    setMenuItems(menuItems.map(item => item._id === updatedItem._id ? updatedItem : item));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Calculate current items to display based on pagination and filters
  const getCurrentItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredItems.slice(startIndex, endIndex);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-grow p-6 md:ml-2">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">
            Manage All <span className="text-green">Menu Items!</span>
          </h1>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Search by item name or price..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 bg-white rounded-lg focus:outline-none focus:border-green"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {isLoading ? (
            <div className="text-center py-4">Loading...</div>
          ) : (
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
                  {getCurrentItems().map((item, index) => (
                    <tr key={item._id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-2">{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</td>
                      <td className="px-4 py-2">
                        <img src={item.imageUrl} alt={item.recipeName} className="w-12 h-12 rounded-full object-cover" />
                      </td>
                      <td className="px-4 py-2">{item.recipeName}</td>
                      <td className="px-4 py-2">${item.price.toFixed(2)}</td>
                      <td className="px-4 py-2 text-center">
                        <button 
                          onClick={() => handleEdit(item)} 
                          className="text-white hover:text-black bg-green p-2 rounded transition duration-200"
                        >
                          <Pencil size={20} />
                        </button>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <button 
                          onClick={() => handleDelete(item._id)} 
                          className="text-red hover:text-red transition duration-200"
                        >
                          <Trash2 size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredItems.length === 0 && (
                <div className="text-center py-4 text-gray-500">
                  No items found matching your search.
                </div>
              )}

              {filteredItems.length > 0 && (
                <div className="mt-4 flex justify-between items-center">
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-green text-white rounded hover:bg-black transition duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Prev
                  </button>
                  <span className="text-gray-600">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-green text-white rounded hover:bg-black transition duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <EditMenuItemModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        item={currentEditItem}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default ManageMenu;