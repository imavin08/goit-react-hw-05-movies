import { fetchMovieDetails, BASE_URL } from '../../../services/index';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import css from './MovieDetails.module.css';

export default function MovieDetails() {
  const [info, setinfo] = useState('');
  const { moviesId } = useParams();

  useEffect(() => {
    fetchMovieDetails(moviesId).then(info => {
      setinfo(info);
    });
  }, [moviesId]);

  const getGenres = () => {
    if (info === '') {
      return;
    }
    return info.genres.map(g => g.name).join(' ');
  };

  const { poster_path, title, original_title, vote_average, overview } = info;
  const location = useLocation();
  const cameBack = location.state?.from ?? '/';
  return (
    <div>
      <div className={css.container}>
        <Link to={cameBack}>Go back</Link>

        <div className={css.card}>
          {/* <img
            className={css.img}
            src={poster_path ? BASE_URL + poster_path : <p>{title}</p>}
            alt={title}
          /> */}
          <div>
            <h1>{original_title}</h1>
            <p>User Score: {vote_average}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{getGenres()}</p>
          </div>
        </div>
      </div>
      <ul>
        <li>
          <Link to="cast" state={{ from: cameBack }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: cameBack }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
