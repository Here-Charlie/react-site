import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.js';

import RoboflowContent from './routes/RoboflowContent';

// New react.js navigation does not require making browserContainer to hold different routes. createBrowserRouter function takes one array with objects of our route paths.
const browserRouter = createBrowserRouter([
  {
    path: '/',  
    element: <App />,
    errorElement: <div>404 Not Found (Larry says Hi)</div>,
  },
  {
    path: '/roboflow',
    element: <RoboflowContent />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
  </React.StrictMode>
);
