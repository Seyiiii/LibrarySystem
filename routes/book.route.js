import express from 'express';
import { createBook, getAllBooks, getOneBook } from '../controllers/book.controller.js';

const router = express.Router();

router.post('/', createBook);
router.get('/', getAllBooks);
router.get('/:id', getOneBook)

export default router;