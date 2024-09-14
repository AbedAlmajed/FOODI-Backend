

// import React, { useState, useEffect, useRef } from 'react';
// import { Trash, Reply } from 'lucide-react';
// import Sidebar from './Sidebar';
// import axios from 'axios';
// import { motion, AnimatePresence } from 'framer-motion';
// import Swal from 'sweetalert2'; 

// const ITEMS_PER_PAGE = 5;

// const CustomerSupport = () => {
//   const [contacts, setContacts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalContacts, setTotalContacts] = useState(0);
//   const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);
//   const [currentContact, setCurrentContact] = useState(null);
//   const [response, setResponse] = useState('');
//   const textareaRef = useRef(null);

//   useEffect(() => {
//     fetchContacts();
//     fetchTotalContacts();
//   }, [currentPage]);

//   useEffect(() => {
//     if (textareaRef.current) {
//       textareaRef.current.focus();
//     }
//   }, [isReplyModalOpen]);

//   const fetchContacts = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/contacts?page=${currentPage}&limit=${ITEMS_PER_PAGE}`);
//       setContacts(response.data);
//     } catch (error) {
//       console.error('Error fetching contacts:', error);
//     }
//   };

//   const fetchTotalContacts = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/contacts/messages/count');
//       setTotalContacts(response.data.count);
//     } catch (error) {
//       console.error('Error fetching total contacts:', error);
//     }
//   };

//   const totalPages = Math.ceil(totalContacts / ITEMS_PER_PAGE);

//   const handlePrevPage = () => {
//     setCurrentPage((prev) => Math.max(prev - 1, 1));
//   };

//   const handleNextPage = () => {
//     setCurrentPage((prev) => Math.min(prev + 1, totalPages));
//   };

//   const handleReply = (contact) => {
//     setCurrentContact(contact);
//     setIsReplyModalOpen(true);
//   };

//   const handleSendReply = async () => {
//     try {
//       await axios.put('http://localhost:5000/api/contacts/respond', {
//         contactId: currentContact._id,
//         response: response
//       });
//       setIsReplyModalOpen(false);
//       setResponse('');
//       fetchContacts(); 

//       Swal.fire({
//         icon: 'success',
//         title: 'Reply Sent',
//         text: 'Your response has been sent successfully.',
//         confirmButtonColor: '#a0785d'
//       });

//     } catch (error) {
//       console.error('Error sending reply:', error);
//     }
//   };

//   const ReplyModal = ({ contact, onClose }) => {
//     if (!contact) return null;
    
