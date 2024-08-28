const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// Define the schema
const NewsChanelSchema = new Schema({
  NewsChanelId: { type: String, required: true },
  newsName: { type: String, required: true },
  newsDescription: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String },
  updatedAt: { type: Date, default: Date.now },
  updatedBy: { type: String },
  lastUpdate: { type: Date, default: Date.now },
});

// Export the model with the correct schema
module.exports = model("NewsChanel", NewsChanelSchema);
