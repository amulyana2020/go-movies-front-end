import React from 'react';
import {useRouteError} from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className='conatiner'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 text-center'>
          <h1 className='text-danger'>
            Ups... terjadi kesalahan !
          </h1>
          <p>
            <span>
              {error.message || error.statusText}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
