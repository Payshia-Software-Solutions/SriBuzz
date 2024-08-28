const Comment = require("../models/Comment");

// Create a new Comment entry
const createComment = async (req, res) => {
  try {
    const { commentId, newsId, userId, comment, createdBy, updatedBy } =
      req.body;

    const newComment = new Comment({
      commentId,
      newsId,
      userId,
      comment,
      createdBy,
      updatedBy,
    });

    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating comment", error: error.message });
  }
};

// Get all Comment entries
const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching comments", error: error.message });
  }
};

// Get a specific Comment entry by ID
const getCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findById(id);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.status(200).json(comment);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching comment", error: error.message });
  }
};

// Update a Comment entry
const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, newsId, comment, createdBy, updatedBy } = req.body;

    const updatedComment = await Comment.findByIdAndUpdate(
      id,
      {
        userId,
        newsId,
        comment,
        createdBy,
        updatedBy,
        updatedAt: new Date(),
      },
      { new: true }
    );

    if (!updatedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.status(200).json(updatedComment);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating comment", error: error.message });
  }
};

// Delete a Comment entry
const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedComment = await Comment.findByIdAndDelete(id);

    if (!deletedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting comment", error: error.message });
  }
};

module.exports = {
  createComment,
  getAllComments,
  getCommentById,
  updateComment,
  deleteComment,
};
