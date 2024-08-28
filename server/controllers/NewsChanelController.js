const NewsChanel = require("../models/NewsChanel");

// Create a new news entry
const createNewsChanel = async (req, res) => {
  try {
    const {
      NewsChanelId,
      newsName,
      newsDescription,
      createdBy,
      createdAt,
      updatedAt,
      updatedBy,
      lastUpdate,
    } = req.body;

    const newNewsChanel = new NewsChanel({
      NewsChanelId,
      newsName,
      newsDescription,

      createdAt: new Date().toISOString(), // Automatically set the creation time
      createdBy,
      updatedAt: Date.now(),
      updatedBy,
      lastUpdate: Date.now(),
    });

    const savedNewsChanel = await newNewsChanel.save();
    res.status(201).json(savedNewsChanel);
  } catch (error) {
    res.status(500).json({ message: "Error creating news", error });
  }
};

// Get all news entries
const getAllNewsChanel = async (req, res) => {
  try {
    const news = await NewsChanel.find();
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: "Error fetching news", error });
  }
};

// Get a specific news entry by ID
const getNewsChanelById = async (req, res) => {
  try {
    const { id } = req.params;
    const NewsChanel = await NewsChanel.findById(id);

    if (!NewsChanel) {
      return res.status(404).json({ message: "News not found" });
    }

    res.status(200).json(NewsChanel);
  } catch (error) {
    res.status(500).json({ message: "Error fetching news", error });
  }
};

// Update a news entry
const updateNewsChanel = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      NewsChanelId,
      newsName,
      newsDescription,
      createdBy,
     
     
      updatedBy,
      
    } = req.body;

    const updatedNews = await News.findByIdAndUpdate(
      id,
      {
        NewsChanelId,
        newsName,
        newsDescription,

        createdAt: new Date().toISOString(), // Automatically set the creation time
        createdBy,
        updatedAt: Date.now(),
        updatedBy,
        lastUpdate: Date.now(),
      },
      { new: true } // Return the updated document
    );

    if (!updatedNews) {
      return res.status(404).json({ message: "News not found" });
    }

    res.status(200).json(updatedNews);
  } catch (error) {
    res.status(500).json({ message: "Error updating news", error });
  }
};

// Delete a news entry
const deleteNewsChanel = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedNewsChanel = await NewsChanel.findByIdAndDelete(id);

    if (!deletedNewsChanel) {
      return res.status(404).json({ message: "News not found" });
    }

    res.status(200).json({ message: "News deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting news", error });
  }
};

module.exports = {
  createNewsChanel,
  getAllNewsChanel,
  getNewsChanelById,
  updateNewsChanel,
  deleteNewsChanel,
};
