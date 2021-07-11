import React, { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Loader from '../Components/Loader';



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

const Pages = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <PublicRoute path="/" exact component={HomePage} />
        <PublicRoute
          path="/Contacts"
          component={Contacts}
          redirectTo="/contacts"
        />
        <PrivateRoute
          path="/MainPage"
          component={MainPage}
          restricted
          redirectTo="/MainPage"
        />
        <PrivateRoute
          path="/UsefulResources"
          component={UsefulResources}
          restricted
          redirectTo="/UsefulResourcesPage"
        />
      </Switch>
    </Suspense>
  );
};

export default Pages;
