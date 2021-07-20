import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { getPracticeTests, getTheoryTests } from '../services/tests/getTests';
import styles from './styles/TestsPage.module.css';
import { resultTest } from '../redux/tests/testsSlice';
import App from '../Components/Loader';

const TestsPage = () => {
  const [tests, setTests] = useState([]);
  const [count, setCount] = useState(1);
  const resultAnswers = useSelector(state => state.tests);
  const dispatch = useDispatch();
  const history = useHistory();
  const toGo = useLocation().state?.toGo;

  useEffect(() => {
    if (toGo === 'QA technical training') {
      getPracticeTests().then(data => {
        setTests(data);
      });
    }

    if (toGo === 'Testing theory') {
      getTheoryTests().then(data => {
        setTests(data);
      });
    }
  }, [toGo, dispatch]);

  const handleChange = e => {
    const { name: id, value: answer } = e.currentTarget;

    const result = {
      id,
      answer,
    };

    dispatch(resultTest(result));
  };

  const getNext = () => {
    setCount(count + 1);
  };

  const getPrevious = () => {
    setCount(count - 1);
  };

  const sendingResult = () => {
    history.push({
      pathname: '/results',
      state: {
        toGo,
      },
    });
  };

  return (
    <div className='begin-test'>
      {tests.length === 0 && <App />}
      {tests.length > 0 && (
        <>
          <div className={styles.wrap}>
            <h3>[ Testing practice_ ]</h3>
            <button
              className={styles.btnFinish}
              type="button"
              onClick={sendingResult}
              disabled={resultAnswers.length !== 12}
            >
              Finish test
            </button>
          </div>
          <div>
            {tests.map(({ _id, question, answers }, idx) => {
              return (
                count > 0 &&
                count < 13 &&
                idx + 1 === count && (
                  <div key={_id}>
                    <div className={styles.modal}>
                      <p className={styles.number}>
                        Question {count}/{tests.length}
                      </p>
                      <h3 className={styles.question}>{question}</h3>
                      <ul>
                        {answers.map(answer => (
                          <li className={styles.item} key={answer}>
                            <input
                              onChange={handleChange}
                              className={styles.input}
                              type="radio"
                              name={_id}
                              value={answer}
                            />
                            <span>{answer}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              );
            })}
          </div>
          <div className={styles.wrap}>
            <button
              className={styles.btnPrevious}
              type="button"
              onClick={getPrevious}
              disabled={count < 2}
            >
              Previous question
            </button>
            <button
              className={styles.btnNext}
              type="button"
              onClick={getNext}
              disabled={count > 11}
            >
              Next question
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TestsPage;
