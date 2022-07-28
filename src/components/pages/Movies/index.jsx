import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { fetchSearchMovie } from '../../../services/index';
import css from './Movies.module.css';

export default function Movies() {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get('query') ?? '');
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  const onFormSubmit = e => {
    e.preventDefault();
    if (value === '') {
      return alert(
        'Sorry, but we dont can find empty string, you shoud write something)'
      );
    }
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchSearchMovie(query)
      .then(info => {
        if (!info.total_results) {
          return alert(`Sory we dont found ${query}`);
        }
        setFilms(info.results);
      })
      .catch(error => console.log(error));
  }, [query]);

  const hadleInputChange = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <form className={css.form} onSubmit={onFormSubmit}>
        <input
          className={css.input}
          type="text"
          value={value}
          onChange={hadleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {films.map(({ original_title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
