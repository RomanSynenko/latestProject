import React, { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Loader from '../Components/Loader';
import { useSelector } from 'react-redux';
import { authSelector } from '../redux/auth';

const HomePage = lazy(
  () => import('../pages/HomePage') /* webpackChunkName: "HomePage" */,
);
const MainPage = lazy(
  () => import('../pages/MainPage') /* webpackChunkName: "MainPage" */,
);
const Contacts = lazy(
  () => import('../pages/ContactsPage') /* webpackChunkName: "ContactsPage" */,
);
const UsefulResources = lazy(
  () =>
    import('../pages/UsefulResourcesPage') /* webpackChunkName: "UsefulResourcesPage" */,
);

const ResultsPage = lazy(
  () => import('../pages/ResultsPage') /* webpackChunkName: "ResultsPage" */,
);

const TestsPage = lazy(
  () => import('../pages/TestsPage.js') /* webpackChunkName: "TestsPage" */,
);

const Pages = () => {
  const isAuthenticated = useSelector(authSelector.getIsAuthenticated);
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {!isAuthenticated && (
          <>
            <PublicRoute path="/login" component={HomePage} restricted />
            <PublicRoute path="/" redirectTo="/login" component={HomePage} restricted />
            <PublicRoute path="/register" component={Register} restricted redirectTo="/login" />
          </>
        )}
        <PublicRoute path="/contacts" component={Contacts} redirectTo="/" />
        <PrivateRoute path="/tests" component={TestsPage} redirectTo="/" />

        <PrivateRoute
          path="/"
          exact
          component={MainPage}
          restricted
          redirectTo="/"
        />
        <PrivateRoute
          path="/UsefulResources"
          exact
          component={UsefulResources}
          restricted
          redirectTo="/"
        />
        <PrivateRoute
          path="/results"
          exact
          component={ResultsPage}
          restricted
          redirectTo="/"
        />
      </Switch>
    </Suspense>
  );
};

export default Pages;
