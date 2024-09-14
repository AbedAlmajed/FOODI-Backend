// import React, { useState } from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// export default function CustomFood() {
//   const [formData, setFormData] = useState({
//     name: '',
//     notes: '',
//     image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     if (type === 'file') {
//       setFormData({ ...formData, [name]: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form Data Submitted:', formData);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">
//       <Navbar />
//       <main className="flex-1 flex justify-center items-center p-6 mt-20">
//         <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-8">
//           <h1 className="text-3xl font-bold text-gray-9 mb-4 text-center">Add Custom Food</h1>
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             {/* Name Field */}
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">Food Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green sm:text-sm bg-white"
//                 placeholder="Enter food name"
//                 required
//               />
//             </div>

//             {/* Notes Field */}
//             <div>
//               <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
//               <textarea
//                 id="notes"
//                 name="notes"
//                 value={formData.notes}
//                 onChange={handleChange}
//                 rows="4"
//                 className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green sm:text-sm bg-white"
//                 placeholder="Add any notes about the food"
//               ></textarea>
//             </div>

//             {/* Image Upload */}
//             <div>
//               <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Image</label>
//               <input
//                 type="file"
//                 id="image"
//                 name="image"
//                 accept="image/*"
//                 onChange={handleChange}
//                 className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-lg file:text-sm file:font-medium hover:file:bg-black file:bg-green"
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-green text-white py-3 px-6 rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-2 "
//             >
//               Add to Cart
//             </button>
//           </form>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';

// export default function CustomFood() {
//   const [formData, setFormData] = useState({
//     name: '',
//     notes: '',
//     image: null,
//   });

