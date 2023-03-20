import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

const Movie = () => {
  const [movie, setMovie] = useState({});
  let {id} = useParams();

  useEffect(() => {
    let myMovie = {
      id: 1,
      title: 'Highlander',
      release_date: '1986-08-10',
      runtime: 116,
      mpaa_rating: 'R',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatem adipisci nobis error suscipit nihil minus blanditiis unde! Illum ipsam expedita laboriosam quae exercitationem neque magnam cum vero aperiam ut.',
    };

    setMovie(myMovie);
  }, [id]);

  return (
    <div>
      <h2>Movie : {movie.title}</h2>
      <small>
        <em>
          {movie.release_date} - {movie.runtime}{' '}
          minutes - Rated: {movie.mpaa_rating}
        </em>
      </small>
      <hr />
      <p>{movie.description}</p>
    </div>
  );
};

export default Movie;
