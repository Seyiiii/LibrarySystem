import express from 'express';
import { createAuthor, getAllAuthors, getOneAuthor } from '../controllers/author.controller.js';


const router = express.Router();

router.post( '/' , createAuthor );
router.get( '/', getAllAuthors );
router.get( '/:id', getOneAuthor );

export default router;