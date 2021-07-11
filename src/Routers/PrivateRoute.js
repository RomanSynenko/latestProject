import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { authSelector } from '../redux/auth';

const PrivateRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isAuthenticated = useSelector(authSelector.getIsAuthenticated);

  return (
    < Route
      {...routeProps}
      render={props =>
        isAuthenticated ? (<Component {...props} />) : (<Redirect to={redirectTo} />)

      }
    />
  )
};


export default PrivateRoute;