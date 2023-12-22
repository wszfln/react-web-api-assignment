export const getMovies = async () => {
  return fetch("http://localhost:8080/api/movies/tmdb/discover", {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'get'}).then(res => res.json())
};
  
export const getMovie = (args) => {
  // console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `http://localhost:8080/api/movies/tmdb/movie/${id}`, {
              headers: {
                  'Authorization': window.localStorage.getItem('token')
              }
          }
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
  
  export const getGenres = async () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  
  export const getMovieImages = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `http://localhost:8080/api/movies/tmdb/movie/${id}/images`,
      ).then(res => {
          return res.json();
      }).catch((error) => {
          console.log(error);
      });
  };

  export const getMovieReviews = async (id) => {
    return fetch(
      `http://localhost:8080/api/reviews/movie/${id}/reviews`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'get'}).then(res => res.json())
  };

  export const addReview = (username, movie, review) => {
    return fetch(
      `http://localhost:8080/api/reviews/${username}/movie/${movie.id}/reviews`, {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ author: review.author, movieId: movie.id, content: review.content, rating: review.rating })
    }).then(res => res.json())
  };

  export const getUpcomingMovies = () => {
    return fetch(
        `http://localhost:8080/api/movies/tmdb/upcoming`, {
          headers: {
            'Authorization': window.localStorage.getItem('token')
          }
        }
    ).then( (response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    }).catch((error) => {
            throw error
        });
};
  export const getCredits = (movie_id) => {
    return fetch(
      `https://localhost:8080/api/movies/tmdb/movie/${movie_id}/credits`
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

  export const getSimilarMovies = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `http://localhost:8080/api/movies/tmdb/movie/${id}/similar`,
    ).then(res => {
        return res.json();
    }).catch((error) => {
        console.log(error);
    });
  };

  export const getKeywords = (movie_id) => {
    return fetch(
      `https://localhost:8080/api/movies/tmdb/movie/${movie_id}/keywords`
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

  export const getPerson = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://localhost:8080/api/actors/tmdb/actor/${id}`,
    ).then(res => {
        return res.json();
    }).catch((error) => {
        console.log(error);
    });
    };

  export const getPopularPeople = () => {
      return fetch(
         'https://localhost:8080/api/actors/tmdb/popular',
      ).then(res => {
          return res.json();
      }).catch((error) => {
          console.log(error);
      });
  };

  export const getPersonImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://localhost:8080/api/actors/tmdb/actor/${id}/images`,
  ).then(res => {
      return res.json();
  }).catch((error) => {
      console.log(error);
  });
};

export const getPeopleMovieCredits = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
    return fetch(
      `https://localhost:8080/api/actors/tmdb/actor/${id}/movie-credits`,
  ).then(res => {
      return res.json();
  }).catch((error) => {
      console.log(error);
  });
};

  export const login = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
  };
  
  export const signup = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
  };