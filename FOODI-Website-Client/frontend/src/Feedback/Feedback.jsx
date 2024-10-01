// import React, { useState } from 'react';
// import { Star } from 'lucide-react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';

// const FeedbackForm = () => {
//   const [rating, setRating] = useState(0);
//   const [feedback, setFeedback] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:4000/api/feedback', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ rating, feedback,isApproved }),
//       });
//       if (response.ok) {
//         alert('Feedback submitted successfully!');
//         setRating(0);
//         setFeedback('');
//       } else {
//         alert('Failed to submit feedback. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error submitting feedback:', error);
//       alert('An error occurred. Please try again.');
//     }
//   };

//   return (
//    <>
//     <Navbar/>
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
//       <h2 className="text-2xl font-bold mb-4">Provide Your Feedback</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Rating
//           </label>
//           <div className="flex">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <Star
//                 key={star}
//                 size={24}
//                 onClick={() => setRating(star)}
//                 fill={star <= rating ? 'gold' : 'none'}
//                 stroke={star <= rating ? 'gold' : 'currentColor'}
//                 className="cursor-pointer"
//               />
//             ))}
//           </div>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="feedback" className="block text-gray-700 text-sm font-bold mb-2">
//             Feedback
//           </label>
//           <textarea
//             id="feedback"
//             value={feedback}
//             onChange={(e) => setFeedback(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             rows="4"
//             placeholder="Enter your feedback here"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Submit Feedback
//         </button>
//       </form>
//     </div>
//     <Footer/>
//    </>
//   );
// };

// export default FeedbackForm;




// import React, { useState, useEffect } from 'react';
// import { Star } from 'lucide-react';

// const FeedbackPage = () => {
//   const [rating, setRating] = useState(0);
//   const [feedback, setFeedback] = useState('');
//   const [isApproved, setisApproved] = useState(false);

//   const [feedbackEntries, setFeedbackEntries] = useState([]);

//   useEffect(() => {
//     fetchFeedback();
//   }, []);

//   const fetchFeedback = async () => {
//     try {
//       const response = await fetch('http://localhost:4000/api/feedback');
//       if (response.ok) {
//         const data = await response.json();
//         setFeedbackEntries(data);
//       } else {
//         console.error('Failed to fetch feedback');
//       }
//     } catch (error) {
//       console.error('Error fetching feedback:', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:4000/api/feedback', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ rating, feedback ,isApproved}),
//       });
//       if (response.ok) {
//         alert('Feedback submitted successfully!');
//         setRating(0);
//         setFeedback('');
//         fetchFeedback(); // Refresh the feedback list
//       } else {
//         alert('Failed to submit feedback. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error submitting feedback:', error);
//       alert('An error occurred. Please try again.');
//     }
//   };

//   const StarRating = ({ rating }) => (
//     <div className="flex">
//       {[1, 2, 3, 4, 5].map((star) => (
//         <Star
//           key={star}
//           size={16}
//           fill={star <= rating ? 'gold' : 'none'}
//           stroke={star <= rating ? 'gold' : 'currentColor'}
//         />
//       ))}
//     </div>
//   );

//   return (
//     <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
//       <h1 className="text-3xl font-bold mb-6">Feedback Page</h1>
      
//       {/* Feedback Submission Form */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-bold mb-4">Provide Your Feedback</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Rating
//             </label>
//             <div className="flex">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <Star
//                   key={star}
//                   size={24}
//                   onClick={() => setRating(star)}
//                   fill={star <= rating ? 'gold' : 'none'}
//                   stroke={star <= rating ? 'gold' : 'currentColor'}
//                   className="cursor-pointer"
//                 />
//               ))}
//             </div>
//           </div>
//           <div>
//             <label htmlFor="feedback" className="block text-gray-700 text-sm font-bold mb-2">
//               Feedback
//             </label>
//             <textarea
//               id="feedback"
//               value={feedback}
//               onChange={(e) => setFeedback(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               rows="4"
//               placeholder="Enter your feedback here"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Submit Feedback
//           </button>
//         </form>
//       </div>
      
