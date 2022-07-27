import { fetchReviews } from '../../../../services/index';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(moviesId)
      .then(res => res.json())
      .then(info => {
        return setReviews(info.results);
      });
  }, [moviesId]);

  return reviews.length < 1 ? (
    <p>We dont have any reviews for this movie</p>
  ) : (
    <ul>
      {reviews.map(({ author, content, id }) => (
        <li key={id}>
          <h2>Author: {author}</h2>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
}
