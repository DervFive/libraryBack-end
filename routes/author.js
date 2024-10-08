// routes/authorRoutes.js
import { Router } from 'express';
import { createAuthor, deleteAuthor, getAllAuthors, getAuthorById, updateAuthor } from '../controllers/author.js';

const router =  Router()
const authorController = require('../controllers/author.js'); 

// Routes for authors
router.post('/authors', createAuthor);
router.get('/authors', getAllAuthors);
router.get('/authors/:id', getAuthorById);
router.put('/authors/:id', updateAuthor);
router.delete('/authors/:id',deleteAuthor);

export default router
