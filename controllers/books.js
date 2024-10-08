import { Library } from "../models/books.js";

export const getBook = async (req, res, next) => {
  try {
    res.status(200).json();
  } catch (error) {
    next(error);
  }
};

export const getAllBooks = async (req, res, next) => {
  try {
    const getAllBook = await Library.find();
    res.status(200).json(getAllBook);
  } catch (error) {
    next(error);
  }
};

export const addBook = async (req, res, next) => {
  try {
    await Library.create(req.body);
    res.status(200).json("added a book");
  } catch (error) {
    next(error);
  }
};

export const updateBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const index = await Library.findOneAndUpdate(id);

    if (!updateBook) {
      return res .status(404).json({ status: `error`, message: `book not found` });
    }
    res.status(201).json({ status: `success`, data: `updatedBook` });
  } catch (error) {
    next(error);
  }
};

export const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const index = await Library.findOneAndDelete(id);

    if (!deleteBook) {
      return res.status(404).json({ status: `error`, message: `book not found` });
    }

    res.status(201).json({ status: `success`, data: `deletedBook` });
  } catch (error) {}
};
