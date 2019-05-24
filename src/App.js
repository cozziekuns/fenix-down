import React from 'react';
import Chart from 'chart.js';
import './App.css';

Chart.defaults.global.legend.display = false;
Chart.defaults.global.tooltips.enabled = false;

class App extends React.Component {

  createPlacementGraph() {
    const canvas = this.refs.placementCanvas;
    const ctx = canvas.getContext('2d');

    new Chart(ctx, {
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

    new Chart(ctx, {
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

    new Chart(ctx, {
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
                Dan: <strong>七段</strong> <small>(1670 / 2800pt)</small>
              </li>
              <li className="profile-rating">
                Rating: <strong>R2014</strong>
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
                Total Games: <strong>2257</strong>
              </li>
            </ul>
          </div>
        </div>
        <nav className="content-nav">
          <ul>
            <li className="content-nav-highlight">Overview</li>
            <li><a href="#">Lifetime Stats</a></li>
            <li><a href="#">Highlights</a></li>
            <li><a href="#">Trends</a></li>
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
        <div className="overview-other-container">
          <div className="overview-match-history">
            <div className="overview-other-title">
              Match History
            </div>
            <table>
              <tr>
                <th>Result</th>
                <th>Player</th>
                <th>Dan</th>
                <th>Rating</th>
                <th>Seat</th>
                <th>Score</th>
                <th></th>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li className="overview-match-history-placement">1st</li>
                    <li><small>+90pt</small></li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li><a href="#">liebe</a></li>
                    <li><a href="#">zeRo</a></li>
                    <li><a href="#">bichen</a></li>
                    <li><a href="#">人生フルゼンツ</a></li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>七段</li>
                    <li>八段</li>
                    <li>∞段</li>
                    <li>天鳳位</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>R2120</li>
                    <li>R2249</li>
                    <li>RX000</li>
                    <li>R2391</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>東</li>
                    <li>南</li>
                    <li>西</li>
                    <li>北</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>38000 (+38.0)</li>
                    <li>31000 (+38.0)</li>
                    <li>19000 (+38.0)</li>
                    <li>12000 (+38.0)</li>
                  </ul>
                </td>
                <td><a href="#">Replay</a></td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li className="overview-match-history-placement">1st</li>
                    <li><small>+90pt</small></li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li><a href="#">liebe</a></li>
                    <li><a href="#">zeRo</a></li>
                    <li><a href="#">bichen</a></li>
                    <li><a href="#">人生フルゼンツ</a></li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>七段</li>
                    <li>八段</li>
                    <li>∞段</li>
                    <li>天鳳位</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>R2120</li>
                    <li>R2249</li>
                    <li>RX000</li>
                    <li>R2391</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>東</li>
                    <li>南</li>
                    <li>西</li>
                    <li>北</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>38000 (+38.0)</li>
                    <li>31000 (+16.0)</li>
                    <li>19000 (-16.0)</li>
                    <li>12000 (-38.0)</li>
                  </ul>
                </td>
                <td><a href="#">Replay</a></td>
              </tr>
            </table>
          </div>
          <div className="overview-misc">
            <div className="overview-other-title">
              Stats
            </div>
            <div className="overview-stats">
              <table>
                <tr>
                  <td>Hand Win Rate:</td>
                  <td className="overview-highlights-value">21.6%</td>
                </tr>
                <tr>
                  <td>Hand Deal-In Rate:</td>
                  <td className="overview-highlights-value">10.9%</td>
                </tr>
                <tr>
                  <td>Riichi Rate:</td>
                  <td className="overview-highlights-value">23.4%</td>
                </tr>
                <tr>
                  <td>Call Rate:</td>
                  <td className="overview-highlights-value">30.9%</td>
                </tr>
              </table>
            </div>
            <div className="overview-other-title">
              Highlights
            </div>
            <div className="overview-highlights">
            <table>
                <tr>
                  <td>Biggest Comeback</td>
                  <td className="overview-highlights-value">45300</td>
                  <td className="overview-highlights-value"><a href="#">Replay</a></td>
                </tr>
                <tr>
                  <td>Biggest Throw</td>
                  <td className="overview-highlights-value">-42000</td>
                  <td className="overview-highlights-value"><a href="#">Replay</a></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
