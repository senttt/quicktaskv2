import React from 'react';
import './DataAnalysis.css';

function DataAnalysis() {
  return (
    <div className="main">
      <header>
        <h1> Data Analysis </h1>
      </header>
      <center>
        <div className="chart-container">
          <div className="chart">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <br />
          <br />
          <div className="report-chart">
            <div className="chart-container">
              <div className="chart-area">
                <br />
                <input type="button" className="anybutton" id="myab" value="Create Chart" />
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default DataAnalysis;
