import { Router } from "express";
import { addBook, deleteBook, getAllBooks, getBook, searchBook, updateBook } from "../controllers/books.js";
import { validateBooksAdd, validateBooksUpdate } from "../middlewares/booksMiddleware.js";

export const booksRouter = Router()

booksRouter.get('/Books/search',searchBook);

booksRouter.get('/Books/:id',getBook);

booksRouter.get('/Books',getAllBooks);

booksRouter.post('/Books',validateBooksAdd , addBook);

booksRouter.patch("/Books/:id",validateBooksUpdate, updateBook);

booksRouter.delete("/Books/:id", deleteBook);

export default booksRouter