import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from '../../../services/index';

export default function Movies() {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({});

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) {
      return;
    }

    fetchSearchMovie(query)
      .then(res => res.json())
      .then(info => {
        if (!info.total_results) {
          return alert(`Sorry we dont found ${query}`);
        }
        setFilms(info.results);
      })
      .catch(error => console.log(error));
  }, [searchParams]);

  const onFormSubmit = e => {
    const inputValue = e.target[0].value;
    e.preventDefault();
    if (inputValue === '') {
      return alert(
        'Sorry, but we dont can find empty string, you shoud write something)'
      );
    }
    setSearchParams({ query: inputValue });
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
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
