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
  YearPublished: {
    type: Number,
    trim: true,
  },
}, { timestamps: true });

export const AuthorModel = mongoose.model('Author', authorSchema);