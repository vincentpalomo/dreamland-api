import express from 'express';
import { fetchAllData } from '../controllers/data.js';

const router = express.Router();

// fetch all data
router.get('/', fetchAllData);

export default router;
