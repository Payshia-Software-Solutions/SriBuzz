const Media = require("../models/Media"); // Ensure this path is correct based on your project structure

const createMedia = async (req, res) => {
  try {
    const { mediaId, postId, filePath, createdBy, updatedBy } = req.body;

    const newMedia = new Media({
      mediaId,
      postId,
      filePath,
      createdAt: new Date().toISOString(),
      createdBy,
      updatedAt: new Date().toISOString(),
      updatedBy,
      lastUpdate: new Date().toISOString(),
    });

    const savedMedia = await newMedia.save();
    res.status(201).json(savedMedia);
  } catch (error) {
    res.status(500).json({ message: "Error creating media", error });
  }
};

const getAllMedia = async (req, res) => {
  try {
    const media = await Media.find();
    res.status(200).json(media);
  } catch (error) {
    res.status(500).json({ message: "Error fetching media", error });
  }
};

const getMediaById = async (req, res) => {
  try {
    const { id } = req.params;
    const media = await Media.findById(id);

    if (!media) {
      return res.status(404).json({ message: "Media not found" });
    }

    res.status(200).json(media);
  } catch (error) {
    res.status(500).json({ message: "Error fetching media", error });
  }
};

const updateMedia = async (req, res) => {
  try {
    const { id } = req.params;
    const { mediaId, postId, filePath, updatedBy } = req.body;

    const updatedMedia = await Media.findByIdAndUpdate(
      id,
      {
        mediaId,
        postId,
        filePath,
        updatedAt: new Date().toISOString(),
        updatedBy,
        lastUpdate: new Date().toISOString(),
      },
      { new: true }
    );

    if (!updatedMedia) {
      return res.status(404).json({ message: "Media not found" });
    }

    res.status(200).json(updatedMedia);
  } catch (error) {
    res.status(500).json({ message: "Error updating media", error });
  }
};

const deleteMedia = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedMedia = await Media.findByIdAndDelete(id);

    if (!deletedMedia) {
      return res.status(404).json({ message: "Media not found" });
    }

    res.status(200).json({ message: "Media deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting media", error });
  }
};

module.exports = {
  createMedia,
  getAllMedia,
  getMediaById,
  updateMedia,
  deleteMedia,
};
