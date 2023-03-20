import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App';
import EditMovie from './components/EditMovie';
import Genres from './components/Genres';
import Graphql from './components/Graphql';
import Home from './components/Home';
import Login from './components/Login';
import ManageCatalogue from './components/ManageCatalogue';
import Movies from './components/Movies';
import Movie from './components/Movies';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />}, //default
      {
        path: '/movies',
        element: <Movie />,
      },
      {
        path: '/admin/movies/0',
        element: <EditMovie />,
      },
      {
        path: '/genres',
        element: <Genres />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/manage-catalogue',
        element: <ManageCatalogue />,
      },
      {
        path: '/edit-movie',
        element: <EditMovie />,
      },
      {
        path: '/graphql',
        element: <Graphql />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
