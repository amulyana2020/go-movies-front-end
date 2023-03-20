import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const moviesList = [
      {
        id: 1,
        title: 'Highlander',
        release_date: '1986-08-10',
        runtime: 116,
        mpaa_rating: 'R',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatem adipisci nobis error suscipit nihil minus blanditiis unde! Illum ipsam expedita laboriosam quae exercitationem neque magnam cum vero aperiam ut.',
      },
      {
        id: 2,
        title: 'Mask of Zorro',
        release_date: '1990-01-05',
        runtime: 150,
        mpaa_rating: 'PG-13',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatem adipisci nobis error suscipit nihil minus blanditiis unde! Illum ipsam expedita laboriosam quae exercitationem neque magnam cum vero aperiam ut.',
      },
    ];

    setMovies(moviesList);
  }, []);

  return (
    <div>
      <h2>Movies</h2>
      <hr />
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th>Movie</th>
            <th>Release</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(m => (
            <tr key={m.id}>
              <td>
                <Link to={`/movies/${m.id}`}>
                  {m.title}
                </Link>
              </td>
              <td>{m.release_date}</td>
              <td>{m.mpaa_rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Movies;
