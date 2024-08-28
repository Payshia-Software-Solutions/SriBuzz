const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const CategorySchema = new Schema({
  categoryId: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String },
  updatedAt: { type: Date, default: Date.now },
  updatedBy: { type: String },
});

module.exports = model("Category", CategorySchema);
