import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchTrending } from '../../../services/index';

export default function TrendFilmsList() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchTrending()
      .then(res => res.json())
      .then(films => {
        setFilms(films.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {films.map(({ original_title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{original_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
