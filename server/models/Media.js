const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const MediaSchema = new Schema({
  mediaId: { type: String, required: true },
  postId: { type: String, required: true },
  filePath: { type: String, required: true },
  createdAt: { type: String, default: new Date().toISOString() },
  createdBy: { type: String },
  updatedAt: { type: String },
  updatedBy: { type: String },
  lastUpdate: { type: String },
});

module.exports = model("Media", MediaSchema);
