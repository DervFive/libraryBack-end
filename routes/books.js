import { Router } from "express";
import { addBook, deleteBook, getAllBooks, getBook, updateBook } from "../controllers/books.js";
import { validateBooksAdd, validateBooksUpdate } from "../middlewares/booksMiddleware.js";

export const booksRouter = Router()

booksRouter.get('/Books/:id',getBook);

booksRouter.get('/Books',getAllBooks);

booksRouter.post('/Books',validateBooksAdd , addBook);

booksRouter.patch("/Books/:id",validateBooksUpdate, updateBook);

booksRouter.delete("/Books/:id", deleteBook);

export default booksRouter