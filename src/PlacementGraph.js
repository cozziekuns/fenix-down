import React from 'react';
import Chart from 'chart.js';

export default class PlacementGraph extends React.Component {

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

  getPlacement(hanchan, username) {
    for (let i = 0; i < hanchan.players.length; i++) {
      if (hanchan.players[i].username === username) {
        return hanchan.players[i].placement + 1;
      }
    }

    return null;
  }

  createGraph() {
    const canvas = this.refs.placementCanvas;
    const ctx = canvas.getContext('2d');

    let placements = this.props.hanchan.map(
      hanchan => this.getPlacement(hanchan, this.props.username)
    );

    placements.reverse();

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: new Array(20),
          datasets: [{
              label: 'Placement',
              borderColor: 'rgb(224, 128, 128)',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              data: new Array(20),
          }]
      },
  
      options: {
        scales: {
          xAxes: [{
            ticks: { display: false },
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

  updateGraph() {
    let placements = this.props.hanchan.map(
      hanchan => this.getPlacement(hanchan, this.props.username)
    );
    placements.reverse();

    this.chart.data.datasets[0].data = placements; 
    this.chart.update();
  }

  getAveragePlacement() {
    const placements = this.props.hanchan.map(
      hanchan => this.getPlacement(hanchan, this.props.username)
    );

    const total = placements.reduce((total, curr) => total + curr, 0);
    return (total / placements.length).toFixed(2);
  }

  render() {
    return (
      <div className="overview-graphs-element">
        <div className="overview-graphs-title">Placement</div>
        <canvas ref="placementCanvas" width="288" height="216">
        </canvas>
        <div className="overview-graphs-footer">
          Average: <strong>{this.getAveragePlacement()}</strong>
        </div>
      </div>
    )
  }

}