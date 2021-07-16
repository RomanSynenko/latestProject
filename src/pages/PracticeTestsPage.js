import React, { useState, useEffect } from 'react';
import {getPracticeTests, getResultPracticeTests} from '../services/tests';
import styles from './TestsPage.module.css';

const PracticeTestsPage = () => {
  const [tests, setTests] = useState([]);
  const [count, setCount] = useState(1);
  const [resultAnswers, setResultAnswers] = useState([]);

  useEffect(() => {
    getPracticeTests().then(data => {
      setTests(data);
    });
  }, []);

  const handleChange = e => {
    const { name, value, checked } = e.currentTarget;
    const result = {
      id: name,
      answer: value
    };

    if(resultAnswers.some(el=>el.id===name)){
      return setResultAnswers(prev=>{
        let index=0;
        prev.forEach((el, idx)=>{
          if(el.id===name){
            index=idx;
          }
        })
        prev.splice(index, 1, {...result})        
        return [...prev]
      })
    }else{
      setResultAnswers(prev=>[...prev, result])
    }; 

    
  };

  const getNext = () => {
    setCount(count + 1);
  };

  const getPrevious = () => {
    setCount(count - 1);
  };

  const sendingResult=()=>{
    getResultPracticeTests(resultAnswers);
  }

  return (
    <>
      <div className={styles.wrap}>
        <h3>[ Testing practice_ ]</h3>
        <button className={styles.btnFinish} type="button"  onClick={sendingResult} disabled={resultAnswers.length!==12}>
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
                          // checked={getChecked()}
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
  );
};

export default PracticeTestsPage;
