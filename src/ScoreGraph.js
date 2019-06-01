import React from 'react';
import Chart from 'chart.js';

export default class ScoreGraph extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.createGraph();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.hanchan !== this.props.hanchan) {
      this.updateGraph();
    }
  }

  getScore(hanchan, username) {
    for (let i = 0; i < hanchan.players.length; i++) {
      if (hanchan.players[i].username === username) {
        return hanchan.players[i].score;
      }
    }

    return null;
  }

  createGraph() {
    const canvas = this.refs.scoreCanvas;
    const ctx = canvas.getContext('2d');

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: new Array(20),
          datasets: [{
              label: 'Score',
              borderColor: 'rgb(224, 128, 128)',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              data: new Array(20),
          }],
      },

      options: {
        scales: {
          xAxes: [{
            ticks: { display: false },
          }],
        },
      }
    });
  }

  updateGraph() {
    let scores = this.props.hanchan.map(
      hanchan => this.getScore(hanchan, this.props.username)
    );

    scores.reverse();

    this.chart.data.datasets[0].data = scores; 
    this.chart.update();
  }

  getAverageScore() {
    const scores = this.props.hanchan.map(
      hanchan => this.getScore(hanchan, this.props.username)
    );

    const total = scores.reduce((total, curr) => total + curr, 0);
    return total / scores.length;
  }

  render() {
    return (
      <div className="overview-graphs-element">
        <div className="overview-graphs-title">Unadjusted Score</div>
        <canvas ref="scoreCanvas" width="288" height="216">
        </canvas>
        <div className="overview-graphs-footer">
          Average: <strong>{this.getAverageScore().toString()}</strong>
        </div>
      </div>
    )
  }

}