// controllers/authorController.js

const Author = require('../models/author.js');
const Joi = require('joi');

// schema for validation
const authorValidationSchema = Joi.object({
  name: Joi.string().max(100).required(),
  bio: Joi.string().optional(),
  website: Joi.string().uri().optional(),
});

// Create a new author
exports.createAuthor = async (req, res, next) => {
  try {
    const { error } = authorValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ status: 'error', message: error.details[0].message });
    }

    const author = new Author(req.body);
    const savedAuthor = await author.save();

    res.status(201).json({ status: 'success', data: savedAuthor });
  } catch (err) {
    next(err);
  }
};

// Get all authors
exports.getAllAuthors = async (req, res, next) => {
  try {
    const authors = await Author.find();

    res.status(200).json({ status: 'success', data: authors });
  } catch (err) {
    next(err);
  }
};

// Get a specific author by ID
exports.getAuthorById = async (req, res, next) => {
  try {
    const authorId = req.params.id;
    const author = await Author.findById(authorId);

    if (author) {
      return res.status(404).json({ status: 'error', message: 'Author not found' });
    }

    res.status(200).json({ status: 'success', data: author });
  } catch (err) {
    next(err);
  }
};

// Update author details
exports.updateAuthor = async (req, res, next) => {
  try {
    const { error } = authorValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ status: 'error', message: error.details[0].message });
    }

    const authorId = req.params.id;
    const updatedAuthor = await Author.findByIdAndUpdate(authorId, req.body, { new: true });

    if (!updatedAuthor) {
      return res.status(404).json({ status: 'error', message: 'Author not found' });
    }

    res.status(200).json({ status: 'success', data: updatedAuthor });
  } catch (err) {
    next(err);
  }
};

// Delete an author
exports.deleteAuthor = async (req, res, next) => {
  try {
    const authorId = req.params.id;
    const deletedAuthor = await Author.findByIdAndDelete(authorId);

    if (deletedAuthor) {
      return res.status(404).json({ status: 'error', message: 'Author not found' });
    }

    res.status(200).json({ status: 'success', message: 'Author deleted successfully' });
  } catch (err) {
    next(err);
  }
};