//     return (
//       <motion.div 
//         className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
//         initial={{ opacity: 0 }} 
//         animate={{ opacity: 1 }} 
//         exit={{ opacity: 0 }}
//       >
//         <motion.div 
//           className="bg-[#f8f4f0] p-8 rounded-lg shadow-lg max-w-lg w-full"
//           initial={{ y: 0, opacity: 1 }} 
//           animate={{ y: 0, opacity: 1 }} 
//           transition={{ duration: 0.5 }}
//         >
//           <h3 className="text-3xl font-semibold mb-6 text-gray-800">Reply to {contact.name}</h3>
//           <p className="text-lg mb-4">Email: {contact.email}</p>
//           <label className="block text-gray-600 mb-2">Response:</label>
//           <textarea
//             ref={textareaRef}
//             value={response}
//             onChange={(e) => setResponse(e.target.value)}
//             className="w-full p-4 border border-green rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green bg-white"
//             rows="5"
//             placeholder="Write your response here..."
//           />
//           <div className="flex justify-end space-x-4">
//             <button
//               onClick={handleSendReply}
//               className="px-6 py-3 bg-green text-white rounded-lg hover:bg-green transition duration-200"
//             >
//               Send
//             </button>
//             <button
//               onClick={onClose}
//               className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray transition duration-200"
//             >
//               Cancel
//             </button>
//           </div>
//         </motion.div>
//       </motion.div>
//     );
//   };

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen">
//       <Sidebar />
//       <div className="flex-grow p-6 md:ml-5">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold">User Inquiry <span className='text-green'>Messages</span></h2>
//           <p className="text-gray-600">Total Users: {totalContacts}</p>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-300">
//             <thead className="bg-green text-white">
//               <tr>
//                 <th className="py-3 px-5 text-left border-b">#</th>
//                 <th className="py-3 px-5 text-left border-b">Name</th>
//                 <th className="py-3 px-5 text-left border-b">Email</th>
//                 <th className="py-3 px-5 text-left border-b">Message</th>
//                 <th className="py-3 px-5 text-left border-b">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {contacts.map((contact, index) => (
//                 <tr key={contact._id} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
//                   <td className="py-3 px-5 border-b">{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</td>
//                   <td className="py-3 px-5 border-b">{contact.name}</td>
//                   <td className="py-3 px-5 border-b">{contact.email}</td>
//                   <td className="py-3 px-5 border-b">{contact.message}</td>
//                   <td className="py-3 px-5 border-b flex space-x-2">
//                     <button onClick={() => handleReply(contact)} className="bg-green text-white px-3 py-1 rounded">
//                       <Reply size={16} />
//                     </button>
                 
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div className="mt-4 flex justify-between items-center">
//           <button
//             onClick={handlePrevPage}
//             disabled={currentPage === 1}
//             className="px-4 py-2 bg-green text-white rounded hover:bg-black "
//           >
//             Prev
//           </button>
//           <span>
//             Page {currentPage} of {totalPages}
//           </span>
//           <button
//             onClick={handleNextPage}
//             disabled={currentPage === totalPages}
//             className="px-4 py-2 bg-green text-white rounded hover:bg-black "
//           >
//             Next
//           </button>
//         </div>
//       </div>
//       <AnimatePresence>
//         {isReplyModalOpen && (
//           <ReplyModal
//             contact={currentContact}
//             onClose={() => setIsReplyModalOpen(false)}
//           />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default CustomerSupport;



// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import { Reply } from 'lucide-react';
// import Sidebar from './Sidebar';
// import axios from 'axios';
// import { motion, AnimatePresence } from 'framer-motion';
// import Swal from 'sweetalert2';

// const ITEMS_PER_PAGE = 5;

// // Modal Component
// const Modal = ({ isOpen, onClose, onSend, contact }) => {
//   const [response, setResponse] = useState('');
  
//   const handleSend = useCallback(() => {
//     onSend(contact._id, response);
//     setResponse('');
//     onClose();
//   }, [contact._id, response, onSend, onClose]);

//   if (!isOpen) return null;

//   return (
//     <motion.div 
//       className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
//       initial={{ opacity: 0 }} 
//       animate={{ opacity: 1 }} 
//       exit={{ opacity: 0 }}
//     >
//       <motion.div 
//         className="bg-[#f8f4f0] p-8 rounded-lg shadow-lg max-w-lg w-full"
//         initial={{ y: -100, opacity: 0 }} 
//         animate={{ y: 0, opacity: 1 }} 
//         transition={{ duration: 0.5 }}
//       >
//         <h3 className="text-3xl font-semibold mb-6 text-gray-800">Reply to {contact.name}</h3>
//         <p className="text-lg mb-4">Email: {contact.email}</p>
//         <label className="block text-gray-600 mb-2">Response:</label>
//         <textarea
//           value={response}
//           onChange={(e) => setResponse(e.target.value)}
//           className="w-full p-4 border border-[#937d6e] rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#a0785d]"
//           rows="5"
//           placeholder="Write your response here..."
//         />
//         <div className="flex justify-end space-x-4">
//           <button
//             onClick={handleSend}
//             className="px-6 py-3 bg-[#a0785d] text-white rounded-lg hover:bg-[#8c674f] transition duration-200"
//           >
//             Send
//           </button>
//           <button
//             onClick={onClose}
//             className="px-6 py-3 bg-[#937d6e] text-white rounded-lg hover:bg-[#bda392] transition duration-200"
//           >
//             Cancel
//           </button>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// const CustomerSupport = () => {
//   const [contacts, setContacts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalContacts, setTotalContacts] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedContact, setSelectedContact] = useState(null);

