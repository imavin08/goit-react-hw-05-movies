const API_KEY = 'e58a02e4215cc04ce0b4af905ce50db3';
export const BASE_URL = 'https://image.tmdb.org/t/p/w500';

export function fetchTrending() {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
}

export function fetchMovieDetails(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMovieActors(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchReviews(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
}

export function fetchSearchMovie(value) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${value}&page=1&include_adult=false`
  );
}
