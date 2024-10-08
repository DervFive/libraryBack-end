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
    res.status(200).json("add a book");
  } catch (error) {
    next(error);
  }
};

export const updateBook = (req, res, next) => {
  res.status(201).json("update a book");
};

export const deleteBook = (req, res, next) => {
  res.status(201).json("delete a book");
};
