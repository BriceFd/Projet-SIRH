import express from 'express';
import { getAllAbsences } from '../controllers/absencesController.js';

const router = express.Router();

router.get('/', getAllAbsences);

export default router;
