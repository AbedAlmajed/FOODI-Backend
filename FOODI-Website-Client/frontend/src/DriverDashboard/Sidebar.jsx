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





import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('driverID');
    localStorage.removeItem('driverToken');
    navigate('/');
  };

  return (
    <div className="w-64 bg-gray-800 text-white h-screen flex flex-col p-4 fixed left-0 top-0">
      <h2 className="text-2xl font-bold mb-6 text-left">Dashboard</h2>
      <nav className="flex-grow">
        <ul className="space-y-4 text-left"> {/* Add space-y-4 for consistent spacing */}
          <li>
            <Link to="/driver-dashboard" className="hover:text-gray-300 block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/driver-orders" className="hover:text-gray-300 block">
              Orders
            </Link>
          </li>
          {/* <li>
            <Link to="/driver-customers" className="hover:text-gray-300 block">
              Customers
            </Link>
          </li> */}
          {/* <li>
            <Link to="/driver-menu" className="hover:text-gray-300 block">
              Menu
            </Link>
          </li> */}
        </ul>
      </nav>
      <button 
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-auto text-left"
      >
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
