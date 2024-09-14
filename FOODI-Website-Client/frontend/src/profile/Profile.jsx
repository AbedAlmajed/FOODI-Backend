

// import React, { useState, useEffect } from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import { FaUserCircle } from 'react-icons/fa';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// // مصفوفة الأطعمة النموذجية
// const items = [
//   {
//     _id: "642c155b2c4774f05c36eeaa",
//     name: "Haddock",
//     recipe: "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
//     image: "/recipes/img1.png",
//     category: "salad",
//     price: 14.7
//   },
//   {
//     _id: "642c155b2c4774f05c36eeb9",
//     name: "Haddock",
//     recipe: "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
//     image: "/recipes/img2.png",
//     category: "drinks",
//     price: 14.7
//   },
//   {
//     _id: "642c155b2c4774f05c36ee7c",
//     name: "Haddock",
//     recipe: "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
//     image: "/recipes/img2.png",
//     category: "drinks",
//     price: 14.7
//   },
// ];
// export default function Profile() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     profilePhotoLink: '',
//   });

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const userId = localStorage.getItem('userID');
//         const token = localStorage.getItem('token');

//         if (!userId || !token) {
//           throw new Error('User ID or token not found in local storage');
//         }

//         const response = await axios.get(`http://localhost:5000/api/users/profile/${userId}`, {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true
//         });

//         setFormData({
//           name: response.data.name,
//           email: response.data.email,
//           password: '',
//           profilePhotoLink: response.data.image || '',
//         });

//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching user profile:', error);
//         setLoading(false);
//         Swal.fire({
//           icon: 'error',
//           title: 'Error fetching profile',
//           text: 'Failed to load user data. Please try again later.',
//         });
//       }
//     };

//     fetchProfile();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFormData({
//           ...formData,
//           profilePhotoLink: reader.result,
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const userId = localStorage.getItem('userID');
//       const token = localStorage.getItem('token');
//       if (!userId || !token) {
//         throw new Error('User ID or token not found in local storage');
//       }

//       await axios.put(`http://localhost:5000/api/users/profile/${userId}`, formData, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true,
//       });

//       Swal.fire({
//         icon: 'success',
//         title: 'Profile updated successfully',
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     } catch (error) {
//       console.error('Error updating profile:', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Failed to update profile',
//         text: error.response?.data?.message || 'An error occurred',
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="p-4 md:p-8">
//       <Navbar />

//       <div className="flex flex-col justify-center items-center min-h-screen space-y-8">
//         <div className="w-full max-w-md bg-white shadow-md rounded-md p-6 mt-20">
//           <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">Edit Profile</h3>

//           <div className="flex justify-center mb-4">
//             <label htmlFor="profilePhoto" className="flex flex-col items-center cursor-pointer">
//               {formData.profilePhotoLink ? (
//                 <img
//                   src={formData.profilePhotoLink}
//                   alt="Profile"
//                   className="w-24 h-24 rounded-full object-cover"
//                 />
//               ) : (
//                 <FaUserCircle size={100} className="text-green" />
//               )}
//               <input
//                 type="file"
//                 id="profilePhoto"
//                 className="hidden"
//                 onChange={handleFileChange}
//               />
//             </label>
//           </div>

//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div className="relative">
//               <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//                 placeholder="Your Name"
//               />
//             </div>

//             <div className="relative">
//               <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//                 placeholder="Email"
//               />
//             </div>

//             <div className="relative">
//               <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//                 placeholder="Enter a new password to change"
//               />
//             </div>

//             <label htmlFor="profilePhotoLink" className="block text-sm font-medium mb-1">Profile Photo Link</label>
//             <input
//               type="text"
//               id="profilePhotoLink"
//               value={formData.profilePhotoLink}
//               onChange={handleChange}
//               className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//               placeholder="Profile Photo Link"
//             />

//             <button
//               type="submit"
//               className="w-full bg-green text-white py-2 rounded-md hover:bg-black"
//             >
//               Update
//             </button>
//           </form>
//         </div>
//                {/* كتالوج الطعام المفضل */}
//         <div className="w-full max-w-6xl bg-white shadow-md rounded-md p-6">
//           <h2 className="text-center text-2xl font-bold mb-6">الطعام المفضل</h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//              {items.map((item) => (
//               <div key={item._id} className="card bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
//                 <figure>
//                   <img src={item.image} alt={item.name} className="hover:scale-105 transition-all duration-300 md:h-72" />
//                 </figure>
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.name}</h3>
//                   <p className="text-gray-700 mb-2">{item.recipe}</p>
//                   <p className="text-green-600 font-bold mb-4">${item.price.toFixed(2)}</p>
//                   <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-black transition-colors duration-300">
//                     إضافة إلى السلة
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* كتالوج الطعام المخصص */}
//         <div className="w-full max-w-6xl bg-white shadow-md rounded-md p-6">
//           <h2 className="text-center text-2xl font-bold mb-6">الطعام المخصص</h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {items.map((item) => (
//               <div key={item._id} className="card bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
//                 <figure>
//                   <img src={item.image} alt={item.name} className="hover:scale-105 transition-all duration-300 md:h-72" />
//                 </figure>
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.name}</h3>
//                   <p className="text-gray-700 mb-2">{item.recipe}</p>
//                   <p className="text-green-600 font-bold mb-4">${item.price.toFixed(2)}</p>
//                   <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-black transition-colors duration-300">
//                     إضافة إلى السلة
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import { FaUserCircle } from 'react-icons/fa';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// // تكوين Axios مع الإعدادات الأساسية
// const api = axios.create({
//   baseURL: 'http://localhost:5000/api',
//   withCredentials: true
// });

