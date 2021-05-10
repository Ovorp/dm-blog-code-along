import React from 'react';
import { Route } from 'react-router-dom';

const routes = (
  <div>
    <Route
      path="/"
      render={() => {
        return <h1>Hello, World!</h1>;
      }}
    />
  </div>
);

export default routes;
