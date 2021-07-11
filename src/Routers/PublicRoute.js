import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { authSelector } from '../redux/auth';

const PublicRoute = ({
  component: Component,
  redirectTo,
  ...routeProps
}) => {
  const isAuthenticated = useSelector(authSelector.getIsAuthenticated);
  return (
    < Route
      {...routeProps}
      render={props =>
        isAuthenticated && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
};


export default PublicRoute;
