// routes/conges.js
import express from 'express';
import {
    getAllConges,
    createConge,
    updateConge,
    deleteConge
} from '../controllers/congesController.js';

const router = express.Router();

router.get('/', getAllConges);
router.post('/', createConge);
router.put('/:id', updateConge);
router.delete('/:id', deleteConge);

export default router;
