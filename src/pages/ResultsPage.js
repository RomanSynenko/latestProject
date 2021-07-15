import React, { useEffect, useState, useRef } from 'react';
import { Chart } from 'react-google-charts';
import './styles/results.scss';

const Results = () => {
  const [results, setResults] = useState(0);
  const [error, serError] = useState(0);
  const refDiv = useRef(null);

  useEffect(() => {});

  return (
    <div className="resultsContainer">
      <h1 className="resultsTitle">Results</h1>
      <Chart
        width={'100%'}
        height={'300px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Task', 'Hours per Day'],
          ['Correct', 75],
          ['Incorrect', 25],
        ]}
        options={{
          title: 'My Daily Activities',
          is3D: true,
        }}
        rootProps={{ 'data-testid': '2' }}
      />
    </div>
  );
};

export default Results;
