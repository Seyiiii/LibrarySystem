import express from 'express';
import { createBook, getAllBooks, getOneBook, updateBook, deleteBook, borrowBook, returnBook } from '../controllers/book.controller.js';

const router = express.Router();

router.post('/', createBook);
router.get('/', getAllBooks);
router.get('/:id', getOneBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);
router.post('/:id/borrow', borrowBook);
router.post('/:id/return', returnBook);



export default router;