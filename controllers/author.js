// controllers/authorController.js

// const Author = import ('../models/author.js');
import { AuthorModel } from '../models/author.js'
import Joi from 'joi';

// schema for validation
const authorValidationSchema = Joi.object({
  name: Joi.string().max(100).required(),
  bio: Joi.string().optional(),
  website: Joi.string().uri().optional(),
});
                  
// Create a new author
export const createAuthor = async (req, res, next) => {
  try {
    const { error } = authorValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ status: 'error', message: error.details[0].message });
    }

    const author = new AuthorModel(req.body);
    const savedAuthor = await author.save();

    res.status(201).json({ status: 'success', data: savedAuthor });
  } catch (err) {
    next(err);
  }
};

// Get all authors
export const getAllAuthors = async (req, res, next) => {
  try {
    const authors = await AuthorModel.find();

    res.status(200).json({ status: 'success', data: authors });
  } catch (err) {
    next(err);
  }
};

// Get a specific author by ID
export const getAuthorById = async (req, res, next) => {
  try {
    const authorId = req.params.id;
    const author = await AuthorModel.findById(authorId);

    if (!author) {
      return res.status(404).json({ status: 'error', message: 'Author not found' });
    }

    res.status(200).json({ status: 'success', data: author });
  } catch (err) {
    next(err);
  }
};

// Update author details
export const updateAuthor = async (req, res, next) => {
  try {
    const { error } = authorValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ status: 'error', message: error.details[0].message });
    }

    const authorId = req.params.id;
    const updatedAuthor = await AuthorModel.findByIdAndUpdate(authorId, req.body, { new: true });

    if (!updatedAuthor) {
      return res.status(404).json({ status: 'error', message: 'Author not found' });
    }
    res.status(200).json({ status: 'success', data: updatedAuthor });
  } catch (err) {
    next(err);
  }
};

// Delete an author
export const deleteAuthor = async (req, res, next) => {
  try {
    const authorId = req.params.id;
    const deletedAuthor = await AuthorModel.findByIdAndDelete(authorId);

    if (!deletedAuthor) {
      return res.status(404).json({ status: 'error', message: 'Author not found' });
    }
    res.status(200).json({ status: 'success', message: 'Author deleted successfully' });
  } catch (err) {
    next(err);
  }
};
