// // Model: models/Comment.js
// const mongoose = require('mongoose');

// const commentSchema = new mongoose.Schema({
//   menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   content: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now }
// });

// const Comment = mongoose.model('Comment', commentSchema);

// module.exports = Comment;





// Model: models/Comment.js
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment', default: null },
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;