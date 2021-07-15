import React, { useEffect, useState, useRef } from 'react';
import { GoogleCharts } from 'google-charts';
import './styles/results.scss';
import { grey } from 'chalk';

const Results = () => {
  const [results, setResults] = useState(0);
  const [error, serError] = useState(0);
  const refDiv = useRef(null);

  useEffect(() => {});

  GoogleCharts.load(drawChart);

  function drawChart() {
    const data = GoogleCharts.api.visualization.arrayToDataTable([
      ['Chart thing', 'Chart amount'],
      ['Correct', 74],
      ['Incorrect', 26],
    ]);

    const pie_1_chart = new GoogleCharts.api.visualization.PieChart(
      refDiv.current,
    );

    pie_1_chart.draw(data);
  }

  return (
    <div className="resultsContainer">
      <h1 className="resultsTitle">Results</h1>
      <div
        id="chart1"
        ref={refDiv}
        style={{ height: 500, background: '#E5E5E5' }}
      ></div>
    </div>
  );
};

export default Results;
