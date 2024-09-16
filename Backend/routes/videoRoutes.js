const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Video = require('../models/Video');

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Upload video route
router.post('/upload', upload.single('video'), async (req, res) => {
  try {
    // Here you would call your deepfake detection algorithm
    // For now, we'll just create a new Video document
    const newVideo = new Video({
      filename: req.file.filename,
      analyzed: false
    });
    await newVideo.save();
    res.json({ message: 'Video uploaded successfully', filename: req.file.filename });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get results route
router.get('/results', async (req, res) => {
  try {
    // Here you would retrieve and return the actual results
    // For now, we'll return mock data
    res.json({
      probability: 85,
      abnormalities: ['Inconsistent eye blinking', 'Unnatural facial boundaries'],
      technique: 'GAN-based face swapping'
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;