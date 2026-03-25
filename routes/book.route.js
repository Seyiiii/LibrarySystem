import express from 'express';
import { createBook, getAllBooks, getOneBook, borrowBook, returnBook } from '../controllers/book.controller.js';

const router = express.Router();

router.post('/', createBook);
router.get('/', getAllBooks);
router.get('/:id', getOneBook);
router.post('/:id/borrow', borrowBook);
router.post('/:id/return', returnBook)


export default router;