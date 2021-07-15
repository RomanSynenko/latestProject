import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperation } from '../redux/auth';
import Pages from '../Routers/Routers';

import Container from './Container';
import Footer from './Footer';
import Header from './header';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperation.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container>
        <Pages />
      </Container>
      <Footer />
    </>
  );
};

export default App;
