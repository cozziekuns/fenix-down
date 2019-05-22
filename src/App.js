import React from 'react';
import Chart from 'chart.js';
import './App.css';

Chart.defaults.global.tooltips.enabled = false;

class App extends React.Component {

  createPlacementGraph() {
    const canvas = this.refs.placementCanvas;
    const ctx = canvas.getContext('2d');

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          datasets: [{
              label: 'Placement',
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              data: [1, 1, 3, 3, 1, 3, 4, 3, 2, 2]
          }]
      },
  
      // Configuration options go here
      options: {
        elements: {
          line: {
            tension: 0 // disables bezier curves
          },
        },
        scales: {
          xAxes: [{
            ticks: {
              display: false,
            }
          }],
          yAxes: [{
            ticks: {
              min: 1,
              max: 4,
              stepSize: 1,
              reverse: true,
            }
          }]
        },
      }
    });
  }

  createScoreGraph() {
    const canvas = this.refs.scoreCanvas;
    const ctx = canvas.getContext('2d');

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          datasets: [{
              label: 'Score',
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              data: [30200, 65000, 18300, 21800, 42600, 18600, 20100, 18200, 29100, 28700],
          }]
      },

      options: {
        scales: {
          xAxes: [{
            ticks: {
              display: false,
            }
          }],
        },
      }
    });
  }

  createRatingGraph() {
    const canvas = this.refs.ratingCanvas;
    const ctx = canvas.getContext('2d');

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          datasets: [{
              label: 'Rating',
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              data: [2130, 2136, 2142, 2140, 2138, 2144, 2142, 2136, 2134, 2136]
          }]
      },

      options: {
        scales: {
          xAxes: [{
            ticks: {
              display: false,
            }
          }],
        },
      }
    });
  }


  componentDidMount() {
    this.createPlacementGraph();
    this.createScoreGraph();
    this.createRatingGraph();
  }

  render() {
    return (
      <div className="App">
        <div className="profile-container">
          <div>
            <ul>
              <li className="profile-name">
                liebe
              </li>
              <li className="profile-dan">
                Dan: <strong>七段</strong>
              </li>
              <li className="profile-rating">
                Rating: <strong>2014R</strong>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="profile-name">
                &nbsp;
              </li>
              <li className="profile-dan">
                Stable Dan: <strong>8.3段</strong>
              </li>
              <li className="profile-rating">
                Total Games: <strong>2014R</strong>
              </li>
            </ul>
          </div>
        </div>
        <nav className="content-nav">
          <ul>
            <li>Overview</li>
            <li>Detailed Stats</li>
            <li>Highlights</li>
            <li>Trends</li>
          </ul>
        </nav>
        <hr className="nav-bar-separator"></hr>
        <div className="overview-graphs-container">
          <div className="overview-graphs-element">
            <div className="overview-graphs-title">Placement</div>
            <canvas ref="placementCanvas" width="288" height="216">
            </canvas>
            <div className="overview-graphs-footer">
              Average: 2.34
            </div>
          </div>
          <div className="overview-graphs-element">
            <div className="overview-graphs-title">Unadjusted Score</div>
            <canvas ref="scoreCanvas" width="288" height="216">
            </canvas>
            <div className="overview-graphs-footer">
              Average: 29400
            </div>
          </div>
          <div className="overview-graphs-element">
            <div className="overview-graphs-title">Rating</div>
            <canvas ref="ratingCanvas" width="288" height="216">
            </canvas>
            <div className="overview-graphs-footer">
              Average: 2136.7
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
