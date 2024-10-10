import { Books } from "../models/books.js";

export const getBook = async (req, res, next) => {
  try {
    const getId = req.params.id;
    const oneBook = await Books.findById(getId);

    if (!oneBook) {
      return res.status(404).json({ success: false, message: `book not found` });
    }
    res.status(200).json(oneBook);
  } catch (error) {
    next(error);
  }
};

export const getAllBooks = async (req, res, next) => {
  try {
    const getAllBook = await Books.find().populate('author');
    res.status(200).json(getAllBook);
  } catch (error) {
    next(error);
  }
};

export const addBook = async (req, res, next) => {
  try {
    await Books.create(req.body);
    res.status(200).json("added a book");
  } catch (error) {
    next(error);
  }
};

export const updateBook = async (req, res, next) => {
  try {
    const  id  = req.params.id
    const updateData = req.body;
    const index = await Books.findByIdAndUpdate(id, updateData, { new: true });
    if (!index) {
      return res.status(404).json({ status: `error`, message: `book not found` });
    }
    res
      .status(201)
      .json({ status: `success`, message: "Book updated", data: index });
  } catch (error) {
    next(error);
  }
};

export const deleteBook = async (req, res, next) => {
  try {
    const  id  = req.params.id;
    const deleteBook = await Books.findByIdAndDelete(id);

    if (!deleteBook) {
      return res.status(404).json({ status: `error`, message: `book not found` });
    }
    res.status(201).json({ status: `success`, data: `deletedBook` });
  } catch (error) {}
};
