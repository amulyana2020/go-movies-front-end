import React, {useState} from 'react';
import {Link, Outlet} from 'react-router-dom';

function App() {
  const [jwtToken, setJwtToken] = useState('');

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1 className='mt-3'>
            Go watch a movies
          </h1>
        </div>
        <div className='col text-end'>
          {jwtToken === '' ? (
            <Link
              to='/login'
              className='btn btn-success mt-4'
            >
              <span>Login</span>
            </Link>
          ) : (
            <a
              href='#!'
              className='btn btn-danger mt-4'
            >
              Logout
            </a>
          )}
        </div>
      </div>
      <hr className='mb-3' />
      <div className='row'>
        <div className='col-md-2'>
          <nav>
            <div className='list-group'>
              <Link
                to='/'
                className='list-group-item list-group-item-action'
              >
                Home
              </Link>
              <Link
                to='/movies'
                className='list-group-item list-group-item-action'
              >
                Movies
              </Link>
              <Link
                to='/genres'
                className='list-group-item list-group-item-action'
              >
                Genres
              </Link>
              {jwtToken !== '' && (
                <>
                  <Link
                    to='/admin/movies/0'
                    className='list-group-item list-group-item-action'
                  >
                    Add Movie
                  </Link>
                  <Link
                    to='/manage-catalogue'
                    className='list-group-item list-group-item-action'
                  >
                    Manage Catalogue
                  </Link>
                  <Link
                    to='/graphql'
                    className='list-group-item list-group-item-action'
                  >
                    Graphql
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
        <div className='col-md-10'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
