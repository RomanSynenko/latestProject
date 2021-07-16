import React, { useEffect, useState, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Chart } from 'react-google-charts';
import { ReactComponent as IconCat } from '../img/cat.svg';
import App from '../Components/Loader';
import './styles/results.scss';

const Results = () => {
  const [results, setResults] = useState(0);
  const [error, serError] = useState(0);
  const refDiv = useRef(null);
  const history = useHistory();
  const toGo = useLocation().state?.toGo;

  useEffect(() => {
    if (toGo === 'QA') {
    }

    if (toGo === 'Theory') {
    }
  });

  const handleClick = () => {
    history.push('/tests');
  };

  return (
    <div className="resultsContainer">
      <div className="resultsWrapTitle">
        <h1 className="resultsTitle">Results</h1>
        <p className="resultsTestName">{`[name of test_]`}</p>
      </div>
      <Chart
        width={'100%'}
        height={'300px'}
        chartType="PieChart"
        loader={
          <div>
            <App />
          </div>
        }
        data={[
          ['Task', 'Hours per Day'],
          ['Correct', 75],
          ['Incorrect', 25],
        ]}
        options={{
          title: 'My Result Test',
          is3D: true,
        }}
        rootProps={{ 'data-testid': '2' }}
      />

      <div className="resultsWrapAnswers">
        <p className="resultsCorrect">Correct answers - 6</p>
        <p>Incorrect answers - 6</p>
      </div>

      <div className="resultsCats">
        <IconCat />
      </div>

      <p className="resultsText">Not bad!</p>
      <p className="resultsLastText">
        But you still need to learn some materials.
      </p>

      <button type="button" className="btnTryAgain" onClick={handleClick}>
        Try again
      </button>
    </div>
  );
};

export default Results;