// // اعتراض الطلبات لإضافة رمز المصادقة
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers['Authorization'] = `Bearer ${token}`;
//   }
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

// // مصفوفة الأطعمة النموذجية
// const items = [
//   {
//     _id: "642c155b2c4774f05c36eeaa",
//     name: "Haddock",
//     recipe: "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
//     image: "/recipes/img1.png",
//     category: "salad",
//     price: 14.7
//   },
//   {
//     _id: "642c155b2c4774f05c36eeb9",
//     name: "Haddock",
//     recipe: "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
//     image: "/recipes/img2.png",
//     category: "drinks",
//     price: 14.7
//   },
//   {
//     _id: "642c155b2c4774f05c36ee7c",
//     name: "Haddock",
//     recipe: "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
//     image: "/recipes/img2.png",
//     category: "drinks",
//     price: 14.7
//   },
// ];

// export default function Profile() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     profilePhotoLink: '',
//   });

//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const userId = localStorage.getItem('userID');
//         if (!userId) {
//           throw new Error('User ID not found');
//         }
//         const response = await api.get(`/users/profile/${userId}`);
//         setFormData({
//           name: response.data.name,
//           email: response.data.email,
//           password: '',
//           profilePhotoLink: response.data.image || '',
//         });
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching user profile', error);
//         if (error.response && error.response.status === 403) {
//           Swal.fire({
//             icon: 'error',
//             title: 'جلسة منتهية',
//             text: 'يرجى تسجيل الدخول مرة أخرى',
//             showConfirmButton: false,
//             timer: 1500
//           });
//           localStorage.removeItem('token');
//           localStorage.removeItem('userID');
//           navigate('/login');
//         } else {
//           Swal.fire({
//             icon: 'error',
//             title: 'خطأ',
//             text: 'حدث خطأ أثناء جلب بيانات الملف الشخصي',
//             showConfirmButton: false,
//             timer: 1500
//           });
//         }
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [navigate]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFormData({
//           ...formData,
//           profilePhotoLink: reader.result,
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const userId = localStorage.getItem('userID');
//       await api.put(`/users/profile/${userId}`, formData);
//       Swal.fire({
//         icon: 'success',
//         title: 'تم تحديث الملف الشخصي بنجاح',
//         showConfirmButton: false,
//         timer: 1500
//       });
//     } catch (error) {
//       console.error('Error updating profile', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'فشل تحديث الملف الشخصي',
//         text: error.response?.data?.message || 'حدث خطأ أثناء تحديث الملف الشخصي',
//         showConfirmButton: false,
//         timer: 1500
//       });
//     }
//   };

//   if (loading) {
//     return <div className="flex justify-center items-center h-screen">جاري التحميل...</div>;
//   }

//   return (
//     <div className="p-4 md:p-8">
//       <Navbar />

//       <div className="flex flex-col justify-center items-center min-h-screen space-y-8">
//         {/* قسم تعديل الملف الشخصي */}
//         <div className="w-full max-w-md bg-white shadow-md rounded-md p-6 mt-20">
//           <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">تعديل الملف الشخصي</h3>

//           {/* تحميل الصورة */}
//           <div className="flex justify-center mb-4">
//             <label htmlFor="profilePhoto" className="flex flex-col items-center cursor-pointer">
//               {formData.profilePhotoLink ? (
//                 <img
//                   src={formData.profilePhotoLink}
//                   alt="Profile"
//                   className="w-24 h-24 rounded-full object-cover"
//                 />
//               ) : (
//                 <FaUserCircle size={100} className="text-green" />
//               )}
//               <input
//                 type="file"
//                 id="profilePhoto"
//                 className="hidden"
//                 onChange={handleFileChange}
//               />
//             </label>
//           </div>

//           {/* نموذج تعديل الملف الشخصي */}
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div className="relative">
//               <label htmlFor="name" className="block text-sm font-medium mb-1">
//                 الاسم
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//                 placeholder="الاسم الكامل"
//               />
//             </div>

//             <div className="relative">
//               <label htmlFor="email" className="block text-sm font-medium mb-1">
//                 البريد الإلكتروني
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//                 placeholder="البريد الإلكتروني"
//               />
//             </div>

//             <div className="relative">
//               <label htmlFor="password" className="block text-sm font-medium mb-1">
//                 كلمة المرور
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//                 placeholder="أدخل كلمة مرور جديدة للتغيير"
//               />
//             </div>

//             <label htmlFor="profilePhotoLink" className="block text-sm font-medium mb-1">
//               رابط صورة الملف الشخصي
//             </label>
//             <input
//               type="text"
//               id="profilePhotoLink"
//               value={formData.profilePhotoLink}
//               onChange={handleChange}
//               className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//               placeholder="رابط صورة الملف الشخصي"
//             />

//             <button
//               type="submit"
//               className="w-full bg-green text-white py-2 rounded-md hover:bg-black"
//             >
//               تحديث
//             </button>
//           </form>
//         </div>

//         {/* كتالوج الطعام المفضل */}
//         <div className="w-full max-w-6xl bg-white shadow-md rounded-md p-6">
//           <h2 className="text-center text-2xl font-bold mb-6">الطعام المفضل</h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {items.map((item) => (
//               <div key={item._id} className="card bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
//                 <figure>
//                   <img src={item.image} alt={item.name} className="hover:scale-105 transition-all duration-300 md:h-72" />
//                 </figure>
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.name}</h3>
//                   <p className="text-gray-700 mb-2">{item.recipe}</p>
//                   <p className="text-green-600 font-bold mb-4">${item.price.toFixed(2)}</p>
//                   <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-black transition-colors duration-300">
//                     إضافة إلى السلة
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* كتالوج الطعام المخصص */}
//         <div className="w-full max-w-6xl bg-white shadow-md rounded-md p-6">
//           <h2 className="text-center text-2xl font-bold mb-6">الطعام المخصص</h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {items.map((item) => (
//               <div key={item._id} className="card bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
//                 <figure>
//                   <img src={item.image} alt={item.name} className="hover:scale-105 transition-all duration-300 md:h-72" />
//                 </figure>
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.name}</h3>
//                   <p className="text-gray-700 mb-2">{item.recipe}</p>
//                   <p className="text-green-600 font-bold mb-4">${item.price.toFixed(2)}</p>
//                   <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-black transition-colors duration-300">
//                     إضافة إلى السلة
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }




// // Profile.js
// import React, { useState, useEffect } from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import { FaUserCircle } from 'react-icons/fa';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// export default function Profile() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     profilePhotoLink: '',
//   });

//   const [loading, setLoading] = useState(true);
//   const [favoriteItems, setFavoriteItems] = useState([]);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const userId = localStorage.getItem('userID');
//         const token = localStorage.getItem('token');

//         if (!userId || !token) {
//           throw new Error('User ID or token not found in local storage');
//         }

//         const response = await axios.get(`http://localhost:5000/api/users/profile/${userId}`, {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true
//         });

//         setFormData({
//           name: response.data.name,
//           email: response.data.email,
//           password: '',
//           profilePhotoLink: response.data.image || '',
//         });

//         // Fetch favorite items
//         const favoritesResponse = await axios.get(`http://localhost:5000/api/users/${userId}/favorites`, {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true
//         });

//         setFavoriteItems(favoritesResponse.data);

//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//         setLoading(false);
//         Swal.fire({
//           icon: 'error',
//           title: 'Error fetching profile',
//           text: 'Failed to load user data. Please try again later.',
//         });
//       }
//     };

//     fetchProfile();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFormData({
//           ...formData,
//           profilePhotoLink: reader.result,
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const userId = localStorage.getItem('userID');
//       const token = localStorage.getItem('token');
//       if (!userId || !token) {
//         throw new Error('User ID or token not found in local storage');
//       }