//   const fetchContacts = useCallback(async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/contacts?page=${currentPage}&limit=${ITEMS_PER_PAGE}`);
//       setContacts(response.data);
//     } catch (error) {
//       console.error('Error fetching contacts:', error);
//     }
//   }, [currentPage]);

//   const fetchTotalContacts = useCallback(async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/contacts/messages/count');
//       setTotalContacts(response.data.count);
//     } catch (error) {
//       console.error('Error fetching total contacts:', error);
//     }
//   }, []);

//   useEffect(() => {
//     fetchContacts();
//     fetchTotalContacts();
//   }, [fetchContacts, fetchTotalContacts]);

//   const totalPages = useMemo(() => Math.ceil(totalContacts / ITEMS_PER_PAGE), [totalContacts]);

//   const handlePrevPage = useCallback(() => {
//     setCurrentPage((prev) => Math.max(prev - 1, 1));
//   }, []);

//   const handleNextPage = useCallback(() => {
//     setCurrentPage((prev) => Math.min(prev + 1, totalPages));
//   }, [totalPages]);

//   const handleReply = useCallback((contact) => {
//     setSelectedContact(contact);
//     setIsModalOpen(true);
//   }, []);

//   const handleSendReply = useCallback(async (contactId, response) => {
//     try {
//       await axios.put('http://localhost:5000/api/contacts/respond', {
//         contactId,
//         response
//       });
//       setIsModalOpen(false);
//       fetchContacts();

//       await Swal.fire({
//         title: 'Success',
//         text: 'Your response has been sent successfully.',
//         icon: 'success',
//         confirmButtonColor: '#a0785d'
//       });

//     } catch (error) {
//       console.error('Error sending reply:', error);
//       await Swal.fire({
//         title: 'Error!',
//         text: 'There was an issue sending the response.',
//         icon: 'error',
//         confirmButtonColor: '#a0785d'
//       });
//     }
//   }, [fetchContacts]);

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen">
//       <Sidebar />
//       <div className="flex-grow p-6 md:ml-5">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold">User Inquiry <span className='text-[#a0785d]'>Messages</span></h2>
//           <p className="text-gray-600">Total Users: {totalContacts}</p>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white shadow-lg rounded-lg">
//             <thead className="bg-[#a0785d] text-white">
//               <tr>
//                 <th className="text-left px-6 py-3 text-sm font-medium">#</th>
//                 <th className="text-left px-6 py-3 text-sm font-medium">Name</th>
//                 <th className="text-left px-6 py-3 text-sm font-medium">Email</th>
//                 <th className="text-left px-6 py-3 text-sm font-medium">Message</th>
//                 <th className="text-left px-6 py-3 text-sm font-medium">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {contacts.map((contact, index) => (
//                 <motion.tr 
//                   key={contact._id} 
//                   className="border-t"
//                   initial={{ opacity: 0 }} 
//                   animate={{ opacity: 1 }} 
//                   transition={{ duration: 0.5 }}
//                 >
//                   <td className="px-6 py-4 text-sm text-gray-800">{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">{contact.name}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">{contact.email}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">{contact.message}</td>
//                   <td className="px-6 py-4">
//                     <button onClick={() => handleReply(contact)} className="bg-[#a0785d] text-white px-3 py-1 rounded">
//                       <Reply size={16} />
//                     </button>
//                   </td>
//                 </motion.tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div className="mt-4 flex justify-between items-center">
//           <button
//             onClick={handlePrevPage}
//             disabled={currentPage === 1}
//             className="px-4 py-2 bg-[#a0785d] text-white rounded hover:bg-[#8c674f] disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             Previous
//           </button>
//           <span className="text-[#8c674f] font-bold">
//             Page {currentPage} of {totalPages}
//           </span>
//           <button
//             onClick={handleNextPage}
//             disabled={currentPage === totalPages}
//             className="px-4 py-2 bg-[#a0785d] text-white rounded hover:bg-[#8c674f] disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//       <AnimatePresence>
//         {isModalOpen && (
//           <Modal
//             isOpen={isModalOpen}
//             onClose={() => setIsModalOpen(false)}
//             onSend={handleSendReply}
//             contact={selectedContact}
//           />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default CustomerSupport;



