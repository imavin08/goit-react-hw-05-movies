const API_KEY = 'e58a02e4215cc04ce0b4af905ce50db3';
export const BASE_URL = 'https://image.tmdb.org/t/p/w500';

export async function fetchTrending() {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  const info = await res.json();
  return info;
}

export async function fetchMovieDetails(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  const info = await res.json();
  return info;
}

export async function fetchMovieActors(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  const info = await res.json();
  return info;
}

export async function fetchReviews(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  const info = await res.json();
  return info;
}

export async function fetchSearchMovie(value) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${value}&page=1&include_adult=false`
  );
  const info = await res.json();
  return info;
}
