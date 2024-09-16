

// import React, { useEffect, useState } from "react";
// import logo from "/logo3.png";
// import { Link, useNavigate } from "react-router-dom";
// import { FaRegUser } from "react-icons/fa";
// import { FaUserCircle } from 'react-icons/fa';
// import { FaShoppingCart } from 'react-icons/fa';
// import axios from 'axios';

// const Navbar = () => {
//   const [isSticky, setSticky] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [cartCount, setCartCount] = useState(0);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const userId = localStorage.getItem('userID');
//         if (!token || !userId) {
//           setIsLoggedIn(false);
//           return;
//         }

//         const response = await axios.get(`http://localhost:5000/api/users/profile/${userId}`, {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true
//         });
//         setUser(response.data);
//         setIsLoggedIn(true);
//         fetchCartCount(); // Fetch cart count after successful login
//       } catch (error) {
//         console.error('Error fetching user data', error);
//         setIsLoggedIn(false);
//       }
//     };

//     fetchUser();
//   }, []);

//   const fetchCartCount = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.get('http://localhost:5000/api/cart/count', {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true
//       });
//       setCartCount(response.data.count);
//     } catch (error) {
//       console.error('Error fetching cart count', error);
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setSticky(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("userID");
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     setUser(null);
//     setCartCount(0);
//     navigate("/");
//   };

//   const navItems = (
//     <>
//       <li><Link to="/" className="text-green">Home</Link></li>
//       <li><Link to="/Menu">Menu</Link></li>
//       <li><Link to="/contact">Contact us</Link></li>
//       <li><Link to="/custom">Custom Your Food</Link></li>
//       <li><Link to="/order">My Orders</Link></li>
//     </>
//   );

//   return (
//     <header className={`max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out`}>
//       <div className={`navbar xl:px-24 ${isSticky ? "shadow-md bg-white transition-all duration-300 ease-in-out" : "bg-white"}`}>
//         <div className="navbar-start">
//           <div className="dropdown">
//             <label tabIndex={0} className="btn btn-ghost lg:hidden">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//               </svg>
//             </label>
//             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64 space-y-3">
//               {navItems}
//             </ul>
//           </div>
//           <a href="/"><img src={logo} alt="Logo" width="70PX"/></a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{navItems}</ul>
//         </div>
//         <div className="navbar-end">
//           {isLoggedIn && (
//             <Link to="/Cart" className="btn btn-ghost btn-circle lg:flex items-center justify-center mr-3">
//               <div className="indicator">
//                 <FaShoppingCart size={24} />
//                 <span className="badge badge-sm indicator-item">{cartCount}</span>
//               </div>
//             </Link>
//           )}
//           {isLoggedIn && (
//             <label tabIndex={0} className="btn btn-ghost btn-circle lg:flex items-center justify-center mr-3">
//               <div className="indicator">
//                 <Link to="/profile">
//                   {user && user.image ? (
//                     <img src={user.image} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
//                   ) : (
//                     <FaUserCircle size={40} className="text-green-500" />
//                   )}
//                 </Link>
//               </div>
//             </label>
//           )}
//           {isLoggedIn ? (
//             <button onClick={handleLogout} className="btn flex items-center gap-2 rounded-full px-6 bg-green text-white">
//               Logout
//             </button>
//           ) : (
//             <Link to="/login" className="btn flex items-center gap-2 rounded-full px-6 bg-green text-white">
//               <FaRegUser /> Login
//             </Link>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;




// import React, { useEffect, useState } from "react";
// import logo from "/logo3.png";
// import { Link, useNavigate } from "react-router-dom";
// import { FaRegUser } from "react-icons/fa";
// import { FaUserCircle } from 'react-icons/fa';
// import { FaShoppingCart } from 'react-icons/fa';
// import axios from 'axios';

// const Navbar = () => {
//   const [isSticky, setSticky] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [cartCount, setCartCount] = useState(0);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const userId = localStorage.getItem('userID');
//         if (!token || !userId) {
//           setIsLoggedIn(false);
//           return;
//         }

//         const response = await axios.get(`http://localhost:5000/api/users/profile/${userId}`, {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true
//         });
//         setUser(response.data.user); // Change this line to access user data from response
//         setIsLoggedIn(true);
//         fetchCartCount();
//       } catch (error) {
//         console.error('Error fetching user data', error);
//         setIsLoggedIn(false);
//       }
//     };

//     fetchUser();
//   }, []);

//   const fetchCartCount = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.get('http://localhost:5000/api/cart/count', {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true
//       });
//       setCartCount(response.data.count);
//     } catch (error) {
//       console.error('Error fetching cart count', error);
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setSticky(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("userID");
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     setUser(null);
//     setCartCount(0);
//     navigate("/");
//   };

//   const navItems = (
//     <>
//       <li><Link to="/" className="text-green">Home</Link></li>
//       <li><Link to="/Menu">Menu</Link></li>
//       <li><Link to="/contact">Contact us</Link></li>
//       <li><Link to="/custom">Custom Your Food</Link></li>
//       <li><Link to="/order">My Orders</Link></li>
//     </>
//   );

//   return (
//     <header className={`max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out`}>
//       <div className={`navbar xl:px-24 ${isSticky ? "shadow-md bg-white transition-all duration-300 ease-in-out" : "bg-white"}`}>
//         <div className="navbar-start">
//           <div className="dropdown">
//             <label tabIndex={0} className="btn btn-ghost lg:hidden">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//               </svg>
//             </label>
//             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64 space-y-3">
//               {navItems}
//             </ul>
//           </div>
//           <a href="/"><img src={logo} alt="Logo" width="70PX"/></a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{navItems}</ul>
//         </div>
//         <div className="navbar-end">
//           {isLoggedIn && (
//             <Link to="/Cart" className="btn btn-ghost btn-circle lg:flex items-center justify-center mr-3">
//               <div className="indicator">
//                 <FaShoppingCart size={24} />
//                 <span className="badge badge-sm indicator-item">{cartCount}</span>
//               </div>
//             </Link>
//           )}
//           {isLoggedIn && (
//             <label tabIndex={0} className="btn btn-ghost btn-circle lg:flex items-center justify-center mr-3">
//               <div className="indicator">
//                 <Link to="/profile">
//                   {user && user.image ? (
//                     <img src={user.image} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
//                   ) : (
//                     <FaUserCircle size={40} className="text-green-500" />
//                   )}
//                 </Link>
//               </div>
//             </label>
//           )}
//           {isLoggedIn ? (
//             <button onClick={handleLogout} className="btn flex items-center gap-2 rounded-full px-6 bg-green text-white">
//               Logout
//             </button>
//           ) : (
//             <Link to="/login" className="btn flex items-center gap-2 rounded-full px-6 bg-green text-white">
//               <FaRegUser /> Login
//             </Link>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


// import React, { useEffect, useState } from "react";
// import logo from "/logo3.png";
// import { Link, useNavigate } from "react-router-dom";
// import { FaRegUser } from "react-icons/fa";
// import { FaUserCircle } from 'react-icons/fa';
// import { FaShoppingCart } from 'react-icons/fa';
// import axios from 'axios';

// const Navbar = ({ cartCount }) => {
//   const [isSticky, setSticky] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const userId = localStorage.getItem('userID');
//         if (!token || !userId) {
//           setIsLoggedIn(false);
//           return;
//         }

//         const response = await axios.get(`http://localhost:5000/api/users/profile/${userId}`, {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true
//         });
//         setUser(response.data.user);
//         setIsLoggedIn(true);
//       } catch (error) {
//         console.error('Error fetching user data', error);
//         setIsLoggedIn(false);
//       }
//     };

//     fetchUser();
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setSticky(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("userID");
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     setUser(null);
//     navigate("/");
//   };

//   const navItems = (
//     <>
//       <li><Link to="/" className="text-green">Home</Link></li>
//       <li><Link to="/Menu">Menu</Link></li>
//       <li><Link to="/contact">Contact us</Link></li>
//       <li><Link to="/custom">Custom Your Food</Link></li>
//       <li><Link to="/order">My Orders</Link></li>
//     </>
//   );

//   return (
//     <header className={`max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out`}>
//       <div className={`navbar xl:px-24 ${isSticky ? "shadow-md bg-white transition-all duration-300 ease-in-out" : "bg-white"}`}>
//         <div className="navbar-start">
//           <div className="dropdown">
//             <label tabIndex={0} className="btn btn-ghost lg:hidden">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//               </svg>
//             </label>
//             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64 space-y-3">
//               {navItems}
//             </ul>
//           </div>
//           <a href="/"><img src={logo} alt="Logo" width="70PX"/></a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{navItems}</ul>
//         </div>
//         <div className="navbar-end">
//           {isLoggedIn && (
//             <Link to="/Cart" className="btn btn-ghost btn-circle lg:flex items-center justify-center mr-3">
//               <div className="indicator">
//                 <FaShoppingCart size={24} />
//                 <span className="badge badge-sm indicator-item">{cartCount}</span>
//               </div>
//             </Link>
//           )}
//           {isLoggedIn && (
//             <label tabIndex={0} className="btn btn-ghost btn-circle lg:flex items-center justify-center mr-3">
//               <div className="indicator">
//                 <Link to="/profile">
//                   {user && user.image ? (
//                     <img src={user.image} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
//                   ) : (
//                     <FaUserCircle size={40} className="text-green-500" />
//                   )}
//                 </Link>
//               </div>
//             </label>
//           )}
//           {isLoggedIn ? (
//             <button onClick={handleLogout} className="btn flex items-center gap-2 rounded-full px-6 bg-green text-white">
//               Logout
//             </button>
//           ) : (
//             <Link to="/login" className="btn flex items-center gap-2 rounded-full px-6 bg-green text-white">
//               <FaRegUser /> Login
//             </Link>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;






// import React, { useEffect, useState } from "react";
// import logo from "/logo3.png";
// import { Link, useNavigate } from "react-router-dom";
// import { FaRegUser } from "react-icons/fa";
// import { FaUserCircle } from 'react-icons/fa';
// import { FaShoppingCart } from 'react-icons/fa';
// import axios from 'axios';

// const Navbar = () => {
//   const [isSticky, setSticky] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [cartCount, setCartCount] = useState(0);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const userId = localStorage.getItem('userID');
//         if (!token || !userId) {
//           setIsLoggedIn(false);
//           return;
//         }

//         const response = await axios.get(`http://localhost:5000/api/users/profile/${userId}`, {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true
//         });
//         setUser(response.data.user);
//         setIsLoggedIn(true);
//         fetchCartCount();
//       } catch (error) {
//         console.error('Error fetching user data', error);
//         setIsLoggedIn(false);
//       }
//     };

//     fetchUser();
//   }, []);

//   const fetchCartCount = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.get('http://localhost:5000/api/cart/count', {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true
//       });
//       setCartCount(response.data.count);
//     } catch (error) {
//       console.error('Error fetching cart count', error);
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setSticky(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("userID");
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     setUser(null);
//     setCartCount(0);
//     navigate("/");
//   };

//   const navItems = (
//     <>
//       <li><Link to="/" className="text-green">Home</Link></li>
//       <li><Link to="/Menu">Menu</Link></li>
//       <li><Link to="/contact">Contact us</Link></li>
//       <li><Link to="/custom">Custom Your Food</Link></li>
//       <li><Link to="/order">My Orders</Link></li>
//     </>
//   );

//   return (
//     <header className={`max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out`}>
//       <div className={`navbar xl:px-24 ${isSticky ? "shadow-md bg-white transition-all duration-300 ease-in-out" : "bg-white"}`}>
//         <div className="navbar-start">
//           <div className="dropdown">
//             <label tabIndex={0} className="btn btn-ghost lg:hidden">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//               </svg>
//             </label>
//             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64 space-y-3">
//               {navItems}
//             </ul>
//           </div>
//           <a href="/"><img src={logo} alt="Logo" width="70PX"/></a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{navItems}</ul>
//         </div>
//         <div className="navbar-end">
//           {isLoggedIn && (
//             <Link to="/Cart" className="btn btn-ghost btn-circle lg:flex items-center justify-center mr-3">
//               <div className="indicator">
//                 <FaShoppingCart size={24} />
//                 <span className="badge badge-sm indicator-item">{cartCount}</span>
//               </div>
//             </Link>
//           )}
//           {isLoggedIn && (
//             <label tabIndex={0} className="btn btn-ghost btn-circle lg:flex items-center justify-center mr-3">
//               <div className="indicator">
//                 <Link to="/profile">
//                   {user && user.image ? (
//                     <img src={user.image} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
//                   ) : (
//                     <FaUserCircle size={40} className="text-green-500" />
//                   )}
//                 </Link>
//               </div>
//             </label>
//           )}
//           {isLoggedIn ? (
//             <button onClick={handleLogout} className="btn flex items-center gap-2 rounded-full px-6 bg-green text-white">
//               Logout
//             </button>
//           ) : (
//             <Link to="/login" className="btn flex items-center gap-2 rounded-full px-6 bg-green text-white">
//               <FaRegUser /> Login
//             </Link>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;





// import React, { useEffect, useState } from "react";
// import logo from "/logo3.png";
// import { Link, useNavigate } from "react-router-dom";
// import { FaRegUser } from "react-icons/fa";
// import { FaUserCircle } from 'react-icons/fa';
// import { FaShoppingCart } from 'react-icons/fa';
// import axios from 'axios';

// const Navbar = () => {
//   const [isSticky, setSticky] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [cartCount, setCartCount] = useState(0);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const userId = localStorage.getItem('userID');
//         if (!token || !userId) {
//           setIsLoggedIn(false);
//           return;
//         }

//         const response = await axios.get(`http://localhost:5000/api/users/profile/${userId}`, {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true
//         });
//         setUser(response.data.user);
//         setIsLoggedIn(true);
//         fetchCartCount();
//       } catch (error) {
//         console.error('Error fetching user data', error);
//         setIsLoggedIn(false);
//       }
//     };

//     fetchUser();
//   }, []);

//   const fetchCartCount = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.get('http://localhost:5000/api/cart/count', {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true
//       });
//       setCartCount(response.data.count);
//     } catch (error) {
//       console.error('Error fetching cart count', error);
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setSticky(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("userID");
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     setUser(null);
//     setCartCount(0);
//     navigate("/");
//   };

//   const navItems = (
//     <>
//       <li><Link to="/" className="text-green">Home</Link></li>
//       <li><Link to="/Menu">Menu</Link></li>
//       <li><Link to="/contact">Contact us</Link></li>
//       <li><Link to="/custom">Custom Your Food</Link></li>
//       <li><Link to="/order">My Orders</Link></li>
//     </>
//   );

//   return (
//     <header className={`max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out`}>
//       <div className={`navbar xl:px-24 ${isSticky ? "shadow-md bg-white transition-all duration-300 ease-in-out" : "bg-white"}`}>
//         <div className="navbar-start">
//           <div className="dropdown">
//             <label tabIndex={0} className="btn btn-ghost lg:hidden">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//               </svg>
//             </label>
//             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64 space-y-3">
//               {navItems}
//             </ul>
//           </div>
//           <a href="/"><img src={logo} alt="Logo" width="70PX"/></a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{navItems}</ul>
//         </div>
//         <div className="navbar-end">
//           {isLoggedIn && (
//             <Link to="/Cart" className="btn btn-ghost btn-circle lg:flex items-center justify-center mr-3">
//               <div className="indicator">
//                 <FaShoppingCart size={24} />
//                 <span className="badge badge-sm indicator-item">{cartCount}</span>
//               </div>
//             </Link>
//           )}
//           {isLoggedIn && (
//             <label tabIndex={0} className="btn btn-ghost btn-circle lg:flex items-center justify-center mr-3">
//               <div className="indicator">
//                 <Link to="/profile">
//                   {user && user.image ? (
//                     <img src={user.image} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
//                   ) : (
//                     <FaUserCircle size={40} className="text-green-500" />
//                   )}
//                 </Link>
//               </div>
//             </label>
//           )}
//           {isLoggedIn ? (
//             <button onClick={handleLogout} className="btn flex items-center gap-2 rounded-full px-6 bg-green text-white">
//               Logout
//             </button>
//           ) : (
//             <Link to="/login" className="btn flex items-center gap-2 rounded-full px-6 bg-green text-white">
//               <FaRegUser /> Login
//             </Link>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;






import React, { useEffect, useState } from "react";
import logo from "/logo3.png";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FaUserCircle } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import axios from 'axios';

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userID');
        if (!token || !userId) {
          setIsLoggedIn(false);
          return;
        }

        const response = await axios.get(`http://localhost:5000/api/users/profile/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true
        });
        setUser(response.data.user);
        setIsLoggedIn(true);
        fetchCartCount();
      } catch (error) {
        console.error('Error fetching user data', error);
        setIsLoggedIn(false);
      }
    };

    fetchUser();
  }, []);

  const fetchCartCount = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/cart/count', {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true
      });
      setCartCount(response.data.count);
    } catch (error) {
      console.error('Error fetching cart count', error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add this effect to update cart count when navigating between pages
  useEffect(() => {
    if (isLoggedIn) {
      fetchCartCount();
    }
  }, [isLoggedIn, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUser(null);
    setCartCount(0);
    navigate("/");
  };

  const navItems = (
    <>
      <li><Link to="/" className="text-green">Home</Link></li>
      <li><Link to="/Menu">Menu</Link></li>
      <li><Link to="/contact">Contact us</Link></li>
      <li><Link to="/custom">Custom Your Food</Link></li>
      <li><Link to="/order">My Orders</Link></li>
    </>
  );

  return (
    <header className={`max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out`}>
      <div className={`navbar xl:px-24 ${isSticky ? "shadow-md bg-white transition-all duration-300 ease-in-out" : "bg-white"}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64 space-y-3">
              {navItems}
            </ul>
          </div>
          <a href="/"><img src={logo} alt="Logo" width="70PX"/></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {isLoggedIn && (
            <Link to="/Cart" className="btn btn-ghost btn-circle lg:flex items-center justify-center mr-3">
              <div className="indicator">
                <FaShoppingCart size={24} />
                <span className="badge badge-sm indicator-item">{cartCount}</span>
              </div>
            </Link>
          )}
          {isLoggedIn && (
            <label tabIndex={0} className="btn btn-ghost btn-circle lg:flex items-center justify-center mr-3">
              <div className="indicator">
                <Link to="/profile">
                  {user && user.image ? (
                    <img src={user.image} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
                  ) : (
                    <FaUserCircle size={40} className="text-green-500" />
                  )}
                </Link>
              </div>
            </label>
          )}
          {isLoggedIn ? (
            <button onClick={handleLogout} className="btn flex items-center gap-2 rounded-full px-6 bg-green text-white">
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn flex items-center gap-2 rounded-full px-6 bg-green text-white">
              <FaRegUser /> Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;