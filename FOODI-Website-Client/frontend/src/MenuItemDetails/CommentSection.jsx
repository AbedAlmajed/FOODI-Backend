// // Frontend Component: src/components/CommentSection.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CommentSection = ({ menuItemId }) => {
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState('');

//   useEffect(() => {
//     fetchComments();
//   }, [menuItemId]);

//   const fetchComments = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/comments/${menuItemId}`);
//       setComments(response.data);
//     } catch (error) {
//       console.error('Error fetching comments:', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
//       await axios.post('http://localhost:5000/api/comments', 
//         { menuItemId, content: newComment },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setNewComment('');
//       fetchComments(); // Refresh comments after posting
//     } catch (error) {
//       console.error('Error posting comment:', error);
//     }
//   };

//   return (
//     <div className="mt-8">
//       <h2 className="text-2xl font-bold mb-4">Comments</h2>
//       <form onSubmit={handleSubmit} className="mb-4">
//         <textarea
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//           className="w-full p-2 border rounded bg-white"
//           placeholder="Write a comment..."
//           required
//         />
//         <button type="submit" className="mt-2 bg-green text-white px-4 py-2 rounded">
//           Post Comment
//         </button>
//       </form>
//       <div className="space-y-4">
//         {comments.map((comment) => (
//           <div key={comment._id} className="bg-gray-100 p-4 rounded">
//             <div className="flex items-center mb-2">
//               {comment.userId.image && (
//                 <img
//                   src={comment.userId.image}
//                   alt={comment.userId.name}
//                   className="w-8 h-8 rounded-full mr-2"
//                 />
//               )}
//               <span className="font-semibold">{comment.userId.name}</span>
//             </div>
//             <p>{comment.content}</p>
//             <p className="text-sm text-gray-500 mt-1">
//               {new Date(comment.createdAt).toLocaleString()}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CommentSection;










// //Frontend Component: src/components/CommentSection.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CommentSection = ({ menuItemId }) => {
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState('');
//   const [editingComment, setEditingComment] = useState(null);
//   const [replyingTo, setReplyingTo] = useState(null);
//   const [userId, setUserId] = useState(null);

//   useEffect(() => {
//     fetchComments();
//     const storedUserId = localStorage.getItem('userID');
//     setUserId(storedUserId);
//   }, [menuItemId]);

//   const fetchComments = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/comments/${menuItemId}`);
//       setComments(response.data);
//     } catch (error) {
//       console.error('Error fetching comments:', error);
//     }
//   };

//   const handleSubmit = async (e, parentId = null) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.post('http://localhost:5000/api/comments', 
//         { menuItemId, content: newComment, parentId },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setNewComment('');
//       setReplyingTo(null);
//       if (parentId) {
//         setComments(comments.map(comment => 
//           comment._id === parentId 
//             ? { ...comment, replies: [...comment.replies, response.data] }
//             : comment
//         ));
//       } else {
//         setComments([response.data, ...comments]);
//       }
//     } catch (error) {
//       console.error('Error posting comment:', error);
//     }
//   };

//   const handleEdit = async (commentId, newContent) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.put(`http://localhost:5000/api/comments/${commentId}`, 
//         { content: newContent },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setComments(comments.map(comment => 
//         comment._id === commentId ? { ...comment, content: newContent } : comment
//       ));
//       setEditingComment(null);
//     } catch (error) {
//       console.error('Error editing comment:', error);
//     }
//   };

//   const handleDelete = async (commentId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.delete(`http://localhost:5000/api/comments/${commentId}`, 
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setComments(comments.filter(comment => comment._id !== commentId));
//     } catch (error) {
//       console.error('Error deleting comment:', error);
//     }
//   };

