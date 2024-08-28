const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const RateAndRevSchema = new Schema({
  RateAndRevId: { type: String, required: true },
  userId: { type: String, required: true },
  newsId: { type: String, required: true },
  Review: { type: String },
  Rating: { type: String },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String },
  updatedAt: { type: Date, default: Date.now },
  updatedBy: { type: String },
  lastUpdate: { type: Date, default: Date.now },
});

// Export the Schema
module.exports = model("RateAndRev", RateAndRevSchema);
