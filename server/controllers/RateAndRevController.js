const RateAndRev = require("../models/RateAndRev");

const createRateAndRev = async (req, res) => {
  try {
    const { RateAndRevId, userId, newsId, Review, Rating, createdBy, updatedBy } = req.body;

    const newRateAndRev = new RateAndRev({
      RateAndRevId,
      userId,
      newsId,
      Review,
      Rating,
      createdBy,
      updatedBy,
    });

    const savedRateAndRev = await newRateAndRev.save();
    res.status(201).json(savedRateAndRev);
  } catch (error) {
    res.status(500).json({ message: "Error creating RateAndRev", error });
  }
};

// Get all RateAndRev entries
const getAllRateAndRev = async (req, res) => {
  try {
    const rateAndRevEntries = await RateAndRev.find();
    res.status(200).json(rateAndRevEntries);
  } catch (error) {
    res.status(500).json({ message: "Error fetching RateAndRev", error });
  }
};

// Get a specific RateAndRev entry by ID
const getRateAndRevById = async (req, res) => {
  try {
    const { id } = req.params;
    const rateAndRev = await RateAndRev.findById(id);

    if (!rateAndRev) {
      return res.status(404).json({ message: "RateAndRev not found" });
    }

    res.status(200).json(rateAndRev);
  } catch (error) {
    res.status(500).json({ message: "Error fetching RateAndRev", error });
  }
};

// Update a RateAndRev entry
const updateRateAndRev = async (req, res) => {
  try {
    const { id } = req.params;
    const { RateAndRevId, userId, newsId, Review, Rating, createdBy, updatedBy } = req.body;

    const updatedRateAndRev = await RateAndRev.findByIdAndUpdate(
      id,
      {
        RateAndRevId,
        userId,
        newsId,
        Review,
        Rating,
        createdBy,
        updatedBy,
        lastUpdate: Date.now(),
      },
      { new: true } // Return the updated document
    );

    if (!updatedRateAndRev) {
      return res.status(404).json({ message: "RateAndRev not found" });
    }

    res.status(200).json(updatedRateAndRev);
  } catch (error) {
    res.status(500).json({ message: "Error updating RateAndRev", error });
  }
};

// Delete a RateAndRev entry
const deleteRateAndRev = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRateAndRev = await RateAndRev.findByIdAndDelete(id);

    if (!deletedRateAndRev) {
      return res.status(404).json({ message: "RateAndRev not found" });
    }

    res.status(200).json({ message: "RateAndRev deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting RateAndRev", error });
  }
};

module.exports = {
  createRateAndRev,
  getAllRateAndRev,
  getRateAndRevById,
  updateRateAndRev,
  deleteRateAndRev,
};