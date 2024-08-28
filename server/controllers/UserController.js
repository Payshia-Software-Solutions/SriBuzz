const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const {
      userId,
      username,
      firstName,
      lastName,
      email,
      password,
      mobileNumber,
      address,
      createdBy,
    } = req.body;

    const newUser = new User({
      userId,
      username,
      firstName,
      lastName,
      email,
      password,
      mobileNumber,
      address,
      createdBy,
      updatedBy: createdBy,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: "Error creating user", error });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: "Error fetching users", error });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: "Error fetching user", error });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      userId,
      username,
      firstName,
      lastName,
      email,
      password,
      mobileNumber,
      address,
      updatedBy,
    } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        userId,
        username,
        firstName,
        lastName,
        email,
        password,
        mobileNumber,
        address,
        updatedAt: Date.now(),
        updatedBy,
        lastUpdate: Date.now(),
      },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: "Error updating user", error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: "Error deleting user", error });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
