import React, { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Loader from '../Components/Loader';



const HomePage = lazy(
  () => import('../pages/HomePage') /* webpackChunkName: "HomePage" */,
);
const ContactPage = lazy(
  () =>
    import('../pages/ContactPage') /* webpackChunkName: "ContactPage" */,
);
const Contacts = lazy(
  () => import('../pages/ContactsPage') /* webpackChunkName: "ContactsPage" */,
);


const Pages = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <PublicRoute path="/" exact component={HomePage} />
        <PublicRoute
          path="/Contacts"
          component={Contacts}
          restricted
          redirectTo="/contacts"
        />
      </Switch>
    </Suspense>
  );
};

export default Pages;