//       await axios.put(`http://localhost:5000/api/users/profile/${userId}`, formData, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true,
//       });

//       Swal.fire({
//         icon: 'success',
//         title: 'Profile updated successfully',
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     } catch (error) {
//       console.error('Error updating profile:', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Failed to update profile',
//         text: error.response?.data?.message || 'An error occurred',
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="p-4 md:p-8">
//       <Navbar />

//       <div className="flex flex-col justify-center items-center min-h-screen space-y-8">
//         <div className="w-full max-w-md bg-white shadow-md rounded-md p-6 mt-20">
//           <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">Edit Profile</h3>

//           <div className="flex justify-center mb-4">
//             <label htmlFor="profilePhoto" className="flex flex-col items-center cursor-pointer">
//               {formData.profilePhotoLink ? (
//                 <img
//                   src={formData.profilePhotoLink}
//                   alt="Profile"
//                   className="w-24 h-24 rounded-full object-cover"
//                 />
//               ) : (
//                 <FaUserCircle size={100} className="text-green" />
//               )}
//               <input
//                 type="file"
//                 id="profilePhoto"
//                 className="hidden"
//                 onChange={handleFileChange}
//               />
//             </label>
//           </div>

//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div className="relative">
//               <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//                 placeholder="Your Name"
//               />
//             </div>

//             <div className="relative">
//               <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//                 placeholder="Email"
//               />
//             </div>

//             <div className="relative">
//               <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//                 placeholder="Enter a new password to change"
//               />
//             </div>

//             <label htmlFor="profilePhotoLink" className="block text-sm font-medium mb-1">Profile Photo Link</label>
//             <input
//               type="text"
//               id="profilePhotoLink"
//               value={formData.profilePhotoLink}
//               onChange={handleChange}
//               className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//               placeholder="Profile Photo Link"
//             />

//             <button
//               type="submit"
//               className="w-full bg-green text-white py-2 rounded-md hover:bg-black"
//             >
//               Update
//             </button>
//           </form>
//         </div>
// {/* Favorite Food Section */}
// <div className="w-full max-w-6xl bg-white shadow-md rounded-md p-6">
//           <h2 className="text-center text-2xl font-bold mb-6">الطعام المفضل</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {favoriteItems.map((item) => (
//               <div key={item._id} className="card bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
//                 <figure>
//                   <img src={item.imageUrl} alt={item.name} className="hover:scale-105 transition-all duration-300 md:h-72" />
//                 </figure>
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.recipeName}</h3>
//                   <p className="text-gray-700 mb-2">{item.recipeDetails}</p>
//                   <p className="text-green-600 font-bold mb-4">${item.price.toFixed(2)}</p>
//                   <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-black transition-colors duration-300">
//                     إضافة إلى السلة
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }
          



// // Profile.js
// import React, { useState, useEffect } from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import { FaUserCircle } from 'react-icons/fa';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// export default function Profile() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     profilePhotoLink: '',
//   });

//   const [loading, setLoading] = useState(true);
//   const [favoriteItems, setFavoriteItems] = useState([]);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const userId = localStorage.getItem('userID');
//         const token = localStorage.getItem('token');

