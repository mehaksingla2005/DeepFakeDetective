const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
  filename: String,
  uploadDate: { type: Date, default: Date.now },
  analyzed: { type: Boolean, default: false },
  results: {
    probability: Number,
    abnormalities: [String],
    technique: String
  }
});

module.exports = mongoose.model('Video', VideoSchema);