

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

//         const response = await axios.get(`http://localhost:4000/api/users/profile/${userId}`, {
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

//       await axios.put(`http://localhost:4000/api/users/profile/${userId}`, formData, {
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
//   baseURL: 'http://localhost:4000/api',
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

//         const response = await axios.get(`http://localhost:4000/api/users/profile/${userId}`, {
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
//         const favoritesResponse = await axios.get(`http://localhost:4000/api/users/${userId}/favorites`, {
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

//       await axios.put(`http://localhost:4000/api/users/profile/${userId}`, formData, {
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

//         const response = await axios.get(`http://localhost:4000/api/users/profile/${userId}`, {
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
//           `http://localhost:4000/api/users/${userId}/favorites`,
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

//       await axios.put(`http://localhost:4000/api/users/profile/${userId}`, formData, {
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


//////////////////////////////////////////////////////////done ..............

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
//   const [customFoods, setCustomFoods] = useState([]);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const userId = localStorage.getItem('userID');
//         const token = localStorage.getItem('token');

//         if (!userId || !token) {
//           throw new Error('User ID or token not found in local storage');
//         }

//         const response = await axios.get(`http://localhost:4000/api/users/profile/${userId}`, {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         });

//         setFormData({
//           name: response.data.user.name,
//           email: response.data.user.email,
//           password: '',
//           profilePhotoLink: response.data.user.image || '',
//         });

//         setCustomFoods(response.data.customFoods);

//         // Fetch favorite items
//         const favoritesResponse = await axios.get(
//           `http://localhost:4000/api/users/${userId}/favorites`,
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

//       await axios.put(`http://localhost:4000/api/users/profile/${userId}`, formData, {
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
//             <h2 className="text-center text-2xl font-bold mb-6"> Favorite Food</h2>
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
//                     Add to cart
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Custom Food Section */}
//         {customFoods.length > 0 && (
//           <div className="w-full max-w-6xl bg-white shadow-md rounded-md p-6">
//             <h2 className="text-center text-2xl font-bold mb-6">Custom Food</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//               {customFoods.map((item) => (
//                 <div
//                   key={item._id}
//                   className="card bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
//                 >
//                   <figure>
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="hover:scale-105 transition-all duration-300 md:h-72"
//                     />
//                   </figure>
//                   <div className="p-4">
//                     <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.name}</h3>
//                     <p className="text-gray-700 mb-2">{item.notes}</p>
//                     <p className="text-green-600 font-bold mb-4">
//                       ${item.price}
//                     </p>
//                     <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-black transition-colors duration-300">
//                       Add to cart
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
//   const [customFoods, setCustomFoods] = useState([]);
//   const [activeSection, setActiveSection] = useState('editProfile');

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const userId = localStorage.getItem('userID');
//         const token = localStorage.getItem('token');

//         if (!userId || !token) {
//           throw new Error('User ID or token not found in local storage');
//         }

//         const response = await axios.get(`http://localhost:4000/api/users/profile/${userId}`, {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         });

//         setFormData({
//           name: response.data.user.name,
//           email: response.data.user.email,
//           password: '',
//           profilePhotoLink: response.data.user.image || '',
//         });

//         setCustomFoods(response.data.customFoods);

//         const favoritesResponse = await axios.get(
//           `http://localhost:4000/api/users/${userId}/favorites`,
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

//       await axios.put(`http://localhost:4000/api/users/profile/${userId}`, formData, {
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
//         <div className="w-full max-w-6xl bg-white shadow-md rounded-md p-6 mt-20">
//           <div className="flex justify-center space-x-4 mb-6">
//             <button
//               onClick={() => setActiveSection('editProfile')}
//               className={`px-4 py-2 rounded-md ${
//                 activeSection === 'editProfile' ? 'bg-green text-white' : 'bg-gray-200 text-gray-700'
//               }`}
//             >
//               Edit Profile
//             </button>
//             <button
//               onClick={() => setActiveSection('favoriteFood')}
//               className={`px-4 py-2 rounded-md ${
//                 activeSection === 'favoriteFood' ? 'bg-green text-white' : 'bg-gray-200 text-gray-700'
//               }`}
//             >
//               Favorite Food
//             </button>
//             <button
//               onClick={() => setActiveSection('customFood')}
//               className={`px-4 py-2 rounded-md ${
//                 activeSection === 'customFood' ? 'bg-green text-white' : 'bg-gray-200 text-gray-700'
//               }`}
//             >
//               Custom Food
//             </button>
//           </div>

//           {activeSection === 'editProfile' && (
//             <div className="w-full max-w-md mx-auto">
//               <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">Edit Profile</h3>

//               <div className="flex justify-center mb-4">
//                 <label htmlFor="profilePhoto" className="flex flex-col items-center cursor-pointer">
//                   {formData.profilePhotoLink ? (
//                     <img
//                       src={formData.profilePhotoLink}
//                       alt="Profile"
//                       className="w-24 h-24 rounded-full object-cover"
//                     />
//                   ) : (
//                     <FaUserCircle size={100} className="text-green" />
//                   )}
//                   <input
//                     type="file"
//                     id="profilePhoto"
//                     className="hidden"
//                     onChange={handleFileChange}
//                   />
//                 </label>
//               </div>