//   const [showWarning, setShowWarning] = useState(true);

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     if (type === 'file') {
//       setFormData({ ...formData, [name]: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form Data Submitted:', formData);
//   };

//   const handleWarningOk = () => {
//     setShowWarning(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">
//       <Navbar />
//       <main className="flex-1 flex justify-center items-center p-6 mt-20">
//         <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Add Custom Food</h1>
//           {/* Warning Modal */}
//           {showWarning && (
//             <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//               <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//                 <h2 className="text-xl font-semibold text-gray-800 mb-4">Reminder</h2>
//                 <p className="text-gray-700 mb-4">Please remember to submit your order at least two days in advance.</p>
//                 <button
//                   onClick={handleWarningOk}
//                   className="w-full bg-green text-white py-2 px-4 rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-2"
//                 >
//                   OK
//                 </button>
//               </div>
//             </div>
//           )}
//           <form className="space-y-6 mt-8" onSubmit={handleSubmit}>
//             {/* Name Field */}
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">Food Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green sm:text-sm bg-white"
//                 placeholder="Enter food name"
//                 required
//               />
//             </div>

//             {/* Notes Field */}
//             <div>
//               <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
//               <textarea
//                 id="notes"
//                 name="notes"
//                 value={formData.notes}
//                 onChange={handleChange}
//                 rows="4"
//                 className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green sm:text-sm bg-white"
//                 placeholder="Add any notes about the food"
//               ></textarea>
//             </div>

//             {/* Image Upload */}
//             <div>
//               <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Image</label>
//               <input
//                 type="file"
//                 id="image"
//                 name="image"
//                 accept="image/*"
//                 onChange={handleChange}
//                 className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-lg file:text-sm file:font-medium hover:file:bg-black file:bg-green"
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-green text-white py-3 px-6 rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-2"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }



// import React, { useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';

// export default function CustomFood() {
//   const [formData, setFormData] = useState({
//     name: '',
//     notes: '',
//     image: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/custom-food', formData);
      
//       if (response.status === 201) {
//         Swal.fire({
//           title: 'Success!',
//           text: 'Your custom food has been submitted for approval.',
//           icon: 'success',
//           confirmButtonText: 'OK'
//         });
//         setFormData({ name: '', notes: '', image: '' });
//       }
//     } catch (error) {
//       console.error('Error submitting custom food:', error);
//       Swal.fire({
//         title: 'Error!',
//         text: 'Failed to submit custom food. Please try again.',
//         icon: 'error',
//         confirmButtonText: 'OK'
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">
//       <Navbar />
//       <main className="flex-1 flex justify-center items-center p-6 mt-20">
//         <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Add Custom Food</h1>
//           <form className="space-y-6 mt-8" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">Food Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green sm:text-sm bg-white"
//                 placeholder="Enter food name"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
//               <textarea
//                 id="notes"
//                 name="notes"
//                 value={formData.notes}
//                 onChange={handleChange}
//                 rows="4"
//                 className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green sm:text-sm bg-white"
//                 placeholder="Add any notes about the food"
//               ></textarea>
//             </div>

//             <div>
//               <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
//               <input
//                 type="url"
//                 id="image"
//                 name="image"
//                 value={formData.image}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green sm:text-sm bg-white"
//                 placeholder="Enter image URL"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-green text-white py-3 px-6 rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-2"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';

// export default function CustomFood() {
//   const [formData, setFormData] = useState({
//     name: '',
//     notes: '',
//     image: '',
//   });
//   const [token, setToken] = useState('');
//   const [userId, setUserId] = useState('');

//   useEffect(() => {
//     const storedToken = localStorage.getItem('token');
//     const storedUserId = localStorage.getItem('userID');
//     if (storedToken && storedUserId) {
//       setToken(storedToken);
//       setUserId(storedUserId);
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/custom-food', 
//         { ...formData, userId },
//         { 
//           headers: { 
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json'
//           }
//         }
//       );
      
//       if (response.status === 201) {
//         Swal.fire({
//           title: 'Success!',
//           text: 'Your custom food has been submitted for approval.',
//           icon: 'success',
//           confirmButtonText: 'OK'
//         });
//         setFormData({ name: '', notes: '', image: '' });
//       }
//     } catch (error) {
//       console.error('Error submitting custom food:', error);
//       Swal.fire({
//         title: 'Error!',
//         text: error.response?.data?.message || 'Failed to submit custom food. Please try again.',
//         icon: 'error',
//         confirmButtonText: 'OK'
//       });
//     }
//   };

//   if (!token || !userId) {
//     return (
//       <div className="min-h-screen bg-gray-100 flex flex-col">
//         <Navbar />
//         <main className="flex-1 flex justify-center items-center">
//           <p className="text-xl">Please log in to submit a custom food.</p>
//         </main>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">
//       <Navbar />
//       <main className="flex-1 flex justify-center items-center p-6 mt-20">
//         <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Add Custom Food</h1>
//           <form className="space-y-6 mt-8" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">Food Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green sm:text-sm bg-white"
//                 placeholder="Enter food name"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
//               <textarea
//                 id="notes"
//                 name="notes"
//                 value={formData.notes}
//                 onChange={handleChange}
//                 rows="4"
//                 className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green sm:text-sm bg-white"
//                 placeholder="Add any notes about the food"
//               ></textarea>
//             </div>

//             <div>
//               <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
//               <input
//                 type="url"
//                 id="image"
//                 name="image"
//                 value={formData.image}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green sm:text-sm bg-white"
//                 placeholder="Enter image URL"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-green text-white py-3 px-6 rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-2"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function CustomFood() {
  const [formData, setFormData] = useState({
    name: '',
    notes: '',
    image: '',
  });
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('userID');
    if (storedToken && storedUserId) {
      setToken(storedToken);
      setUserId(storedUserId);
    }

    // Calculate the date when submissions should start
    const today = new Date();
    const startDate = new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000); // 2 days from today
    setCanSubmit(today >= startDate);

    if (!canSubmit) {
      setShowWarning(true);
    }
  }, [canSubmit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/custom-food', 
        { ...formData, userId },
        { 
          headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      
      if (response.status === 201) {
        Swal.fire({
          title: 'Success!',
          text: 'Your custom food has been submitted for approval.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        setFormData({ name: '', notes: '', image: '' });
      }
    } catch (error) {
      console.error('Error submitting custom food:', error);
      Swal.fire({
        title: 'Error!',
        text: error.response?.data?.message || 'Failed to submit custom food. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  const handleWarningOk = () => {
    setShowWarning(false);
  };

  if (!token || !userId) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <main className="flex-1 flex justify-center items-center">
          <p className="text-xl">Please log in to submit a custom food.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-1 flex justify-center items-center p-6 mt-20">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Add Custom Food</h1>
          <form className="space-y-6 mt-8" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Food Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green sm:text-sm bg-white"
                placeholder="Enter food name"
                required
              />
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green sm:text-sm bg-white"
                placeholder="Add any notes about the food"
              ></textarea>
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green sm:text-sm bg-white"
                placeholder="Enter image URL"
              />
            </div>

            {/* <button
              type="submit"
              className="w-full bg-green text-white py-3 px-6 rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-2"
              disabled={!canSubmit}
            >
              Send
            </button> */}

            
             <button
               type="submit"
               className="w-full bg-green text-white py-3 px-6 rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-2"
             >
               Send
             </button>
          </form>
        </div>
      </main>
      <Footer />

      {showWarning && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Reminder</h2>
            <p className="text-gray-700 mb-4">Please remember to submit your order at least two days in advance.</p>
            <button
              onClick={handleWarningOk}
              className="w-full bg-green text-white py-2 px-4 rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-2"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
