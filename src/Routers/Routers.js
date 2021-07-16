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
  () =>
    import('../pages/MainPage') /* webpackChunkName: "MainPage" */,
);
const Contacts = lazy(
  () => import('../pages/ContactsPage') /* webpackChunkName: "ContactsPage" */,
);
const UsefulResources = lazy(
  () => import('../pages/UsefulResourcesPage') /* webpackChunkName: "UsefulResourcesPage" */,
);
const TheoryTestsPage = lazy(
  () => import('../pages/TheoryTestsPage') /* webpackChunkName: "TheoryTestsPage" */,
);
const PracticeTestsPage = lazy(
  () => import('../pages/PracticeTestsPage.js') /* webpackChunkName: "PracticeTestsPage" */,
);

const Pages = () => {
  const isAuthenticated = useSelector(authSelector.getIsAuthenticated);
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {!isAuthenticated && (<PublicRoute path="/" exact component={HomePage} />)}
        <PublicRoute
          path="/contacts"
          component={Contacts}
          redirectTo="/"
        />
        <PublicRoute
          path="/tests-theory"
          component={TheoryTestsPage}
          redirectTo="/"
        />
         <PublicRoute
          path="/tests-practice"
          component={PracticeTestsPage}
          redirectTo="/"
        />
        <PrivateRoute
          path="/"
          exact component={MainPage}
          restricted
          redirectTo="/"
        />
        <PrivateRoute
          path="/UsefulResources"
          component={UsefulResources}
          restricted
          redirectTo="/"
        />
      </Switch>
    </Suspense>
  );
};

export default Pages;
