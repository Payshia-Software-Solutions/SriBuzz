const WebContent = require("../models/WebContent");


// Create a new WebContent entry
const createWebContent = async (req, res) => {
  try {
    const { newsId, key, value, createdBy, tags } = req.body;

    const newWebContent = new WebContent({
      newsId,
      key,
      value,
      createdBy,
      tags,
    });

    const savedWebContent = await newWebContent.save();
    res.status(201).json(savedWebContent);
  } catch (error) {
    res.status(500).json({ message: "Error creating web content", error });
  }
};

// Get all WebContent entries
const getAllWebContent = async (req, res) => {
  try {
    const webContents = await WebContent.find();
    res.status(200).json(webContents);
  } catch (error) {
    res.status(500).json({ message: "Error fetching web content", error });
  }
};

// Get a specific WebContent entry by ID
const getWebContentById = async (req, res) => {
  try {
    const { id } = req.params;
    const webContent = await WebContent.findById(id);

    if (!webContent) {
      return res.status(404).json({ message: "Web content not found" });
    }

    res.status(200).json(webContent);
  } catch (error) {
    res.status(500).json({ message: "Error fetching web content", error });
  }
};

// Update a WebContent entry
const updateWebContent = async (req, res) => {
  try {
    const { id } = req.params;
    const { newsId, key, value, createdBy, tags } = req.body;

    const updatedWebContent = await WebContent.findByIdAndUpdate(
      id,
      {
        newsId,
        key,
        value,
        createdBy,
        tags,
        updatedAt: new Date().toISOString(), // Automatically set the update time
      },
      { new: true } // Return the updated document
    );

    if (!updatedWebContent) {
      return res.status(404).json({ message: "Web content not found" });
    }

    res.status(200).json(updatedWebContent);
  } catch (error) {
    res.status(500).json({ message: "Error updating web content", error });
  }
};

// Delete a WebContent entry
const deleteWebContent = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedWebContent = await WebContent.findByIdAndDelete(id);

    if (!deletedWebContent) {
      return res.status(404).json({ message: "Web content not found" });
    }

    res.status(200).json({ message: "Web content deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting web content", error });
  }
};

module.exports = {
  createWebContent,
  getAllWebContent,
  getWebContentById,
  updateWebContent,
  deleteWebContent,
};
