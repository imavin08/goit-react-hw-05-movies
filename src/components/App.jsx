import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AppBar from './AppBar';
import Container from './Container';

const FilmsList = lazy(() => import('./pages/FilmsList'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const Cast = lazy(() => import('./pages/MovieDetails/Cast'));
const Reviews = lazy(() => import('./pages/MovieDetails/Reviews'));
const NotFound = lazy(() => import('./pages/NotFound'));

export const App = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<FilmsList />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:moviesId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </Container>
  );
};