//               <form className="space-y-4" onSubmit={handleSubmit}>
//                 <div className="relative">
//                   <label htmlFor="name" className="block text-sm font-medium mb-1">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//                     placeholder="Your Name"
//                   />
//                 </div>

//                 <div className="relative">
//                   <label htmlFor="email" className="block text-sm font-medium mb-1">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//                     placeholder="Email"
//                   />
//                 </div>

//                 <div className="relative">
//                   <label htmlFor="password" className="block text-sm font-medium mb-1">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//                     placeholder="Enter a new password to change"
//                   />
//                 </div>

//                 <label htmlFor="profilePhotoLink" className="block text-sm font-medium mb-1">
//                   Profile Photo Link
//                 </label>
//                 <input
//                   type="text"
//                   id="profilePhotoLink"
//                   value={formData.profilePhotoLink}
//                   onChange={handleChange}
//                   className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//                   placeholder="Profile Photo Link"
//                 />

//                 <button
//                   type="submit"
//                   className="w-full bg-green text-white py-2 rounded-md hover:bg-black"
//                 >
//                   Update
//                 </button>
//               </form>
//             </div>
//           )}

//           {activeSection === 'favoriteFood' && (
//             <div>
//               <h2 className="text-center text-2xl font-bold mb-6">Favorite Food</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {favoriteItems.map((item) => (
//                   <div
//                     key={item._id}
//                     className="card bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
//                   >
//                     <figure>
//                       <img
//                         src={item.imageUrl}
//                         alt={item.name}
//                         className="hover:scale-105 transition-all duration-300 md:h-72"
//                       />
//                     </figure>
//                     <div className="p-4">
//                       <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.recipeName}</h3>
//                       <p className="text-gray-700 mb-2">{item.recipeDetails}</p>
//                       <p className="text-green-600 font-bold mb-4">
//                         ${item.price.toFixed(2)}
//                       </p>
//                       <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-black transition-colors duration-300">
//                         Add to cart
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {activeSection === 'customFood' && (
//             <div>
//               <h2 className="text-center text-2xl font-bold mb-6">Custom Food</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {customFoods.map((item) => (
//                   <div
//                     key={item._id}
//                     className="card bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
//                   >
//                     <figure>
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="hover:scale-105 transition-all duration-300 md:h-72"
//                       />
//                     </figure>
//                     <div className="p-4">
//                       <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.name}</h3>
//                       <p className="text-gray-700 mb-2">{item.notes}</p>
//                       <p className="text-green-600 font-bold mb-4">
//                         ${item.price}
//                       </p>
//                       <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-black transition-colors duration-300">
//                         Add to cart
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }







/////////////////////////malek ....

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
//   const [customFoods, setCustomFoods] = useState([]);
//   const [orders, setOrders] = useState([]);
//   const [activeSection, setActiveSection] = useState('editProfile');

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const userId = localStorage.getItem('userID');
//         const token = localStorage.getItem('token');

//         if (!userId || !token) {
//           throw new Error('User ID or token not found in local storage');
//         }

//         const response = await axios.get(`http://localhost:4000/api/users/profile/${userId}`, {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         });

//         setFormData({
//           name: response.data.user.name,
//           email: response.data.user.email,
//           password: '',
//           profilePhotoLink: response.data.user.image || '',
//         });

//         setCustomFoods(response.data.customFoods);

//         const favoritesResponse = await axios.get(
//           `http://localhost:4000/api/users/${userId}/favorites`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//             withCredentials: true,
//           }
//         );

//         setFavoriteItems(favoritesResponse.data);

//         // Fetch orders
//         const ordersResponse = await axios.get('http://localhost:4000/api/orders', {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         });

//         setOrders(ordersResponse.data);

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

//       await axios.put(`http://localhost:4000/api/users/profile/${userId}`, formData, {
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
//         <div className="w-full max-w-6xl bg-white shadow-md rounded-md p-6 mt-20">
//           <div className="flex justify-center space-x-4 mb-6">
//             <button
//               onClick={() => setActiveSection('editProfile')}
//               className={`px-4 py-2 rounded-md ${
//                 activeSection === 'editProfile' ? 'bg-green text-white' : 'bg-gray-200 text-gray-700'
//               }`}
//             >
//               Edit Profile
//             </button>
//             <button
//               onClick={() => setActiveSection('favoriteFood')}
//               className={`px-4 py-2 rounded-md ${
//                 activeSection === 'favoriteFood' ? 'bg-green text-white' : 'bg-gray-200 text-gray-700'
//               }`}
//             >
//               Favorite Food
//             </button>
//             <button
//               onClick={() => setActiveSection('customFood')}
//               className={`px-4 py-2 rounded-md ${
//                 activeSection === 'customFood' ? 'bg-green text-white' : 'bg-gray-200 text-gray-700'
//               }`}
//             >
//               Custom Food
//             </button>
//             <button
//               onClick={() => setActiveSection('orders')}
//               className={`px-4 py-2 rounded-md ${
//                 activeSection === 'orders' ? 'bg-green text-white' : 'bg-gray-200 text-gray-700'
//               }`}
//             >
//               Orders
//             </button>
//           </div>

//           {activeSection === 'editProfile' && (
//             <div className="w-full max-w-md mx-auto">
//               <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">Edit Profile</h3>

//               <div className="flex justify-center mb-4">
//                 <label htmlFor="profilePhoto" className="flex flex-col items-center cursor-pointer">
//                   {formData.profilePhotoLink ? (
//                     <img
//                       src={formData.profilePhotoLink}
//                       alt="Profile"
//                       className="w-24 h-24 rounded-full object-cover"
//                     />
//                   ) : (
//                     <FaUserCircle size={100} className="text-green" />
//                   )}
//                   <input
//                     type="file"
//                     id="profilePhoto"
//                     className="hidden"
//                     onChange={handleFileChange}
//                   />
//                 </label>
//               </div>

//               <form className="space-y-4" onSubmit={handleSubmit}>
//                 <div className="relative">
//                   <label htmlFor="name" className="block text-sm font-medium mb-1">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//                     placeholder="Your Name"
//                   />
//                 </div>

//                 <div className="relative">
//                   <label htmlFor="email" className="block text-sm font-medium mb-1">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//                     placeholder="Email"
//                   />
//                 </div>

//                 <div className="relative">
//                   <label htmlFor="password" className="block text-sm font-medium mb-1">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//                     placeholder="Enter a new password to change"
//                   />
//                 </div>

//                 <label htmlFor="profilePhotoLink" className="block text-sm font-medium mb-1">
//                   Profile Photo Link
//                 </label>
//                 <input
//                   type="text"
//                   id="profilePhotoLink"
//                   value={formData.profilePhotoLink}
//                   onChange={handleChange}
//                   className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//                   placeholder="Profile Photo Link"
//                 />

//                 <button
//                   type="submit"
//                   className="w-full bg-green text-white py-2 rounded-md hover:bg-black"
//                 >
//                   Update
//                 </button>
//               </form>
//             </div>
//           )}

//           {activeSection === 'favoriteFood' && (
//             <div>
//               <h2 className="text-center text-2xl font-bold mb-6">Favorite Food</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {favoriteItems.map((item) => (
//                   <div
//                     key={item._id}
//                     className="card bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
//                   >
//                     <figure>
//                       <img
//                         src={item.imageUrl}
//                         alt={item.name}
//                         className="hover:scale-105 transition-all duration-300 md:h-72"
//                       />
//                     </figure>
//                     <div className="p-4">
//                       <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.recipeName}</h3>
//                       <p className="text-gray-700 mb-2">{item.recipeDetails}</p>
//                       <p className="text-green-600 font-bold mb-4">
//                         ${item.price.toFixed(2)}
//                       </p>
//                       <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-black transition-colors duration-300">
//                         Add to cart
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {activeSection === 'customFood' && (
//             <div>
//               <h2 className="text-center text-2xl font-bold mb-6">Custom Food</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {customFoods.map((item) => (
//                   <div
//                     key={item._id}
//                     className="card bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
//                   >
//                     <figure>
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="hover:scale-105 transition-all duration-300 md:h-72"
//                       />
//                     </figure>
//                     <div className="p-4">
//                       <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.name}</h3>
//                       <p className="text-gray-700 mb-2">{item.notes}</p>
//                       <p className="text-green-600 font-bold mb-4">
//                         ${item.price}
//                       </p>
//                       <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-black transition-colors duration-300">
//                         Add to cart
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {activeSection === 'orders' && (
//             <div>
//               <h2 className="text-center text-2xl font-bold mb-6">Your Orders</h2>
//               <div className="overflow-x-auto">
//                 <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
//                   <thead>
//                     <tr className="bg-green text-white uppercase text-sm leading-normal">
//                       <th className="py-3 px-6 text-left">#</th>
//                       <th className="py-3 px-6 text-left">Order Date</th>
//                       <th className="py-3 px-6 text-left">Delivery Name</th>
//                       <th className="py-3 px-6 text-left">Price</th>
//                       <th className="py-3 px-6 text-left">Status</th>
//                       <th className="py-3 px-6 text-left">Action</th>
//                     </tr>
//                   </thead>
//                   <tbody className="text-gray-600 text-sm font-light">
//                     {orders.map((order, index) => (
//                       <tr key={order.transactionId} className="border-b border-gray-200 hover:bg-gray-100">
//                         <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
//                         <td className="py-3 px-6 text-left">{order.orderDate}</td>
//                         <td className="py-3 px-6 text-left">{order.transactionId}</td>
//                         <td className="py-3 px-6 text-left">${order.price}</td>
//                         <td className="py-3 px-6 text-left">
//                           <span className={`py-1 px-3 rounded-full text-xs ${
//                             order.status === 'completed' ? 'bg-green' : 
//                             order.status === 'pending' ? 'bg-yellow-500' : 'bg-red'
//                           } text-white`}>
//                             {order.status}
//                           </span>
//                         </td>
//                         <td className="py-3 px-6 text-left">
//                           <button className="text-green hover:text-black">
//                             Contact
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }














// import React, { useState, useEffect } from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import { FaUserCircle, FaPhone } from 'react-icons/fa';
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
//   const [customFoods, setCustomFoods] = useState([]);
//   const [orders, setOrders] = useState([]);
//   const [activeSection, setActiveSection] = useState('editProfile');
//   const [selectedOrder, setSelectedOrder] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const userId = localStorage.getItem('userID');
//         const token = localStorage.getItem('token');

//         if (!userId || !token) {
//           throw new Error('User ID or token not found in local storage');
//         }

//         const response = await axios.get(`http://localhost:4000/api/users/profile/${userId}`, {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         });

//         setFormData({
//           name: response.data.user.name,
//           email: response.data.user.email,
//           password: '',
//           profilePhotoLink: response.data.user.image || '',
//         });

//         setCustomFoods(response.data.customFoods);

//         const favoritesResponse = await axios.get(
//           `http://localhost:4000/api/users/${userId}/favorites`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//             withCredentials: true,
//           }
//         );

//         setFavoriteItems(favoritesResponse.data);

//         // Fetch orders
//         const ordersResponse = await axios.get('http://localhost:4000/api/orders', {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         });

//         setOrders(ordersResponse.data);

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

//       await axios.put(`http://localhost:4000/api/users/profile/${userId}`, formData, {
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

//   const handleViewOrder = (order) => {
//     setSelectedOrder(order);
//     Swal.fire({
//       title: 'Order Details',
//       html: `
//         <p><strong>Order Date:</strong> ${order.orderDate}</p>
//         <p><strong>Transaction ID:</strong> ${order.transactionId}</p>
//         <p><strong>Price:</strong> $${order.price}</p>
//         <p><strong>Status:</strong> ${order.status}</p>
//         <p><strong>Delivery Name:</strong> ${order.deliveryInfo.name}</p>
//         <p><strong>Delivery Address:</strong> ${order.deliveryInfo.address}, ${order.deliveryInfo.city}, ${order.deliveryInfo.state} ${order.deliveryInfo.zipCode}</p>
//         <h3>Order Summary:</h3>
//         <ul>
//           ${order.orderSummary.items.map(item => `
//             <li>${item.name} - Quantity: ${item.quantity}, Price: $${item.price.toFixed(2)}</li>
//           `).join('')}
//         </ul>
//         <p><strong>Total Items:</strong> ${order.orderSummary.itemCount}</p>
//         <p><strong>Total Price:</strong> $${order.orderSummary.totalPrice.toFixed(2)}</p>
//       `,
//       confirmButtonText: 'Close',
//     });
//   };

//   const handleContactDriver = (order) => {
//     if (order.assignedDriver && order.assignedDriver.phone) {
//       window.location.href = `tel:${order.assignedDriver.phone}`;
//     } else {
//       Swal.fire({
//         icon: 'info',
//         title: 'No driver assigned yet',
//         text: 'The driver has not been assigned to this order or their contact information is not available.',
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
//         <div className="w-full max-w-6xl bg-white shadow-md rounded-md p-6 mt-20">
//           <div className="flex justify-center space-x-4 mb-6">
//             <button
//               onClick={() => setActiveSection('editProfile')}
//               className={`px-4 py-2 rounded-md ${
//                 activeSection === 'editProfile' ? 'bg-green text-white' : 'bg-gray-200 text-gray-700'
//               }`}
//             >
//               Edit Profile
//             </button>
//             <button
//               onClick={() => setActiveSection('favoriteFood')}
//               className={`px-4 py-2 rounded-md ${
//                 activeSection === 'favoriteFood' ? 'bg-green text-white' : 'bg-gray-200 text-gray-700'
//               }`}
//             >
//               Favorite Food
//             </button>
//             <button
//               onClick={() => setActiveSection('customFood')}
//               className={`px-4 py-2 rounded-md ${
//                 activeSection === 'customFood' ? 'bg-green text-white' : 'bg-gray-200 text-gray-700'
//               }`}
//             >
//               Custom Food
//             </button>
//             <button
//               onClick={() => setActiveSection('orders')}
//               className={`px-4 py-2 rounded-md ${
//                 activeSection === 'orders' ? 'bg-green text-white' : 'bg-gray-200 text-gray-700'
//               }`}
//             >
//               Orders
//             </button>
//           </div>

//           {activeSection === 'editProfile' && (
//             <div className="w-full max-w-md mx-auto">
//               <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">Edit Profile</h3>

//               <div className="flex justify-center mb-4">
//                 <label htmlFor="profilePhoto" className="flex flex-col items-center cursor-pointer">
//                   {formData.profilePhotoLink ? (
//                     <img
//                       src={formData.profilePhotoLink}
//                       alt="Profile"
//                       className="w-24 h-24 rounded-full object-cover"
//                     />
//                   ) : (
//                     <FaUserCircle size={100} className="text-green" />
//                   )}
//                   <input
//                     type="file"
//                     id="profilePhoto"
//                     className="hidden"
//                     onChange={handleFileChange}
//                   />
//                 </label>
//               </div>

//               <form className="space-y-4" onSubmit={handleSubmit}>
//                 <div className="relative">
//                   <label htmlFor="name" className="block text-sm font-medium mb-1">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//                     placeholder="Your Name"
//                   />
//                 </div>

//                 <div className="relative">
//                   <label htmlFor="email" className="block text-sm font-medium mb-1">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//                     placeholder="Email"
//                   />
//                 </div>

//                 <div className="relative">
//                   <label htmlFor="password" className="block text-sm font-medium mb-1">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//                     placeholder="Enter a new password to change"
//                   />
//                 </div>

//                 <label htmlFor="profilePhotoLink" className="block text-sm font-medium mb-1">
//                   Profile Photo Link
//                 </label>
//                 <input
//                   type="text"
//                   id="profilePhotoLink"
//                   value={formData.profilePhotoLink}
//                   onChange={handleChange}
//                   className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//                   placeholder="Profile Photo Link"
//                 />

//                 <button
//                   type="submit"
//                   className="w-full bg-green text-white py-2 rounded-md hover:bg-black"
//                 >
//                   Update
//                 </button>
//               </form>
//             </div>
//           )}

//           {activeSection === 'favoriteFood' && (
//             <div>
//               <h2 className="text-center text-2xl font-bold mb-6">Favorite Food</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {favoriteItems.map((item) => (
//                   <div
//                     key={item._id}
//                     className="card bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
//                   >
//                     <figure>
//                       <img
//                         src={item.imageUrl}
//                         alt={item.name}
//                         className="hover:scale-105 transition-all duration-300 md:h-72"
//                       />
//                     </figure>
//                     <div className="p-4">
//                       <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.recipeName}</h3>
//                       <p className="text-gray-700 mb-2">{item.recipeDetails}</p>
//                       <p className="text-green-600 font-bold mb-4">
//                         ${item.price.toFixed(2)}
//                       </p>
//                       <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-black transition-colors duration-300">
//                         Add to cart
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {activeSection === 'customFood' && (
//             <div>
//               <h2 className="text-center text-2xl font-bold mb-6">Custom Food</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {customFoods.map((item) => (
//                   <div
//                     key={item._id}
//                     className="card bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
//                   >
//                     <figure>
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="hover:scale-105 transition-all duration-300 md:h-72"
//                       />
//                     </figure>
//                     <div className="p-4">
//                       <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.name}</h3>
//                       <p className="text-gray-700 mb-2">{item.notes}</p>
//                       <p className="text-green-600 font-bold mb-4">
//                         ${item.price}
//                       </p>
//                       <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-black transition-colors duration-300">
//                         Add to cart
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {activeSection === 'orders' && (
//             <div>
//               <h2 className="text-center text-2xl font-bold mb-6">Your Orders</h2>
//               <div className="overflow-x-auto">
//                 <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
//                   <thead>
//                     <tr className="bg-green text-white uppercase text-sm leading-normal">
//                       <th className="py-3 px-6 text-left">#</th>
//                       <th className="py-3 px-6 text-left">Order Date</th>
//                       <th className="py-3 px-6 text-left">Delivery Name</th>
//                       <th className="py-3 px-6 text-left">Price</th>
//                       <th className="py-3 px-6 text-left">Status</th>
//                       <th className="py-3 px-6 text-left">Action</th>
//                     </tr>
//                   </thead>
//                   <tbody className="text-gray-600 text-sm font-light">
//                     {orders.map((order, index) => (
//                       <tr key={order.transactionId} className="border-b border-gray-200 hover:bg-gray-100">
//                       <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
//                         <td className="py-3 px-6 text-left">{order.orderDate}</td>
//                         <td className="py-3 px-6 text-left">{order.deliveryInfo.name}</td>
//                         <td className="py-3 px-6 text-left">${order.price}</td>
//                         <td className="py-3 px-6 text-left">
//                           <span className={`py-1 px-3 rounded-full text-xs ${
//                             order.status === 'completed' ? 'bg-green' : 
//                             order.status === 'pending' ? 'bg-yellow-500' : 'bg-red'
//                           } text-white`}>
//                             {order.status}
//                           </span>
//                         </td>
//                         <td className="py-3 px-6 text-left">
//                           <button 
//                             onClick={() => handleViewOrder(order)}
//                             className="text-blue-600 hover:text-blue-800 mr-2"
//                           >
//                             View
//                           </button>
//                           <button 
//                             onClick={() => handleContactDriver(order)}
//                             className="text-green hover:text-black flex items-center"
//                           >
//                             <FaPhone className="mr-1" /> Contact
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }





// import React, { useState, useEffect } from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import { FaUserCircle, FaPhone } from 'react-icons/fa';
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
//   const [customFoods, setCustomFoods] = useState([]);
//   const [orders, setOrders] = useState([]);
//   const [activeSection, setActiveSection] = useState('editProfile');
//   const [selectedOrder, setSelectedOrder] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const userId = localStorage.getItem('userID');
//         const token = localStorage.getItem('token');

//         if (!userId || !token) {
//           throw new Error('User ID or token not found in local storage');
//         }

//         const response = await axios.get(`http://localhost:4000/api/users/profile/${userId}`, {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         });

//         setFormData({
//           name: response.data.user.name,
//           email: response.data.user.email,
//           password: '',
//           profilePhotoLink: response.data.user.image || '',
//         });

//         setCustomFoods(response.data.customFoods);

//         const favoritesResponse = await axios.get(
//           `http://localhost:4000/api/users/${userId}/favorites`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//             withCredentials: true,
//           }
//         );

//         setFavoriteItems(favoritesResponse.data);

//         // Fetch orders
//         const ordersResponse = await axios.get('http://localhost:4000/api/orders', {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         });

//         setOrders(ordersResponse.data);

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

//       await axios.put(`http://localhost:4000/api/users/profile/${userId}`, formData, {
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

//   const handleViewOrder = (order) => {
//     setSelectedOrder(order);
//     Swal.fire({
//       title: 'Order Details',
//       html: `
//         <p><strong>Order Date:</strong> ${order.orderDate}</p>
        
//         <p><strong>Price:</strong> $${order.price}</p>
//         <p><strong>Status:</strong> ${order.status}</p>
//         <p><strong>Delivery Name:</strong> ${order.deliveryInfo.name}</p>
//         <p><strong>Delivery Address:</strong> ${order.deliveryInfo.address}, ${order.deliveryInfo.city}, ${order.deliveryInfo.state} ${order.deliveryInfo.zipCode}</p>
//         <h3>Order Summary:</h3>
//         <ul>
//           ${order.orderSummary.items.map(item => `
//             <li>${item.name} - Quantity: ${item.quantity}, Price: $${item.price.toFixed(2)}</li>
//           `).join('')}
//         </ul>
//         <p><strong>Total Items:</strong> ${order.orderSummary.itemCount}</p>
//         <p><strong>Total Price:</strong> $${order.orderSummary.totalPrice.toFixed(2)}</p>
//       `,
//       confirmButtonText: 'Close',
//     });
//   };

//   const handleContactDriver = (order) => {
//     if (order.assignedDriver && order.assignedDriver.phone) {
//       const phoneNumber = order.assignedDriver.phone;
      
//       // Check if the app is running on a mobile device
//       if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//         // If on a mobile device, use the tel: protocol
//         window.location.href = `tel:${phoneNumber}`;
//       } else {
//         // If on a desktop, show the phone number in a modal
//         Swal.fire({
//           title: 'Driver Contact',
//           html: `
//             <p>Please call the driver at:</p>
//             <h2 class="text-xl font-bold">${phoneNumber}</h2>
//           `,
//           icon: 'info',
//           confirmButtonText: 'OK'
//         });
//       }
//     } else {
//       Swal.fire({
//         icon: 'info',
//         title: 'No driver assigned yet',
//         text: 'The driver has not been assigned to this order or their contact information is not available.',
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
//         <div className="w-full max-w-6xl bg-white shadow-md rounded-md p-6 mt-20">
//           <div className="flex justify-center space-x-4 mb-6">
//             <button
//               onClick={() => setActiveSection('editProfile')}
//               className={`px-4 py-2 rounded-md ${
//                 activeSection === 'editProfile' ? 'bg-green text-white' : 'bg-gray-200 text-gray-700'
//               }`}
//             >
//               Edit Profile
//             </button>
//             <button
//               onClick={() => setActiveSection('favoriteFood')}
//               className={`px-4 py-2 rounded-md ${
//                 activeSection === 'favoriteFood' ? 'bg-green text-white' : 'bg-gray-200 text-gray-700'
//               }`}
//             >
//               Favorite Food
//             </button>
//             <button
//               onClick={() => setActiveSection('customFood')}
//               className={`px-4 py-2 rounded-md ${
//                 activeSection === 'customFood' ? 'bg-green text-white' : 'bg-gray-200 text-gray-700'
//               }`}
//             >
//               Custom Food
//             </button>
//             <button
//               onClick={() => setActiveSection('orders')}
//               className={`px-4 py-2 rounded-md ${
//                 activeSection === 'orders' ? 'bg-green text-white' : 'bg-gray-200 text-gray-700'
//               }`}
//             >
//               Orders
//             </button>
//           </div>

//           {activeSection === 'editProfile' && (
//             <div className="w-full max-w-md mx-auto">
//               <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">Edit Profile</h3>

//               <div className="flex justify-center mb-4">
//                 <label htmlFor="profilePhoto" className="flex flex-col items-center cursor-pointer">
//                   {formData.profilePhotoLink ? (
//                     <img
//                       src={formData.profilePhotoLink}
//                       alt="Profile"
//                       className="w-24 h-24 rounded-full object-cover"
//                     />
//                   ) : (
//                     <FaUserCircle size={100} className="text-green" />
//                   )}
//                   <input
//                     type="file"
//                     id="profilePhoto"
//                     className="hidden"
//                     onChange={handleFileChange}
//                   />
//                 </label>
//               </div>

//               <form className="space-y-4" onSubmit={handleSubmit}>
//                 <div className="relative">
//                   <label htmlFor="name" className="block text-sm font-medium mb-1">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//                     placeholder="Your Name"
//                   />
//                 </div>

//                 <div className="relative">
//                   <label htmlFor="email" className="block text-sm font-medium mb-1">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//                     placeholder="Email"
//                   />
//                 </div>

//                 <div className="relative">
//                   <label htmlFor="password" className="block text-sm font-medium mb-1">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//                     placeholder="Enter a new password to change"
//                   />
//                 </div>

//                 <label htmlFor="profilePhotoLink" className="block text-sm font-medium mb-1">
//                   Profile Photo Link
//                 </label>
//                 <input
//                   type="text"
//                   id="profilePhotoLink"
//                   value={formData.profilePhotoLink}
//                   onChange={handleChange}
//                   className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
//                   placeholder="Profile Photo Link"
//                 />

//                 <button
//                   type="submit"
//                   className="w-full bg-green text-white py-2 rounded-md hover:bg-black"
//                 >
//                   Update
//                 </button>
//               </form>
//             </div>
//           )}

//           {activeSection === 'favoriteFood' && (
//             <div>
//               <h2 className="text-center text-2xl font-bold mb-6">Favorite Food</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {favoriteItems.map((item) => (
//                   <div
//                     key={item._id}
//                     className="card bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
//                   >
//                     <figure>
//                       <img
//                         src={item.imageUrl}
//                         alt={item.name}
//                         className="hover:scale-105 transition-all duration-300 md:h-72"
//                       />
//                     </figure>
//                     <div className="p-4">
//                       <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.recipeName}</h3>
//                       <p className="text-gray-700 mb-2">{item.recipeDetails}</p>
//                       <p className="text-green-600 font-bold mb-4">
//                         ${item.price.toFixed(2)}
//                       </p>
//                       <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-black transition-colors duration-300">
//                         Add to cart
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {activeSection === 'customFood' && (
//             <div>
//               <h2 className="text-center text-2xl font-bold mb-6">Custom Food</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {customFoods.map((item) => (
//                   <div
//                     key={item._id}
//                     className="card bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
//                   >
//                     <figure>
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="hover:scale-105 transition-all duration-300 md:h-72"
//                       />
//                     </figure>
//                     <div className="p-4">
//                       <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.name}</h3>
//                       <p className="text-gray-700 mb-2">{item.notes}</p>
//                       <p className="text-green-600 font-bold mb-4">
//                         ${item.price}
//                       </p>
//                       <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-black transition-colors duration-300">
//                         Add to cart
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {activeSection === 'orders' && (
//             <div>
//               <h2 className="text-center text-2xl font-bold mb-6">Your Orders</h2>
//               <div className="overflow-x-auto">
//                 <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
//                   <thead><tr className="bg-green text-white uppercase text-sm leading-normal">
//                       <th className="py-3 px-6 text-left">#</th>
//                       <th className="py-3 px-6 text-left">Order Date</th>
//                       <th className="py-3 px-6 text-left">Delivery Name</th>
//                       <th className="py-3 px-6 text-left">Price</th>
//                       <th className="py-3 px-6 text-left">Status</th>
//                       <th className="py-3 px-6 text-left">Action</th>
//                     </tr>
//                   </thead>
//                   <tbody className="text-gray-600 text-sm font-light">
//                     {orders.map((order, index) => (
//                       <tr key={order.transactionId} className="border-b border-gray-200 hover:bg-gray-100">
//                         <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
//                         <td className="py-3 px-6 text-left">{order.orderDate}</td>
//                         <td className="py-3 px-6 text-left">{order.deliveryInfo.name}</td>
//                         <td className="py-3 px-6 text-left">${order.price}</td>
//                         <td className="py-3 px-6 text-left">
//                           <span className={`py-1 px-3 rounded-full text-xs ${
//                             order.status === 'completed' ? 'bg-green' : 
//                             order.status === 'pending' ? 'bg-yellow-500' : 'bg-red'
//                           } text-white`}>
//                             {order.status}
//                           </span>
//                         </td>
//                         <td className="py-3 px-6 text-left">
//                           <button 
//                             onClick={() => handleViewOrder(order)}
//                             className="text-blue-600 hover:text-blue-800 mr-2"
//                           >
//                             View
//                           </button>
//                           <button 
//                             onClick={() => handleContactDriver(order)}
//                             className="text-green hover:text-black flex items-center"
//                           >
//                             <FaPhone className="mr-1" /> Contact
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }












import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaUserCircle, FaPhone } from 'react-icons/fa';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useCart } from '../context/CartContext';

export default function Profile() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    profilePhotoLink: '',
  });
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [customFoods, setCustomFoods] = useState([]);
  const [orders, setOrders] = useState([]);
  const [activeSection, setActiveSection] = useState('editProfile');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const { updateCartCount } = useCart();
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userID');

    if (!token || !userId) {
      navigate('/login');
      return;
    }

   
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/users/profile/${userId}`, {
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

        const favoritesResponse = await axios.get(
          `http://localhost:4000/api/users/${userId}/favorites`,
          {
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: true,
          }
        );

        setFavoriteItems(favoritesResponse.data);

        const ordersResponse = await axios.get('http://localhost:4000/api/orders', {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });

        setOrders(ordersResponse.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
        if (error.response?.status === 401) {
          localStorage.removeItem('token');
          localStorage.removeItem('userID');
          navigate('/login');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error fetching profile',
            text: 'Failed to load user data. Please try again later.',
          });
        }
      }
    };

    fetchProfile();
  }, [navigate]);


  const handleAddToCart = async (itemId) => {
    try {
      const userId = localStorage.getItem('userID');
      const token = localStorage.getItem('token');
      
      if (!userId || !token) {
        console.error('User ID or token not found');
        return;
      }

      const response = await axios.post(
        `http://localhost:4000/api/cart/add`,
        { itemId, quantity: 1 },
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true
        }
      );

      if (response.status === 200) {
        // Fetch updated cart count
        const countResponse = await axios.get('http://localhost:4000/api/cart/count', {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true
        });
        
        // Update the cart count in context
        updateCartCount(countResponse.data.count);

        const addedItem = items.find(item => item._id === itemId);
        const itemName = addedItem ? addedItem.recipeName : 'Item';

        Swal.fire({
          title: 'Added to Cart!',
          text: `${itemName} added to cart successfully`,
          icon: 'success',
          confirmButtonColor: '#4CAF50',
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false
        });
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to add item to cart. Please try again.',
        icon: 'error',
        confirmButtonColor: '#4CAF50',
      });
    }
  };


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
        navigate('/login');
        return;
      }

      await axios.put(`http://localhost:4000/api/users/profile/${userId}`, formData, {
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
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('userID');
        navigate('/login');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Failed to update profile',
          text: error.response?.data?.message || 'An error occurred',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    Swal.fire({
      title: 'Order Details',
      html: `
        <p><strong>Order Date:</strong> ${order.orderDate}</p>
        <p><strong>Price:</strong> $${order.price}</p>
        <p><strong>Status:</strong> ${order.status}</p>
        <p><strong>Delivery Name:</strong> ${order.deliveryInfo.name}</p>
        <p><strong>Delivery Address:</strong> ${order.deliveryInfo.address}, ${order.deliveryInfo.city}, ${order.deliveryInfo.state} ${order.deliveryInfo.zipCode}</p>
        <h3>Order Summary:</h3>
        <ul>
          ${order.orderSummary.items.map(item => `
            <li>${item.name} - Quantity: ${item.quantity}, Price: $${item.price.toFixed(2)}</li>
          `).join('')}
        </ul>
        <p><strong>Total Items:</strong> ${order.orderSummary.itemCount}</p>
        <p><strong>Total Price:</strong> $${order.orderSummary.totalPrice.toFixed(2)}</p>
      `,
      confirmButtonText: 'Close',
    });
  };

  const handleContactDriver = (order) => {
    if (order.assignedDriver && order.assignedDriver.phone) {
      const phoneNumber = order.assignedDriver.phone;
      
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.location.href = `tel:${phoneNumber}`;
      } else {
        Swal.fire({
          title: 'Driver Contact',
          html: `
            <p>Please call the driver at:</p>
            <h2 class="text-xl font-bold">${phoneNumber}</h2>
          `,
          icon: 'info',
          confirmButtonText: 'OK'
        });
      }
    } else {
      Swal.fire({
        icon: 'info',
        title: 'No driver assigned yet',
        text: 'The driver has not been assigned to this order or their contact information is not available.',
      });
    }
  };

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen flex justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green"></div>
        </div>
        <Footer />
      </div>
    );
  }

  // Check for token before rendering the profile content
  const token = localStorage.getItem('token');
  if (!token) {
    navigate('/login');
    return null;
  }

  return (
    <div className="p-4 md:p-8">
      <Navbar />

      <div className="flex flex-col justify-center items-center min-h-screen space-y-8">
        <div className="w-full max-w-6xl bg-white shadow-md rounded-md p-6 mt-20">
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={() => setActiveSection('editProfile')}
              className={`px-4 py-2 rounded-md ${
                activeSection === 'editProfile' ? 'bg-green text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              Edit Profile
            </button>
            <button
              onClick={() => setActiveSection('favoriteFood')}
              className={`px-4 py-2 rounded-md ${
                activeSection === 'favoriteFood' ? 'bg-green text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              Favorite Food
            </button>
            <button
              onClick={() => setActiveSection('customFood')}
              className={`px-4 py-2 rounded-md ${
                activeSection === 'customFood' ? 'bg-green text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              Custom Food
            </button>
            <button
              onClick={() => setActiveSection('orders')}
              className={`px-4 py-2 rounded-md ${
                activeSection === 'orders' ? 'bg-green text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              Orders
            </button>
          </div>

          {activeSection === 'editProfile' && (
            <div className="w-full max-w-md mx-auto">
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
          )}

          {activeSection === 'favoriteFood' && (
            <div>
              <h2 className="text-center text-2xl font-bold mb-6">Favorite Food</h2>
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
                      <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-black transition-colors duration-300"
                        onClick={() => handleAddToCart(item._id)}>
                        Add to cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'customFood' && (
            <div>
              <h2 className="text-center text-2xl font-bold mb-6">Custom Food</h2>
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
                      <p className="text-green-600 font-bold mb-4">
                        ${item.price}
                      </p>
                      <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-black transition-colors duration-300">
                        Add to cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

{activeSection === 'orders' && (
            <div>
              <h2 className="text-center text-2xl font-bold mb-6">Your Orders</h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-green text-white uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-left">#</th>
                      <th className="py-3 px-6 text-left">Order Date</th>
                      <th className="py-3 px-6 text-left">Delivery Name</th>
                      <th className="py-3 px-6 text-left">Price</th>
                      <th className="py-3 px-6 text-left">Status</th>
                      <th className="py-3 px-6 text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-light">
                    {orders.map((order, index) => (
                      <tr key={order.transactionId} className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
                        <td className="py-3 px-6 text-left">{order.orderDate}</td>
                        <td className="py-3 px-6 text-left">{order.deliveryInfo.name}</td>
                        <td className="py-3 px-6 text-left">${order.price}</td>
                        <td className="py-3 px-6 text-left">
                          <span className={`py-1 px-3 rounded-full text-xs ${
                            order.status === 'completed' ? 'bg-green' : 
                            order.status === 'pending' ? 'bg-yellow-500' : 'bg-red'
                          } text-white`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-3 px-6 text-left">
                          <button 
                            onClick={() => handleViewOrder(order)}
                            className="text-blue-600 hover:text-blue-800 mr-2"
                          >
                            View
                          </button>
                          <button 
                            onClick={() => handleContactDriver(order)}
                            className="text-green hover:text-black flex items-center"
                          >
                            <FaPhone className="mr-1" /> Contact
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}