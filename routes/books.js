import { Router } from "express";
import { addBook, deleteBook, getAllBooks, getBook, updateBook } from "../controllers/books.js";

export const booksRouter = Router()

booksRouter.get('/library/:id',getBook)

booksRouter.get('/library',getAllBooks)

booksRouter.post('/library',addBook)

booksRouter.patch("/library/:id", updateBook);

booksRouter.delete("/library/:id", deleteBook);

export default booksRouter