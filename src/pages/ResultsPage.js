import React, { useEffect, useState } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { Chart } from 'react-google-charts';
import { ReactComponent as IconCat } from '../img/cat.svg';
import App from '../Components/Loader';
import {
  getResultPracticeTests,
  getResultTheoryTests,
} from '../services/tests/getResultsTests';
import './styles/results.scss';
import { resetResult } from '../redux/tests/testsSlice';

const Results = () => {
  const [result, setResult] = useState(0);
  const history = useHistory();
  const answers = useSelector(state => state.tests, shallowEqual);
  const toGo = useLocation().state?.toGo;
  const dispatch = useDispatch();

  useEffect(() => {
    if (toGo === 'QA') {
      getResultPracticeTests(answers).then(data => setResult(data));
    }

    if (toGo === 'Theory') {
      getResultTheoryTests(answers).then(data => setResult(data));
    }

    return () => {
      dispatch(resetResult());
    };
  }, [toGo, answers, dispatch]);

  const handleClick = () => {
    history.push({
      pathname: '/tests',
      state: {
        toGo,
      },
    });
  };

  return (
    <div className="resultsContainer">
      <div className="resultsWrapTitle">
        <h1 className="resultsTitle">Results</h1>
        <p className="resultsTestName">{`[name of test_]`}</p>
      </div>

      {result > 0 && (
        <>
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
              ['Correct', result],
              ['Incorrect', 12 - result],
            ]}
            options={{
              title: 'My Result Test',
              is3D: true,
            }}
            rootProps={{ 'data-testid': '2' }}
          />
          <div className="resultsWrapAnswers">
            <p className="resultsCorrect">{`Correct answers - ${result}`}</p>
            <p>{`Incorrect answers - ${12 - result}`}</p>
          </div>

          <div className="resultsCats">
            <IconCat />
          </div>

          <p className="resultsText">Not bad!</p>
          <p className="resultsLastText">
            But you still need to learn some materials.
          </p>
        </>
      )}

      <button type="button" className="btnTryAgain" onClick={handleClick}>
        Try again
      </button>
    </div>
  );
};

export default Results;
