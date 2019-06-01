import React from 'react';
import ProfileUtil from './ProfileUtil.js';
import ProfileSearch from './ProfileSearch.js';

export default class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
    };
  }

  fetchProfile() {
    fetch('https://houou-db.herokuapp.com/player/' + this.props.username + '/profile')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            dan: result.dan,
            rating: result.rating,
            stableDan: result.stable_dan,
            totalGames: result.total_games,
          })
        }
      )
  }

  componentDidMount() {
    this.fetchProfile();
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.username !== this.props.username) {
      this.fetchProfile();
    }
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <div className="profile-container">
          Loading...
        </div>
      )
    }
    return (
      <div className="profile-container">
        <div>
          <ul>
            <li className="profile-name">
              <ProfileSearch 
                username={this.props.username}
                usernameHandler={this.props.usernameHandler}
              />
            </li>
            <li className="profile-dan">
              Dan: <strong>{ProfileUtil.getDanString(this.state.dan)}</strong>&nbsp;
            </li>
            <li className="profile-rating">
              Last Recorded Rating: <strong>R{this.state.rating}</strong>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="profile-name">
              &nbsp;
            </li>
            <li className="profile-dan">
              Stable Dan: <strong>WIP段</strong>
            </li>
            <li className="profile-rating">
              Total Recorded Games: <strong>{this.state.totalGames}</strong>
            </li>
          </ul>
        </div>
      </div>
    );
  }

}