//         if (!userId || !token) {
//           throw new Error('User ID or token not found in local storage');
//         }

//         const response = await axios.get(`http://localhost:5000/api/users/profile/${userId}`, {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         });

//         setFormData({
//           name: response.data.name,
//           email: response.data.email,
//           password: '',
//           profilePhotoLink: response.data.image || '',
//         });

//         // Fetch favorite items
//         const favoritesResponse = await axios.get(
//           `http://localhost:5000/api/users/${userId}/favorites`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//             withCredentials: true,
//           }
//         );

//         setFavoriteItems(favoritesResponse.data);

//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//         setLoading(false);
//         Swal.fire({
//           icon: 'error',
//           title: 'Error fetching profile',
//           text: 'Failed to load user data. Please try again later.',
//         });
//       }
//     };

//     fetchProfile();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFormData({
//           ...formData,
//           profilePhotoLink: reader.result,
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const userId = localStorage.getItem('userID');
//       const token = localStorage.getItem('token');
//       if (!userId || !token) {
//         throw new Error('User ID or token not found in local storage');
//       }

//       await axios.put(`http://localhost:5000/api/users/profile/${userId}`, formData, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true,
//       });

//       Swal.fire({
//         icon: 'success',
//         title: 'Profile updated successfully',
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     } catch (error) {
//       console.error('Error updating profile:', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Failed to update profile',
//         text: error.response?.data?.message || 'An error occurred',
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="p-4 md:p-8">
//       <Navbar />

//       <div className="flex flex-col justify-center items-center min-h-screen space-y-8">
//         <div className="w-full max-w-md bg-white shadow-md rounded-md p-6 mt-20">
//           <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">Edit Profile</h3>

//           <div className="flex justify-center mb-4">
//             <label htmlFor="profilePhoto" className="flex flex-col items-center cursor-pointer">
//               {formData.profilePhotoLink ? (
//                 <img
//                   src={formData.profilePhotoLink}
//                   alt="Profile"
//                   className="w-24 h-24 rounded-full object-cover"
//                 />
//               ) : (
//                 <FaUserCircle size={100} className="text-green" />
//               )}
//               <input
//                 type="file"
//                 id="profilePhoto"
//                 className="hidden"
//                 onChange={handleFileChange}
//               />
//             </label>
//           </div>

//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div className="relative">
//               <label htmlFor="name" className="block text-sm font-medium mb-1">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//                 placeholder="Your Name"
//               />
//             </div>

//             <div className="relative">
//               <label htmlFor="email" className="block text-sm font-medium mb-1">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//                 placeholder="Email"
//               />
//             </div>

//             <div className="relative">
//               <label htmlFor="password" className="block text-sm font-medium mb-1">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//                 placeholder="Enter a new password to change"
//               />
//             </div>

//             <label htmlFor="profilePhotoLink" className="block text-sm font-medium mb-1">
//               Profile Photo Link
//             </label>
//             <input
//               type="text"
//               id="profilePhotoLink"
//               value={formData.profilePhotoLink}
//               onChange={handleChange}
//               className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//               placeholder="Profile Photo Link"
//             />

//             <button
//               type="submit"
//               className="w-full bg-green text-white py-2 rounded-md hover:bg-black"
//             >
//               Update
//             </button>
//           </form>
//         </div>

//         {/* Favorite Food Section */}
//         {favoriteItems.length > 0 && (
//           <div className="w-full max-w-6xl bg-white shadow-md rounded-md p-6">
//             <h2 className="text-center text-2xl font-bold mb-6">الطعام المفضل</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//               {favoriteItems.map((item) => (
//                 <div
//                   key={item._id}
//                   className="card bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
//                 >
//                   <figure>
//                     <img
//                       src={item.imageUrl}
//                       alt={item.name}
//                       className="hover:scale-105 transition-all duration-300 md:h-72"
//                     />
//                   </figure>
//                   <div className="p-4">
//                     <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.recipeName}</h3>
//                     <p className="text-gray-700 mb-2">{item.recipeDetails}</p>
//                     <p className="text-green-600 font-bold mb-4">
//                       ${item.price.toFixed(2)}
//                     </p>
//                     <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-black transition-colors duration-300">
//                       إضافة إلى السلة
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// }



import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaUserCircle } from 'react-icons/fa';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Profile() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    profilePhotoLink: '',
  });

  const [loading, setLoading] = useState(true);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [customFoods, setCustomFoods] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userId = localStorage.getItem('userID');
        const token = localStorage.getItem('token');

        if (!userId || !token) {
          throw new Error('User ID or token not found in local storage');
        }

        const response = await axios.get(`http://localhost:5000/api/users/profile/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });

        setFormData({
          name: response.data.user.name,
          email: response.data.user.email,
          password: '',
          profilePhotoLink: response.data.user.image || '',
        });

        setCustomFoods(response.data.customFoods);

        // Fetch favorite items
        const favoritesResponse = await axios.get(
          `http://localhost:5000/api/users/${userId}/favorites`,
          {
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: true,
          }
        );

        setFavoriteItems(favoritesResponse.data);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Error fetching profile',
          text: 'Failed to load user data. Please try again later.',
        });
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          profilePhotoLink: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem('userID');
      const token = localStorage.getItem('token');
      if (!userId || !token) {
        throw new Error('User ID or token not found in local storage');
      }

      await axios.put(`http://localhost:5000/api/users/profile/${userId}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });

      Swal.fire({
        icon: 'success',
        title: 'Profile updated successfully',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      Swal.fire({
        icon: 'error',
        title: 'Failed to update profile',
        text: error.response?.data?.message || 'An error occurred',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 md:p-8">
      <Navbar />

      <div className="flex flex-col justify-center items-center min-h-screen space-y-8">
        <div className="w-full max-w-md bg-white shadow-md rounded-md p-6 mt-20">
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">Edit Profile</h3>

          <div className="flex justify-center mb-4">
            <label htmlFor="profilePhoto" className="flex flex-col items-center cursor-pointer">
              {formData.profilePhotoLink ? (
                <img
                  src={formData.profilePhotoLink}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover"
                />
              ) : (
                <FaUserCircle size={100} className="text-green" />
              )}
              <input
                type="file"
                id="profilePhoto"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
                placeholder="Your Name"
              />
            </div>

            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
                placeholder="Email"
              />
            </div>

            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
                placeholder="Enter a new password to change"
              />
            </div>

            <label htmlFor="profilePhotoLink" className="block text-sm font-medium mb-1">
              Profile Photo Link
            </label>
            <input
              type="text"
              id="profilePhotoLink"
              value={formData.profilePhotoLink}
              onChange={handleChange}
              className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
              placeholder="Profile Photo Link"
            />

            <button
              type="submit"
              className="w-full bg-green text-white py-2 rounded-md hover:bg-black"
            >
              Update
            </button>
          </form>
        </div>

        {/* Favorite Food Section */}
        {favoriteItems.length > 0 && (
          <div className="w-full max-w-6xl bg-white shadow-md rounded-md p-6">
            <h2 className="text-center text-2xl font-bold mb-6">الطعام المفضل</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {favoriteItems.map((item) => (
                <div
                  key={item._id}
                  className="card bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
                >
                  <figure>
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="hover:scale-105 transition-all duration-300 md:h-72"
                    />
                  </figure>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.recipeName}</h3>
                    <p className="text-gray-700 mb-2">{item.recipeDetails}</p>
                    <p className="text-green-600 font-bold mb-4">
                      ${item.price.toFixed(2)}
                    </p>
                    <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-black transition-colors duration-300">
                      إضافة إلى السلة
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Custom Food Section */}
        {customFoods.length > 0 && (
          <div className="w-full max-w-6xl bg-white shadow-md rounded-md p-6">
            <h2 className="text-center text-2xl font-bold mb-6">الطعام المخصص</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {customFoods.map((item) => (
                <div
                  key={item._id}
                  className="card bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
                >
                  <figure>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="hover:scale-105 transition-all duration-300 md:h-72"
                    />
                  </figure>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.name}</h3>
                    <p className="text-gray-700 mb-2">{item.notes}</p>
                    <p className="text-green-600 font-bold mb-4">Approved</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}