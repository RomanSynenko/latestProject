import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { mainRoutes } from '../../routes/mainRoutes';

const Main = () => {
  return (
    <main>
      <Suspense fallback={<h2>...loading</h2>}>
        <Switch>
          {mainRoutes.map(({ path, exact, component }) => (
            <Route path={path} exact={exact} component={component} key={path} />
          ))}
        </Switch>
      </Suspense>
    </main>
  );
};

export default Main;
