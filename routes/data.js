import express from 'express';
import { fetchAllData, fetchSingleData } from '../controllers/data.js';

const router = express.Router();

// fetch all data
router.get('/data', fetchAllData);
// fetch single data
router.get('/data/:id', fetchSingleData);

export default router;
