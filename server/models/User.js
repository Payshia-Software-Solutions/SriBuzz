const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  userId: { type: String, required: true },
  username: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  mobileNumber: { type: String },
  address: { type: String },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String },
  updatedAt: { type: Date, default: Date.now },
  updatedBy: { type: String },
  lastUpdate: { type: Date, default: Date.now },
});

module.exports = model("User", UserSchema);
