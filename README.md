# Assignment 2 - Web API.

Name: Yingying Lu

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 + Added login and sign up functions 
 + Before successful login, favorite pages and must-see pages will not be visible.
 + Add discovery, movie images, movie details, keywords, actor list, similar movies endpoints in Movies API
 + Added actor API, and added popular actors, actor pictures, actor details, and movie starring endpoints in it
 + Add and display comment endpoint integrated with Mongodb
 + Added protected route

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API Configuration

Describe any configuration that needs to take place before running the API. For example, creating an `.env` file and what variables to put in it. Give an example of how this might be done.

REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

______________________
NODEENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

## Movies

- /api/movies/tmdb/discover | GET | Get discover movies from tmdb 
- /api/movies/tmdb/movie/:id | GET | Gets a single movie from tmdb
- /api/movies/tmdb/upcoming | GET | Get upcoming movies from tmdb
- /api/movies/tmdb/movie/:id/similar | GET | Get similar movies from tmdb
- /api/movies/tmdb/movie/movie_id/credits | GET | Get movies credits from tmdb
- /api/movies/tmdb/movie/:id/images | GET | Get movie images from tmdb
- /api/movies/tmdb/movie/movie_id/keywords | GET | Get movies keywords from tmdb

## Actors

- /api/actors/tmdb/popular | GET | Gets popular actors from tmdb
- /api/actors/tmdb/actor/:id | GET | Gets a single actor from tmdb
- /api/actors/tmdb/actor/:id/movie-credits | GET | Gets movie credits for an actor from tmdb
- /api/actors/tmdb/actor/:id/images | GET | Gets actors images from tmdb

## Users

- /api/users | GET | Get user information
- /api/users | POST | Registers/authenticates a user

## Genres

- /api/genres/ | GET | Gets genres from tmdb

## Reviews
- /api/reviews/movie/:id/reviews | GET | Gets movie reviews
- /api/reviews/:username/movie/:id/reviews | POST | creates/updates a movie review

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).

## Security and Authentication

Must-see and favorite pages are protected using JWT for authentication. If we are not logged in, all these pages are invisible. All these pages can be seen after successful login.

## Integrating with React App

Most endpoints integrate with React applications. All movie and actor endpoints are collected from the API. This API uses tmdb to get movie data. The review-related endpoint is integrated with the database.

## Independent learning (if relevant)

Briefly explain any non-standard features developed for the app. 