import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Reply } from 'lucide-react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2';

const ITEMS_PER_PAGE = 5;

// Modal Component
const Modal = ({ isOpen, onClose, onSend, contact }) => {
  const [response, setResponse] = useState('');
  const textareaRef = useRef(null);
  
  const handleSend = useCallback(() => {
    onSend(contact._id, response);
    setResponse('');
    onClose();
  }, [contact._id, response, onSend, onClose]);

  useEffect(() => {
    if (isOpen && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-[#f8f4f0] p-8 rounded-lg shadow-lg max-w-lg w-full"
        initial={{ y: -100, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-3xl font-semibold mb-6 text-gray-800">Reply to {contact.name}</h3>
        <p className="text-lg mb-4">Email: {contact.email}</p>
        <label className="block text-gray-600 mb-2">Response:</label>
        <textarea
          ref={textareaRef}
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          className="w-full p-4 border border-green rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green bg-white"
          rows="5"
          placeholder="Write your response here..."
        />
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleSend}
            className="px-6 py-3 bg-green text-white rounded-lg hover:bg-green transition duration-200"
          >
            Send
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CustomerSupport = () => {
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalContacts, setTotalContacts] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const fetchContacts = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/contacts?page=${currentPage}&limit=${ITEMS_PER_PAGE}`);
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  }, [currentPage]);

  const fetchTotalContacts = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/contacts/messages/count');
      setTotalContacts(response.data.count);
    } catch (error) {
      console.error('Error fetching total contacts:', error);
    }
  }, []);

  useEffect(() => {
    fetchContacts();
    fetchTotalContacts();
  }, [fetchContacts, fetchTotalContacts]);

  const totalPages = useMemo(() => Math.ceil(totalContacts / ITEMS_PER_PAGE), [totalContacts]);

  const handlePrevPage = useCallback(() => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  }, []);

  const handleNextPage = useCallback(() => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  }, [totalPages]);

  const handleReply = useCallback((contact) => {
    setSelectedContact(contact);
    setIsModalOpen(true);
  }, []);

  const handleSendReply = useCallback(async (contactId, response) => {
    try {
      await axios.put('http://localhost:5000/api/contacts/respond', {
        contactId,
        response
      });
      setIsModalOpen(false);
      fetchContacts();

      await Swal.fire({
        title: 'Success',
        text: 'Your response has been sent successfully.',
        icon: 'success',
        confirmButtonColor: '#10B981'
      });

    } catch (error) {
      console.error('Error sending reply:', error);
      await Swal.fire({
        title: 'Error!',
        text: 'There was an issue sending the response.',
        icon: 'error',
        confirmButtonColor: '#10B981'
      });
    }
  }, [fetchContacts]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-grow p-6 md:ml-5">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">User Inquiry <span className='text-green'>Messages</span></h2>
          <p className="text-gray-600">Total Users: {totalContacts}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-green text-white">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-medium">#</th>
                <th className="text-left px-6 py-3 text-sm font-medium">Name</th>
                <th className="text-left px-6 py-3 text-sm font-medium">Email</th>
                <th className="text-left px-6 py-3 text-sm font-medium">Message</th>
                <th className="text-left px-6 py-3 text-sm font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <motion.tr 
                  key={contact._id} 
                  className={index % 2 === 0 ? 'bg-gray-100' : ''}
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.5 }}
                >
                  <td className="px-6 py-4 text-sm text-gray-800">{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{contact.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{contact.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{contact.message}</td>
                  <td className="px-6 py-4">
                    <button onClick={() => handleReply(contact)} className="bg-green text-white px-3 py-1 rounded hover:bg-green">
                      <Reply size={16} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-green text-white rounded hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Prev
          </button>
          <span className="text-green font-bold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-green text-white rounded hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSend={handleSendReply}
            contact={selectedContact}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomerSupport;