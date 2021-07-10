import { lazy } from 'react';

export const homeRoutes = [
  {
    name: 'test',
    path: '/test',
    exact: false,
    component: lazy(() =>
      import('../Components/home/HomeTest' /* webpackChunkName: 'HomeTest'*/),
    ),
  },
];
