import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieActors, BASE_URL } from '../../../../services/index';
import css from './Cast.module.css';
import defaultImage from '../../../../images/defaultImage.jpg';

export default function Cast() {
  const { moviesId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchMovieActors(moviesId)
      .then(res => res.json())
      .then(({ cast }) => {
        return setActors(cast);
      })
      .catch(error => console.log(error));
  }, [moviesId]);

  const getActors = () => {
    if (actors.length < 1) {
      return;
    }
    return actors.map(({ profile_path, name, character, id }) => (
      <li key={id} className={css.actorItem}>
        <div className={css.imgBox}>
          <img
            className={css.img}
            src={profile_path ? BASE_URL + profile_path : defaultImage}
            alt={name}
          />
        </div>
        <div className={css.textBox}>
          {name}
          <p>Character: {character}</p>
        </div>
      </li>
    ));
  };

  return <ul className={css.actorsList}>{getActors()}</ul>;
}
