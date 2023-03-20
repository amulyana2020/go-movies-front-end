import React from 'react';
import Home from './components/Home';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1 className='mt-3'>
            Go watch a movies
          </h1>
        </div>
        <div className='col text-end'>
          <a
            href='#!'
            className='btn btn-success mt-4'
          >
            <span>Login</span>
          </a>
        </div>
      </div>
      <hr className='mb-3' />
      <div className='row'>
        <div className='col-md-2'>
          <nav>
            <div className='list-group'>
              <a
                href='#!'
                className='list-group-item list-group-item-action'
              >
                Home
              </a>
              <a
                href='#!'
                className='list-group-item list-group-item-action'
              >
                Movies
              </a>
              <a
                href='#!'
                className='list-group-item list-group-item-action'
              >
                Genres
              </a>
              <a
                href='#!'
                className='list-group-item list-group-item-action'
              >
                Add Movie
              </a>
              <a
                href='#!'
                className='list-group-item list-group-item-action'
              >
                Manage Catalog
              </a>
              <a
                href='#!'
                className='list-group-item list-group-item-action'
              >
                Graphql
              </a>
            </div>
          </nav>
        </div>
        <div className='col-md-10'>
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
