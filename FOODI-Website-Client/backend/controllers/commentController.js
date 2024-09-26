// // Controller: controllers/commentController.js
// const Comment = require('../models/Comment');
// const User = require('../models/User'); // Assuming you have a User model

// exports.createComment = async (req, res) => {
//   try {
//     const { menuItemId, content } = req.body;
//     const userId = req.user.id; // Assuming you have authentication middleware

//     const newComment = new Comment({
//       menuItemId,
//       userId,
//       content
//     });

//     await newComment.save();
//     res.status(201).json(newComment);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// exports.getComments = async (req, res) => {
//   try {
//     const { menuItemId } = req.params;
//     const comments = await Comment.find({ menuItemId })
//       .populate('userId', 'name image') // Populate user details
//       .sort({ createdAt: -1 });
//     res.json(comments);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

















// Controller: controllers/commentController.js
const Comment = require('../models/Comment');
const User = require('../models/User');

exports.createComment = async (req, res) => {
  try {
    const { menuItemId, content, parentId } = req.body;
    const userId = req.user.id;

    const newComment = new Comment({
      menuItemId,
      userId,
      content,
      parentId
    });

    await newComment.save();

    if (parentId) {
      await Comment.findByIdAndUpdate(parentId, { $push: { replies: newComment._id } });
    }

    const populatedComment = await Comment.findById(newComment._id).populate('userId', 'name image');
    res.status(201).json(populatedComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getComments = async (req, res) => {
  try {
    const { menuItemId } = req.params;
    const comments = await Comment.find({ menuItemId, parentId: null })
      .populate('userId', 'name image')
      .populate({
        path: 'replies',
        populate: { path: 'userId', select: 'name image' }
      })
      .sort({ createdAt: -1 });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const userId = req.user.id;

    const comment = await Comment.findById(id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    if (comment.userId.toString() !== userId) {
      return res.status(403).json({ message: 'Not authorized to edit this comment' });
    }

    comment.content = content;
    await comment.save();

    res.json(comment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const comment = await Comment.findById(id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    if (comment.userId.toString() !== userId) {
      return res.status(403).json({ message: 'Not authorized to delete this comment' });
    }

    await Comment.findByIdAndDelete(id);
    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};