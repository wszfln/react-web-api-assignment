import fetch from 'node-fetch';

export const getUpcomingMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getGenres = () => {
    return fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
};

export const getMovies = () => {
    return fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};

export const getMovie = (args) => {

  return fetch(
          `https://api.themoviedb.org/3/movie/${args}?api_key=${process.env.TMDB_KEY}`
      ).then((response) => {
          if (!response.ok) {
              throw new Error(response.json().message);
          }
          return response.json();
      })
      .catch((error) => {
          throw error;
      });
};

export const getMovieImages = (args) => {
  return fetch(
          `https://api.themoviedb.org/3/movie/${args}/images?api_key=${process.env.TMDB_KEY}`
      ).then((response) => {
          if (!response.ok) {
              throw new Error(response.json().message);
          }
          return response.json();
      })
      .catch((error) => {
          throw error
      });
};

export const getSimilarMovies = ( id ) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};

export const getCredits = (movie_id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};

export const getKeywords = (movie_id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/keywords?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};