//       {/* Feedback Entries List */}
//       <div>
//         <h2 className="text-2xl font-bold mb-4">Feedback Entries</h2>
//         {feedbackEntries.length > 0 ? (
//           <ul className="space-y-4">
//             {feedbackEntries.map((entry) => (
//               <li key={entry._id} className="border-b pb-4">
//                 <div className="flex justify-between items-center mb-2">
//                   <StarRating rating={entry.rating} />
//                   <span className="text-sm text-gray-500">
//                     {new Date(entry.createdAt).toLocaleDateString()}
//                   </span>
//                 </div>
//                 <p className="text-gray-700">{entry.feedback}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No feedback entries yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FeedbackPage;







// import React, { useState, useEffect } from 'react';
// import { Star } from 'lucide-react';

// const FeedbackPage = () => {
//   const [rating, setRating] = useState(0);
//   const [feedback, setFeedback] = useState('');
//   const [userFeedback, setUserFeedback] = useState(null);
//   const [approvedFeedbacks, setApprovedFeedbacks] = useState([]);

//   useEffect(() => {
//     fetchUserFeedback();
//     fetchApprovedFeedback();
//   }, []);

//   const fetchUserFeedback = async () => {
//     try {
//       const response = await fetch('http://localhost:4000/api/feedback/', {
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming you store the token in localStorage
//         }
//       });
//       if (response.ok) {
//         const data = await response.json();
//         setUserFeedback(data);
//       }
//     } catch (error) {
//       console.error('Error fetching user feedback:', error);
//     }
//   };

//   const fetchApprovedFeedback = async () => {
//     try {
//       const response = await fetch('http://localhost:4000/api/feedback/approved');
//       if (response.ok) {
//         const data = await response.json();
//         setApprovedFeedbacks(data);
//       }
//     } catch (error) {
//       console.error('Error fetching approved feedback:', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/feedback', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming you store the token in localStorage
//         },
//         body: JSON.stringify({ rating, feedback }),
//       });
//       if (response.ok) {
//         alert('Feedback submitted successfully and pending approval!');
//         setRating(0);
//         setFeedback('');
//         fetchUserFeedback(); // Refresh user's feedback
//       } else {
//         const errorData = await response.json();
//         alert(errorData.message || 'Failed to submit feedback. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error submitting feedback:', error);
//       alert('An error occurred. Please try again.');
//     }
//   };

//   const StarRating = ({ rating, editable = false }) => (
//     <div className="flex">
//       {[1, 2, 3, 4, 5].map((star) => (
//         <Star
//           key={star}
//           size={24}
//           onClick={() => editable && setRating(star)}
//           fill={star <= rating ? 'gold' : 'none'}
//           stroke={star <= rating ? 'gold' : 'currentColor'}
//           className={editable ? 'cursor-pointer' : ''}
//         />
//       ))}
//     </div>
//   );

//   return (
//     <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
//       <h1 className="text-3xl font-bold mb-6">Feedback Page</h1>
      
//       {userFeedback ? (
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold mb-4">Your Feedback</h2>
//           <div className="border p-4 rounded">
//             <StarRating rating={userFeedback.rating} />
//             <p className="mt-2">{userFeedback.feedback}</p>
//             <p className="mt-2 text-sm text-gray-500">
//               Status: {userFeedback.isApproved ? 'Approved' : 'Pending Approval'}
//             </p>
//           </div>
//         </div>
//       ) : (
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold mb-4">Provide Your Feedback</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 Rating
//               </label>
//               <StarRating rating={rating} editable={true} />
//             </div>
//             <div>
//               <label htmlFor="feedback" className="block text-gray-700 text-sm font-bold mb-2">
//                 Feedback
//               </label>
//               <textarea
//                 id="feedback"
//                 value={feedback}
//                 onChange={(e) => setFeedback(e.target.value)}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 rows="4"
//                 placeholder="Enter your feedback here"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Submit Feedback
//             </button>
//           </form>
//         </div>
//       )}
      
//       <div>
//         <h2 className="text-2xl font-bold mb-4">Approved Feedback</h2>
//         {approvedFeedbacks.length > 0 ? (
//           <ul className="space-y-4">
//             {approvedFeedbacks.map((entry) => (
//               <li key={entry._id} className="border-b pb-4">
//                 <StarRating rating={entry.rating} />
//                 <p className="mt-2">{entry.feedback}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No approved feedback entries yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FeedbackPage;




// import React, { useState, useEffect } from 'react';
// import { Star } from 'lucide-react';

// const FeedbackPage = () => {
//   const [rating, setRating] = useState(0);
//   const [feedback, setFeedback] = useState('');
//   const [feedbackEntries, setFeedbackEntries] = useState([]);

//   useEffect(() => {
//     fetchFeedback();
//   }, []);

//   const fetchFeedback = async () => {
//     try {
//       const response = await fetch('http://localhost:4000/api/feedback');
//       if (response.ok) {
//         const data = await response.json();
//         setFeedbackEntries(data);
//       } else {
//         console.error('Failed to fetch feedback');
//       }
//     } catch (error) {
//       console.error('Error fetching feedback:', error);
//     }
//   };


// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const response = await fetch('http://localhost:4000/api/feedback', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${localStorage.getItem('token')}`  // Send the JWT token if applicable
//       },
//       body: JSON.stringify({ rating, feedback })
//     });
//     if (response.ok) {
//       alert('Feedback submitted successfully! It will be visible once approved.');
//       setRating(0);
//       setFeedback('');
//       fetchFeedback(); // Refresh the feedback list
//     } else {
//       const data = await response.json();
//       alert(data.message || 'Failed to submit feedback. Please try again.');
//     }
//   } catch (error) {
//     console.error('Error submitting feedback:', error);
//     alert('An error occurred. Please try again.');
//   }
// };


//   return (
//     <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
//       <h1 className="text-3xl font-bold mb-6">Feedback Page</h1>
      
//       {/* Feedback Submission Form */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-bold mb-4">Provide Your Feedback</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Rating
//             </label>
//             <div className="flex">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <Star
//                   key={star}
//                   size={24}
//                   onClick={() => setRating(star)}
//                   fill={star <= rating ? 'gold' : 'none'}
//                   stroke={star <= rating ? 'gold' : 'currentColor'}
//                   className="cursor-pointer"
//                 />
//               ))}
//             </div>
//           </div>
//           <div>
//             <label htmlFor="feedback" className="block text-gray-700 text-sm font-bold mb-2">
//               Feedback
//             </label>
//             <textarea
//               id="feedback"
//               value={feedback}
//               onChange={(e) => setFeedback(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               rows="4"
//               placeholder="Enter your feedback here"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Submit Feedback
//           </button>
//         </form>
//       </div>
      
//       {/* Feedback Entries List */}
//       <div>
//         <h2 className="text-2xl font-bold mb-4">Feedback Entries</h2>
//         {feedbackEntries.length > 0 ? (
//           <ul className="space-y-4">
//             {feedbackEntries.map((entry) => (
//               <li key={entry._id} className="border-b pb-4">
//                 <div className="flex justify-between items-center mb-2">
//                   <StarRating rating={entry.rating} />
//                   <span className="text-sm text-gray-500">
//                     {new Date(entry.createdAt).toLocaleDateString()}
//                   </span>
//                 </div>
//                 <p className="text-gray-700">{entry.feedback}</p>
//                 <p className="text-sm text-gray-500">By: {entry.userId.name}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No feedback entries yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FeedbackPage;








// import React, { useState, useEffect } from 'react';
// import { Star } from 'lucide-react';

// const FeedbackPage = () => {
//   const [rating, setRating] = useState(0);
//   const [feedback, setFeedback] = useState('');
//   const [feedbackEntries, setFeedbackEntries] = useState([]);
//   const [userFeedback, setUserFeedback] = useState(null);

//   useEffect(() => {
//     fetchFeedback();
//     fetchUserFeedback();
//   }, []);

//   const fetchFeedback = async () => {
//     try {
//       const response = await fetch('http://localhost:4000/api/feedback');
//       if (response.ok) {
//         const data = await response.json();
//         setFeedbackEntries(data);
//       } else {
//         console.error('Failed to fetch feedback');
//       }
//     } catch (error) {
//       console.error('Error fetching feedback:', error);
//     }
//   };

