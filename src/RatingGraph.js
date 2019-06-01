import React from 'react';
import Chart from 'chart.js';

export default class RatingGraph extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
    };
  }

  componentDidUpdate() {
    this.createGraph();
  }

  getRating(hanchan, username) {
    for (let i = 0; i < hanchan.players.length; i++) {
      if (hanchan.players[i].username === username) {
        return hanchan.players[i].rating;
      }
    }

    return null;
  }

  createGraph() {
    const canvas = this.refs.scoreCanvas;
    const ctx = canvas.getContext('2d');

    let ratings = this.props.hanchan.map(
      hanchan => this.getRating(hanchan, this.props.username)
    );

    ratings.reverse();

    new Chart(ctx, {
      type: 'line',
      data: {
          labels: new Array(20),
          datasets: [{
              label: 'Rating',
              borderColor: 'rgb(224, 128, 128)',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              data: ratings,
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

  getAverageRating() {
    const ratings = this.props.hanchan.map(
      hanchan => this.getRating(hanchan, this.props.username)
    );

    const total = ratings.reduce((total, curr) => total + curr, 0);
    return (total / ratings.length).toFixed(2);
  }

  render() {
    return (
      <div className="overview-graphs-element">
        <div className="overview-graphs-title">Rating</div>
        <canvas ref="scoreCanvas" width="288" height="216">
        </canvas>
        <div className="overview-graphs-footer">
          Average: <strong>R{this.getAverageRating()}</strong>
        </div>
      </div>
    )
  }

}