//   const Comment = ({ comment, isReply = false }) => (
//     <div className={`bg-gray-100 p-4 rounded ${isReply ? 'ml-8 mt-2' : ''}`}>
//       <div className="flex items-center mb-2">
//         {comment.userId.image && (
//           <img
//             src={comment.userId.image}
//             alt={comment.userId.name}
//             className="w-8 h-8 rounded-full mr-2"
//           />
//         )}
//         <span className="font-semibold">{comment.userId.name}</span>
//       </div>
//       {editingComment === comment._id ? (
//         <form onSubmit={(e) => {
//           e.preventDefault();
//           handleEdit(comment._id, e.target.content.value);
//         }}>
//           <textarea
//             name="content"
//             defaultValue={comment.content}
//             className="w-full p-2 border rounded bg-white"
//             required
//           />
//           <button type="submit" className="mt-2 bg-green text-white px-4 py-2 rounded mr-2">
//             Save
//           </button>
//           <button onClick={() => setEditingComment(null)} className="mt-2 bg-gray-500 text-white px-4 py-2 rounded">
//             Cancel
//           </button>
//         </form>
//       ) : (
//         <>
//           <p>{comment.content}</p>
//           <p className="text-sm text-gray-500 mt-1">
//             {new Date(comment.createdAt).toLocaleString()}
//           </p>
//           {userId === comment.userId._id && (
//             <div className="mt-2">
//               <button onClick={() => setEditingComment(comment._id)} className="text-blue-500 mr-2">
//                 Edit
//               </button>
//               <button onClick={() => handleDelete(comment._id)} className="text-red-500">
//                 Delete
//               </button>
//             </div>
//           )}
//           {!isReply && (
//             <button onClick={() => setReplyingTo(comment._id)} className="text-green-500 mt-2">
//               Reply
//             </button>
//           )}
//         </>
//       )}
//       {replyingTo === comment._id && (
//         <form onSubmit={(e) => handleSubmit(e, comment._id)} className="mt-2">
//           <textarea
//             value={newComment}
//             onChange={(e) => setNewComment(e.target.value)}
//             className="w-full p-2 border rounded bg-white"
//             placeholder="Write a reply..."
//             required
//           />
//           <button type="submit" className="mt-2 bg-green text-white px-4 py-2 rounded mr-2">
//             Post Reply
//           </button>
//           <button onClick={() => setReplyingTo(null)} className="mt-2 bg-gray-500 text-white px-4 py-2 rounded">
//             Cancel
//           </button>
//         </form>
//       )}
//       {comment.replies && comment.replies.map(reply => (
//         <Comment key={reply._id} comment={reply} isReply={true} />
//       ))}
//     </div>
//   );

//   return (
//     <div className="mt-8">
//       <h2 className="text-2xl font-bold mb-4">Comments</h2>
//       <form onSubmit={(e) => handleSubmit(e)} className="mb-4">
//         <textarea
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//           className="w-full p-2 border rounded bg-white"
//           placeholder="Write a comment..."
//           required
//         />
//         <button type="submit" className="mt-2 bg-green text-white px-4 py-2 rounded">
//           Post Comment
//         </button>
//       </form>
//       <div className="space-y-4">
//         {comments.map(comment => (
//           <Comment key={comment._id} comment={comment} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CommentSection;









