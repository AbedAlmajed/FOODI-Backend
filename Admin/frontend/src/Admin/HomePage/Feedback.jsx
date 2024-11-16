// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Sidebar from './Sidebar';

// const Feedback = () => {
//   const [feedbacks, setFeedbacks] = useState([]);

//   useEffect(() => {
//     fetchFeedbacks();
//   }, []);

//   const fetchFeedbacks = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/feedback');
//       setFeedbacks(res.data);
//     } catch (error) {
//       console.error('Error fetching feedback:', error);
//     }
//   };

//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       await axios.put(`http://localhost:5000/api/feedback/${id}`, { isApproved: newStatus });
//       fetchFeedbacks(); // Refresh the list after update
//     } catch (error) {
//       console.error('Error updating feedback status:', error);
//     }
//   };

//   return (
//    <>
//    <Sidebar/>
//    <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Feedback Table</h1>
//       <table className="min-w-full bg-white">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border-b">Username</th>
//             <th className="py-2 px-4 border-b">Rating</th>
//             <th className="py-2 px-4 border-b">Feedback</th>
//             <th className="py-2 px-4 border-b">Status</th>
//             <th className="py-2 px-4 border-b">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {feedbacks.map((feedback) => (
//             <tr key={feedback._id}>
//               <td className="py-2 px-4 border-b">{feedback.username}</td>
//               <td className="py-2 px-4 border-b">{feedback.rating}</td>
//               <td className="py-2 px-4 border-b">{feedback.feedback}</td>
//               <td className="py-2 px-4 border-b">
//                 {feedback.isApproved ? 'Approved' : 'Deleted'}
//               </td>
//               <td className="py-2 px-4 border-b">
//                 {feedback.isApproved ? (
//                   <button
//                     onClick={() => handleStatusChange(feedback._id, false)}
//                     className="bg-red text-white py-1 px-2 rounded"
//                   >
//                     Delete
//                   </button>
//                 ) : (
//                   <button
//                     onClick={() => handleStatusChange(feedback._id, true)}
//                     className="bg-green text-white py-1 px-2 rounded"
//                   >
//                     Restore
//                   </button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//    </>
//   );
// };

// export default Feedback;









// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Sidebar from './Sidebar';
// import Swal from 'sweetalert2';

// const Feedback = () => {
//   const [feedbacks, setFeedbacks] = useState([]);

//   useEffect(() => {
//     fetchFeedbacks();
//   }, []);

//   const fetchFeedbacks = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/feedback');
//       setFeedbacks(res.data);
//     } catch (error) {
//       console.error('Error fetching feedback:', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Failed to fetch feedback. Please try again later.',
//       });
//     }
//   };

//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       await axios.put(`http://localhost:5000/api/feedback/${id}`, { isApproved: newStatus });
//       fetchFeedbacks(); // Refresh the list after update
//       Swal.fire({
//         icon: 'success',
//         title: 'Success!',
//         text: `Feedback ${newStatus ? 'restored' : 'deleted'} successfully.`,
//         timer: 1500,
//         showConfirmButton: false,
//       });
//     } catch (error) {
//       console.error('Error updating feedback status:', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Failed to update feedback status. Please try again.',
//       });
//     }
//   };

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1 p-10">
//         <h1 className="text-3xl font-bold mb-6">Feedback Table</h1>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//             <thead className="bg-gray-200 text-gray-700">
//               <tr>
//                 <th className="py-3 px-4 text-left">Username</th>
//                 <th className="py-3 px-4 text-left">Rating</th>
//                 <th className="py-3 px-4 text-left">Feedback</th>
//                 <th className="py-3 px-4 text-left">Status</th>
//                 <th className="py-3 px-4 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {feedbacks.map((feedback) => (
//                 <tr key={feedback._id}>
//                   <td className="py-3 px-4">{feedback.username}</td>
//                   <td className="py-3 px-4">{feedback.rating}</td>
//                   <td className="py-3 px-4">{feedback.feedback}</td>
//                   <td className="py-3 px-4">
//                     <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${feedback.isApproved ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
//                       {feedback.isApproved ? 'Approved' : 'Deleted'}
//                     </span>
//                   </td>
//                   <td className="py-3 px-4">
//                     {feedback.isApproved ? (
//                       <button
//                         onClick={() => handleStatusChange(feedback._id, false)}
//                         className="bg-red hover:bg-red text-white font-bold py-1 px-3 rounded text-xs"
//                       >
//                         Delete
//                       </button>
//                     ) : (
//                       <button
//                         onClick={() => handleStatusChange(feedback._id, true)}
//                         className="bg-green hover:bg-black text-white font-bold py-1 px-3 rounded text-xs"
//                       >
//                         Restore
//                       </button>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Feedback;









// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Sidebar from './Sidebar';
// import Swal from 'sweetalert2';

// const Feedback = () => {
//   const [feedbacks, setFeedbacks] = useState([]);

//   useEffect(() => {
//     fetchFeedbacks();
//   }, []);

//   const fetchFeedbacks = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/feedback');
//       setFeedbacks(res.data);
//     } catch (error) {
//       console.error('Error fetching feedback:', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Failed to fetch feedback. Please try again later.',
//       });
//     }
//   };

//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       await axios.put(`http://localhost:5000/api/feedback/${id}`, { isApproved: newStatus });
//       fetchFeedbacks(); // Refresh the list after update
//       Swal.fire({
//         icon: 'success',
//         title: 'Success!',
//         text: `Feedback ${newStatus ? 'restored' : 'deleted'} successfully.`,
//         timer: 1500,
//         showConfirmButton: false,
//       });
//     } catch (error) {
//       console.error('Error updating feedback status:', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Failed to update feedback status. Please try again.',
//       });
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Sidebar />
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
//           <div className="container mx-auto px-6 py-8">
//             <h1 className="text-3xl font-bold text-gray-700 mb-6">Feedback Table</h1>
//             <div className="bg-white shadow-md rounded-lg overflow-hidden">
//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
//                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
//                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feedback</th>
//                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {feedbacks.map((feedback) => (
//                       <tr key={feedback._id}>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{feedback.name}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{feedback.rating}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{feedback.feedback}</td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${feedback.isApproved ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
//                             {feedback.isApproved ? 'Approved' : 'Deleted'}
//                           </span>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                           {feedback.isApproved ? (
//                             <button
//                               onClick={() => handleStatusChange(feedback._id, false)}
//                               className="bg-red hover:bg-red-dark text-white font-bold py-1 px-3 rounded text-xs"
//                             >
//                               Delete
//                             </button>
//                           ) : (
//                             <button
//                               onClick={() => handleStatusChange(feedback._id, true)}
//                               className="bg-green hover:bg-green-dark text-white font-bold py-1 px-3 rounded text-xs"
//                             >
//                               Restore
//                             </button>
//                           )}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Feedback;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Swal from 'sweetalert2';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/feedback');
      setFeedbacks(res.data);
    } catch (error) {
      console.error('Error fetching feedback:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to fetch feedback. Please try again later.',
      });
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/feedback/${id}`, { isApproved: newStatus });
      fetchFeedbacks(); // Refresh the list after update
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: `Feedback ${newStatus ? 'restored' : 'deleted'} successfully.`,
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error('Error updating feedback status:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to update feedback status. Please try again.',
      });
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-700 mb-6">Feedback </h1>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>

                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feedback</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {feedbacks.map((feedback) => (
                      <tr key={feedback._id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{feedback.userId?.name ? feedback.userId.name  : null}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
  <img className="rounded-full w-10 h-10" src={feedback.userId?.image?feedback.userId.image:null} alt="User Image" />
</td>

                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{feedback.rating}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{feedback.feedback}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${feedback.isApproved ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {feedback.isApproved ? 'Approved' : 'Deleted'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {feedback.isApproved ? (
                            <button
                              onClick={() => handleStatusChange(feedback._id, false)}
                              className="bg-red hover:bg-red text-white font-bold py-1 px-3 rounded text-xs"
                            >
                              Delete
                            </button>
                          ) : (
                            <button
                              onClick={() => handleStatusChange(feedback._id, true)}
                              className="bg-green hover:bg-green text-white font-bold py-1 px-3 rounded text-xs"
                            >
                              Restore
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Feedback;