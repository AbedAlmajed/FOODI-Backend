// // components/Sidebar.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// function Sidebar() {
//   return (
//     <div className="w-64 bg-gray-800 text-white flex flex-col p-4">
//       <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
//       <nav>
//         <ul>
//         <li className="mb-4">
//             <Link to="/driver-dashboard" className="hover:text-gray-300">
//               Home
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/driver-orders" className="hover:text-gray-300">
//               Orders
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/driver-customers" className="hover:text-gray-300">
//               Customers
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/driver-menu" className="hover:text-gray-300">
//               Menu
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Sidebar;











// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function Sidebar() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Clear driver authentication data from local storage
//     localStorage.removeItem('driverID');
//     localStorage.removeItem('driverToken');
    
//     // Redirect to the home page
//     navigate('/');
//   };

//   return (
//     <div className="w-64 bg-gray-800 text-white flex flex-col p-4">
//       <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
//       <nav className="flex-grow">
//         <ul>
//           <li className="mb-4">
//             <Link to="/driver-dashboard" className="hover:text-gray-300">
//               Home
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/driver-orders" className="hover:text-gray-300">
//               Orders
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/driver-customers" className="hover:text-gray-300">
//               Customers
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/driver-menu" className="hover:text-gray-300">
//               Menu
//             </Link>
//           </li>
//         </ul>
//       </nav>
//       <button 
//         onClick={handleLogout}
//         className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
//       >
//         Logout
//       </button>
//     </div>
//   );
// }

// export default Sidebar;








// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function Sidebar() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('driverID');
//     localStorage.removeItem('driverToken');
//     navigate('/');
//   };

//   return (
//     <div className="w-64 bg-gray-800 text-white h-screen flex flex-col p-4 fixed left-0 top-0">
//       <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
//       <nav className="flex-grow">
//         <ul>
//           <li className="mb-4">
//             <Link to="/driver-dashboard" className="hover:text-gray-300">
//               Home
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/driver-orders" className="hover:text-gray-300">
//               Orders
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/driver-customers" className="hover:text-gray-300">
//               Customers
//             </Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/driver-menu" className="hover:text-gray-300">
//               Menu
//             </Link>
//           </li>
//         </ul>
    
//       </nav>
//       <button 
//         onClick={handleLogout}
//         className="bg-red-500 mr-5 hover:bg-red text-white font-bold py-2 px-4 rounded"
//       >
//         Logout
//       </button>



//     </div>
//   );
// }

// export default Sidebar;





// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function Sidebar() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('driverID');
//     localStorage.removeItem('driverToken');
//     navigate('/');
//   };

//   return (
//     <div className="w-64 bg-[white] text-black h-screen flex flex-col p-4 fixed left-0 top-0">
//       <h2 className="text-2xl font-bold mb-6 text-left">Driver Dashboard</h2>
//       <Link to="/driver-dashboard">
//           <img src='logo3.png' alt='admin logo' width={"80px"} className='ml-5 mb-5'/>
//         </Link>
//       <nav className="flex-grow">
//         <ul className="space-y-4 text-left"> {/* Add space-y-4 for consistent spacing */}
//           <li>
//             <Link to="/driver-dashboard" className="hover:text-gray-300 block">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/driver-orders" className="hover:text-gray-300 block">
//               Orders
//             </Link>
//           </li>
//           {/* <li>
//             <Link to="/driver-customers" className="hover:text-gray-300 block">
//               Customers
//             </Link>
//           </li> */}
//           {/* <li>
//             <Link to="/driver-menu" className="hover:text-gray-300 block">
//               Menu
//             </Link>
//           </li> */}
//         </ul>
//       </nav>
//       <button 
//         onClick={handleLogout}
//         className="bg-red-500 hover:bg-red-700 text-black font-bold py-2 px-4 rounded mt-auto text-left"
//       >
//         Logout
//       </button>
//     </div>
//   );
// }

// export default Sidebar;











// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('driverID');
//     localStorage.removeItem('driverToken');
//     navigate('/');
//   };

//   return (
//     <nav className="bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between h-24">
//           <div className="flex items-center">
//             <Link to="/driver-dashboard" className="flex-shrink-0">
//               <img src="logo3.png" alt="admin logo" className="h-8 w-auto" />
//             </Link>
//             <h2 className="ml-4 text-xl font-bold">Driver Panel</h2>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link to="/driver-dashboard" className="text-gray-700 hover:text-gray-900">
//               Home
//             </Link>
//             <Link to="/driver-orders" className="text-gray-700 hover:text-gray-900">
//               Orders
//             </Link>
//             <button
//               onClick={handleLogout}
//               className="btn  flex items-center gap-2 px-4 bg-green text-white"
//             >
//               Logout
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 hover:text-gray-900"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <Link
//               to="/driver-dashboard"
//               className="block px-3 py-2 text-gray-700 hover:text-gray-900"
//               onClick={() => setIsOpen(false)}
//             >
//               Home
//             </Link>
//             <Link
//               to="/driver-orders"
//               className="block px-3 py-2 text-gray-700 hover:text-gray-900"
//               onClick={() => setIsOpen(false)}
//             >
//               Orders
//             </Link>
//             <button
//               onClick={handleLogout}
//               className="w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;















import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('driverID');
    localStorage.removeItem('driverToken');
    navigate('/');
  };

  const getLinkClassName = (path) => {
    return location.pathname === path
      ? 'text-green' 
      : 'text-gray-700 hover:text-gray-900'; 
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/driver-dashboard" className="flex-shrink-0">
              <img src="logo3.png" alt="admin logo" className="h-12 w-auto" />
            </Link>
            <h2 className="ml-4 text-xl font-bold">Driver Panel</h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/driver-dashboard" 
              className={`${getLinkClassName('/driver-dashboard')}`}
            >
              Home
            </Link>
            <Link 
              to="/driver-orders" 
              className={`${getLinkClassName('/driver-orders')}`}
            >
              Orders
            </Link>
            <button
              onClick={handleLogout}
              className="btn  flex items-center gap-2 px-4 bg-green text-white"
            >
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/driver-dashboard"
              className={`block px-3 py-2 ${getLinkClassName('/driver-dashboard')}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/driver-orders"
              className={`block px-3 py-2 ${getLinkClassName('/driver-orders')}`}
              onClick={() => setIsOpen(false)}
            >
              Orders
            </Link>
            <button
              onClick={handleLogout}
              className="w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