import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentSection = ({ menuItemId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editingComment, setEditingComment] = useState(null);
  const [replyingTo, setReplyingTo] = useState(null);
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchComments();
    const storedUserId = localStorage.getItem('userID');
    setUserId(storedUserId);
  }, [menuItemId]);

  const fetchComments = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/comments/${menuItemId}`);
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
      setError('Failed to load comments. Please try again later.');
    }
  };

  const handleSubmit = async (e, parentId = null) => {
    e.preventDefault();
    setError(null);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('You must be logged in to post a comment.');
        return;
      }

      const commentData = { 
        menuItemId, 
        content: parentId ? e.target.replyContent.value : newComment, 
        parentId 
      };
      
      console.log('Sending comment data:', commentData);

      const response = await axios.post('http://localhost:5000/api/comments', 
        commentData,
        { 
          headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          } 
        }
      );

      console.log('Server response:', response.data);

      if (parentId) {
        e.target.replyContent.value = '';
      } else {
        setNewComment('');
      }
      setReplyingTo(null);
      fetchComments();
    } catch (error) {
      console.error('Error posting comment:', error);
      if (error.response) {
        console.error('Error data:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
        setError(`Failed to post comment: ${error.response.data.message || 'Unknown error'}`);
      } else if (error.request) {
        console.error('Error request:', error.request);
        setError('Failed to post comment: No response received from server');
      } else {
        console.error('Error message:', error.message);
        setError(`Failed to post comment: ${error.message}`);
      }
    }
  };

  const handleEdit = async (commentId, newContent) => {
    setError(null);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('You must be logged in to edit a comment.');
        return;
      }

      await axios.put(`http://localhost:5000/api/comments/${commentId}`, 
        { content: newContent },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchComments();
      setEditingComment(null);
    } catch (error) {
      console.error('Error editing comment:', error);
      setError('Failed to edit comment. Please try again later.');
    }
  };

  const handleDelete = async (commentId) => {
    setError(null);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('You must be logged in to delete a comment.');
        return;
      }

      await axios.delete(`http://localhost:5000/api/comments/${commentId}`, 
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchComments();
    } catch (error) {
      console.error('Error deleting comment:', error);
      setError('Failed to delete comment. Please try again later.');
    }
  };

  const Comment = ({ comment, depth = 0 }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState(comment.content);

    const handleEditSubmit = (e) => {
      e.preventDefault();
      handleEdit(comment._id, editContent);
      setIsEditing(false);
    };

    return (
      <div className={`bg-gray-100 p-4 rounded ${depth > 0 ? 'ml-8 mt-2' : ''}`}>
        <div className="flex items-center mb-2">
          {comment.userId.image && (
            <img
              src={comment.userId.image}
              alt={comment.userId.name}
              className="w-8 h-8 rounded-full mr-2"
            />
          )}
          <span className="font-semibold">{comment.userId.name}</span>
        </div>
        {isEditing ? (
          <form onSubmit={handleEditSubmit}>
            <textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              className="w-full p-2 border rounded bg-white"
              required
            />
            <button type="submit" className="mt-2 bg-green-500 text-white px-4 py-2 rounded mr-2">
              Save
            </button>
            <button onClick={() => setIsEditing(false)} className="mt-2 bg-gray-500 text-white px-4 py-2 rounded">
              Cancel
            </button>
          </form>
        ) : (
          <>
            <p>{comment.content}</p>
            <p className="text-sm text-gray-500 mt-1">
              {new Date(comment.createdAt).toLocaleString()}
            </p>
            {userId === comment.userId._id && (
              <div className="mt-2">
                <button onClick={() => setIsEditing(true)} className="text-blue-500 mr-2">
                  Edit
                </button>
                <button onClick={() => handleDelete(comment._id)} className="text-red-500">
                  Delete
                </button>
              </div>
            )}
            <button onClick={() => setReplyingTo(comment._id)} className="text-green-500 mt-2">
              Reply
            </button>
          </>
        )}
        {replyingTo === comment._id && (
          <form onSubmit={(e) => handleSubmit(e, comment._id)} className="mt-2">
            <textarea
              name="replyContent"
              className="w-full p-2 border rounded bg-white"
              placeholder="Write a reply..."
              required
            />
            <button type="submit" className="mt-2 bg-green text-white px-4 py-2 rounded mr-2">
              Post Reply
            </button>
            <button onClick={() => setReplyingTo(null)} className="mt-2 bg-gray-500 text-white px-4 py-2 rounded">
              Cancel
            </button>
          </form>
        )}
        {comment.replies && comment.replies.map(reply => (
          <Comment key={reply._id} comment={reply} depth={depth + 1} />
        ))}
      </div>
    );
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={(e) => handleSubmit(e)} className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded bg-white"
          placeholder="Write a comment..."
          required
        />
        <button type="submit" className="mt-2 bg-green text-white px-4 py-2 rounded">
          Post Comment
        </button>
      </form>
      <div className="space-y-4">
        {comments.map(comment => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;