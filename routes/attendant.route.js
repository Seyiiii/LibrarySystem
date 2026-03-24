import express from 'express';
import { createAttendant, getAllAttendants, getOneAttendant } from '../controllers/attendant.controller.js';

const router = express.Router();

router.post('/', createAttendant);
router.get('/', getAllAttendants);
router.get('/:id', getOneAttendant);


export default router;