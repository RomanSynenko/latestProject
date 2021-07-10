import { lazy } from 'react';

export const mainRoutes = [
  {
    name: 'Главная',
    path: '/',
    exact: true,
    component: lazy(() =>
      import('../pages/HomePage' /* webpackChunkName: 'HomePage'*/),
    ),
  },
  {
    name: 'Полезные материалы',
    path: '/useful-info',
    exact: true,
    component: lazy(() =>
      import('../pages/UsefulInfo' /* webpackChunkName: 'UsefulInfo'*/),
    ),
  },
  {
    name: 'Контакты',
    path: '/contact',
    exact: false,
    component: lazy(() =>
      import('../pages/ContactPage' /* webpackChunkName: 'ContactPage'*/),
    ),
  },
  {
    name: 'sign up',
    path: '/signup',
    exact: false,
    component: lazy(() =>
      import('../pages/AuthPage' /* webpackChunkName: 'AuthPage'*/),
    ),
  },
  {
    name: 'sign in',
    path: '/signip',
    exact: false,
    component: lazy(() =>
      import('../pages/AuthPage' /* webpackChunkName: 'AuthPage'*/),
    ),
  },
];
