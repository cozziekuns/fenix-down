import React from 'react';
import Chart from 'chart.js';

import { MatchHistory } from './MatchHistory.js'
import Profile from './Profile.js';
import OverviewStats from './OverviewStats.js';
import PlacementGraph from './PlacementGraph.js';
import ScoreGraph from './ScoreGraph.js';
import RatingGraph from './RatingGraph.js';
import ProfileSearch from './ProfileSearch.js';
import './App.css';

Chart.defaults.global.legend.display = false;
Chart.defaults.global.tooltips.enabled = false;

let username = 'liebe';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      hanchan: [],
      username: username,
    };
    this.updateUsernameHandler = this.updateUsernameHandler.bind(this);
  }

  fetchHanchan() {
    fetch('https://houou-db.herokuapp.com/player/' + this.state.username + '/match_history')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            error: false,
            hanchan: result.hanchan,
          });
        }
      )
  }

  componentDidMount() {
    this.fetchHanchan();
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.username !== this.state.username) {
      this.fetchHanchan();
    }
  }

  updateUsernameHandler(username) {
    this.setState({username: username});
  }

  render() {
    return (
      <div className="App">
        <Profile
          username={this.state.username}
          usernameHandler={this.updateUsernameHandler}
        />
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
          <PlacementGraph 
            hanchan={this.state.hanchan}
            username={this.state.username}
          />
          <ScoreGraph
            hanchan={this.state.hanchan}
            username={this.state.username}
          />
          <RatingGraph
            hanchan={this.state.hanchan}
            username={this.state.username}
          />
        </div>
        <div className="overview-other-container">
          <MatchHistory
            hanchan={this.state.hanchan}
            username={this.state.username} 
            usernameHandler={this.updateUsernameHandler}
          />
          <OverviewStats />
        </div>
      </div>
    );
  }

}