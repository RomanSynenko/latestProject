import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './header/Header';
import Main from './main/Main';

const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch()
  // }, [dispatch])

  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