//   const fetchUserFeedback = async () => {
//     try {
//       const response = await fetch('http://localhost:4000/api/feedback/user', {
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//       });
//       if (response.ok) {
//         const data = await response.json();
//         setUserFeedback(data);
//         if (data) {
//           setRating(data.rating);
//           setFeedback(data.feedback);
//         }
//       }
//     } catch (error) {
//       console.error('Error fetching user feedback:', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:4000/api/feedback', {
//         method: userFeedback ? 'PUT' : 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         },
//         body: JSON.stringify({ rating, feedback })
//       });
//       if (response.ok) {
//         alert(userFeedback ? 'Feedback updated successfully!' : 'Feedback submitted successfully! It will be visible once approved.');
//         fetchUserFeedback();
//       } else {
//         const data = await response.json();
//         alert(data.message || 'Failed to submit feedback. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error submitting feedback:', error);
//       alert('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
//       <h1 className="text-3xl font-bold mb-6">Feedback Page</h1>
      
//       {/* Feedback Submission Form */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-bold mb-4">
//           {userFeedback ? 'Update Your Feedback' : 'Provide Your Feedback'}
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Rating
//             </label>
//             <div className="flex">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <Star
//                   key={star}
//                   size={24}
//                   onClick={() => setRating(star)}
//                   fill={star <= rating ? 'gold' : 'none'}
//                   stroke={star <= rating ? 'gold' : 'currentColor'}
//                   className="cursor-pointer"
//                 />
//               ))}
//             </div>
//           </div>
//           <div>
//             <label htmlFor="feedback" className="block text-gray-700 text-sm font-bold mb-2">
//               Feedback
//             </label>
//             <textarea
//               id="feedback"
//               value={feedback}
//               onChange={(e) => setFeedback(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               rows="4"
//               placeholder="Enter your feedback here"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             {userFeedback ? 'Update Feedback' : 'Submit Feedback'}
//           </button>
//         </form>
//       </div>
      
//       {/* Feedback Entries List */}
//       <div>
//         <h2 className="text-2xl font-bold mb-4">Approved Feedback Entries</h2>
//         {feedbackEntries.length > 0 ? (
//           <ul className="space-y-4">
//             {feedbackEntries.map((entry) => (
//               <li key={entry._id} className="border-b pb-4">
//                 <div className="flex justify-between items-center mb-2">
//                   <div className="flex">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <Star
//                         key={star}
//                         size={16}
//                         fill={star <= entry.rating ? 'gold' : 'none'}
//                         stroke={star <= entry.rating ? 'gold' : 'currentColor'}
//                       />
//                     ))}
//                   </div>
//                   <span className="text-sm text-gray-500">
//                     {new Date(entry.createdAt).toLocaleDateString()}
//                   </span>
//                 </div>
//                 <p className="text-gray-700">{entry.feedback}</p>
//                 <p className="text-sm text-gray-500">By: {entry.userId.name}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No approved feedback entries yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FeedbackPage;








import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import Swal from 'sweetalert2';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const FeedbackPage = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [feedbackEntries, setFeedbackEntries] = useState([]);
  const [userFeedback, setUserFeedback] = useState(null);

  useEffect(() => {
    fetchFeedback();
    fetchUserFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/feedback');
      if (response.ok) {
        const data = await response.json();
        setFeedbackEntries(data);
      } else {
        console.error('Failed to fetch feedback');
      }
    } catch (error) {
      console.error('Error fetching feedback:', error);
    }
  };

  const fetchUserFeedback = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/feedback/user', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setUserFeedback(data);
        if (data) {
          setRating(data.rating);
          setFeedback(data.feedback);
        }
      }
    } catch (error) {
      console.error('Error fetching user feedback:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/feedback', {
        method: userFeedback ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ rating, feedback })
      });
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: userFeedback ? 'Feedback Updated!' : 'Feedback Submitted!',
          text: userFeedback ? 'Your feedback has been updated successfully.' : 'Your feedback has been submitted successfully and will be visible once approved.',
          confirmButtonColor: '#3085d6',
        });
        setRating(0);
        setFeedback('');
        fetchUserFeedback();
        fetchFeedback();
      } else {
        const data = await response.json();
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: data.message || 'Failed to submit feedback. Please try again.',
        });
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'An error occurred. Please try again.',
      });
    }
  };

