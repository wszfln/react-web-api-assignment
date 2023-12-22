import express from 'express';
import { getGenres } from '../tmdb/tmdb-api';
import asyncHandler from 'express-async-handler';

const router = express.Router(); 

// Get all genres
router.get('/tmdb/genres', asyncHandler( async(req, res) => {
    const genres = await getGenres();
    res.status(200).json(genres);
}));

export default router;