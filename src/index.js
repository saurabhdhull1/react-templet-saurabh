import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { BrowserRouter } from './routes';
import "./App.css";

ReactDOM.render(
  <RouterProvider router={BrowserRouter} />,
  document.getElementById('root')
);
