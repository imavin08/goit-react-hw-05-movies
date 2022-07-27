import { fetchMovieDetails, BASE_URL } from '../../../services/index';
import { useParams, Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import css from './MovieDetails.module.css';

export default function MovieDetails() {
  const [info, setinfo] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    fetchMovieDetails(moviesId)
      .then(res => res.json())
      .then(info => {
        setinfo(info);
      });
  }, [moviesId]);

  const getGenres = () => {
    if (info.length < 1) {
      return;
    }
    return info.genres.map(g => g.name).join(' ');
  };

  const { poster_path, title, original_title, vote_average, overview } = info;

  return (
    <div>
      <div className={css.container}>
        <Link to="/">Go back</Link>
        <div className={css.card}>
          <img
            className={css.img}
            src={poster_path ? BASE_URL + poster_path : <p>{title}</p>}
            alt={title}
          />
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
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
