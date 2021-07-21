import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperation } from '../redux/auth';
import Pages from '../Routers/Routers';

import Container from './Container';
import Footer from './Footer';
import Header from './header';
import NavState from './BurgerMenu/context/navState';
import MainMenu from './BurgerMenu/MainMenu';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperation.getCurrentUser())
  }, [dispatch]);

  return (
    <>
      <NavState>
        <MainMenu />
      </NavState>
      <Header />
      <Container>
        <Pages />
      </Container>
      <Footer />
    </>
  );
};

export default App;
