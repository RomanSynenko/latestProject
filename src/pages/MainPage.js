import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './styles/MainPage.module.css';

const MainPage = () => {
  const history = useHistory();
  const handleClickQa = () => {
    history.push({
      pathname: '/tests',
      state: {
        toGo: 'QA technical training',
      },
    });
  };

  const handleClickTheory = () => {
    history.push({
      pathname: '/tests',
      state: {
        toGo: 'Testing theory',
      },
    });
  };
  return (
    <>
      <div className={styles.wrap}>
        <h2 className={styles.title}>
          “Regression testing. What is it? If the system compiles, that's good,
          if it boots, that's great!”
        </h2>

        <h3 className={styles.subtitle}>Linus Torvalds</h3>
        <p className={styles.text}>Linux kernel creator, hacker, 1969</p>
        <div className={styles.wrapButton} >
          <button className={`${styles.btn} ${styles.buttonBlue}`} type="button" onClick={handleClickQa}>
            <span className={styles.textQa}>QA technical training</span> 
          </button>

          <button className={`${styles.btn} ${styles.buttonOrange}` } type="button" onClick={handleClickTheory}>
           <span className={styles.textTheory}>Testing theory</span> 
          </button>
        </div>
      </div>
    </>
  );
};

export default MainPage;