//   return (
// <>
//    <div className="max-w-4xl mx-auto mt-20 p-6 bg-white rounded-lg shadow-xl">
//        <Navbar/>

//       <h1 className="text-3xl font-bold mb-6">Feedback Page</h1>
      
//       {/* Feedback Submission Form */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-bold mb-4">
//           {userFeedback ? 'Update Your Feedback' : 'Provide Your Feedback'}
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Rating
//             </label>
//             <div className="flex">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <Star
//                   key={star}
//                   size={24}
//                   onClick={() => setRating(star)}
//                   fill={star <= rating ? 'gold' : 'none'}
//                   stroke={star <= rating ? 'gold' : 'currentColor'}
//                   className="cursor-pointer"
//                 />
//               ))}
//             </div>
//           </div>
//           <div>
//             <label htmlFor="feedback" className="block text-gray-700 text-sm font-bold mb-2">
//               Feedback
//             </label>
//             <textarea
//               id="feedback"
//               value={feedback}
//               onChange={(e) => setFeedback(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               rows="4"
//               placeholder="Enter your feedback here"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             {userFeedback ? 'Update Feedback' : 'Submit Feedback'}
//           </button>
//         </form>
//       </div>
      
//       {/* Feedback Entries List */}
//       <div>
//         <h2 className="text-2xl font-bold mb-4">Approved Feedback Entries</h2>
//         {feedbackEntries.length > 0 ? (
//           <ul className="space-y-4">
//             {feedbackEntries.map((entry) => (
//               <li key={entry._id} className="border-b pb-4">
//                 <div className="flex justify-between items-center mb-2">
//                   <div className="flex">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <Star
//                         key={star}
//                         size={16}
//                         fill={star <= entry.rating ? 'gold' : 'none'}
//                         stroke={star <= entry.rating ? 'gold' : 'currentColor'}
//                       />
//                     ))}
//                   </div>
//                   <span className="text-sm text-gray-500">
//                     {new Date(entry.createdAt).toLocaleDateString()}
//                   </span>
//                 </div>
//                 <p className="text-gray-700">{entry.feedback}</p>
//                 <p className="text-sm text-gray-500">By: {entry.userId.name}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No approved feedback entries yet.</p>
//         )}
//       </div>
//       <Footer/>

//     </div>
// </>
//      );
return (
    <>
      <Navbar />
      
      <div className="max-w-4xl mx-auto mt-28 mb-10 p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold mb-6">Feedback Page</h1>
        
        {/* Feedback Submission Form */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            {userFeedback ? 'Update Your Feedback' : 'Provide Your Feedback'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Rating
              </label>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={24}
                    onClick={() => setRating(star)}
                    fill={star <= rating ? 'gold' : 'none'}
                    stroke={star <= rating ? 'gold' : 'currentColor'}
                    className="cursor-pointer"
                  />
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="feedback" className="block text-gray-700 text-sm font-bold mb-2">
                Feedback
              </label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="4"
                placeholder="Enter your feedback here"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {userFeedback ? 'Update Feedback' : 'Submit Feedback'}
            </button>
          </form>
        </div>
        
        {/* Feedback Entries List */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Approved Feedback Entries</h2>
          {feedbackEntries.length > 0 ? (
            <ul className="space-y-4">
              {feedbackEntries.map((entry) => (
                <li key={entry._id} className="border-b pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={16}
                          fill={star <= entry.rating ? 'gold' : 'none'}
                          stroke={star <= entry.rating ? 'gold' : 'currentColor'}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      {new Date(entry.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-700">{entry.feedback}</p>
                  <p className="text-sm text-gray-500">By: {entry.userId.name}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No approved feedback entries yet.</p>
          )}
        </div>
      </div>
    
      <Footer />
    </>
    );
    
};

export default FeedbackPage;