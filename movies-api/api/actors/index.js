import express from 'express';
import asyncHandler from 'express-async-handler';
import { getPeopleMovieCredits, getPerson, getPersonImages, getPopularPeople } from '../tmdb/tmdb-api';


const router = express.Router(); 

router.get('/tmdb/popular', asyncHandler( async(req, res) => {
    const actors = await getPopularPeople();
    res.status(200).json(actors);
  }));

router.get('/tmdb/actor/:id', asyncHandler( async(req, res,) => {
  const actor = await getPerson(req.params.id);
  res.status(200).json(actor);
}));

router.get('/tmdb/actor/:id/movie-credits', asyncHandler( async(req, res,) => {
  const movies = await getPeopleMovieCredits(req.params.id);
  res.status(200).json(movies);
}));

router.get('/tmdb/actor/:id/images', asyncHandler( async(req, res,) => {
  const images = await getPersonImages(req.params.id);
  res.status(200).json(images);
}));


export default router;