import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ tests,  }) => {
  return (
    <ul>
      {tests.map(({ _id, question, answers }) => (
        <li key={_id}>
          <div className={styles.Modal}>
            <h3>{question}</h3>
            <ul>
              {answers.map(answer => <li>
                  <input type="radio" name={_id}/>
                  <span>{answer}</span>                  
                </li>
              )}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Modal;
