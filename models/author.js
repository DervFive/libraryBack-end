// models/author.js

const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
   
  },
  bio: {
    type: String,
    trim: true,
  },
  website: {
    type: String,
    trim: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Author', authorSchema);
