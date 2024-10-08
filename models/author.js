// models/author.js

import mongoose from "mongoose";

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

export const AuthorModel = mongoose.model('Author', authorSchema);