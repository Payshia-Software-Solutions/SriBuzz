const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const WebContentSchema = new Schema(
  {
    newsId: { type: String, required: true },
    key: { type: String },
    value: { type: String },
    createdBy: { type: String },
    tags: { type: [String] },
  },
  { timestamps: true } // This automatically adds `createdAt` and `updatedAt` fields
);

module.exports = model("WebContent", WebContentSchema);
