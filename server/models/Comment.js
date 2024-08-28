const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const CommentSchema = new Schema(
  {
    commentId: { type: String, required: true },
    userId: { type: String, required: true },
    newsId: { type: String, required: true },
    comment: { type: String },
    createdBy: { type: String },
    updatedBy: { type: String },
  },
  { timestamps: true }
);

module.exports = model("Comment", CommentSchema);
