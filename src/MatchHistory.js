import React from 'react';
import ProfileUtil from './ProfileUtil.js';

export class MatchHistory extends React.Component {

  render() {
    return (
      <div className="overview-match-history">
        <div className="overview-other-title">
          Match History
        </div>
        <table>
          <tbody>
            <tr>
              <th>Timestamp</th>
              <th>Result</th>
              <th>Seat</th>
              <th>Players</th>
              <th>Dan</th>
              <th>Rating</th>
              <th>Score</th>
              <th></th>
            </tr>
            {this.props.hanchan.map(
              hanchan => {
                return (
                  <MatchHistoryRow 
                    key={hanchan.id} 
                    hanchan={hanchan}
                    username={this.props.username}
                    usernameHandler={this.props.usernameHandler}
                  />
                )
              }
            )}
          </tbody>
        </table>
      </div>
    )
  }

}

export class MatchHistoryRow extends React.Component {

  getPlacementStrings(hanchan, username) {
    let placement = 0;
    let fourthLoss = 0;

    for (let i = 0; i < hanchan.players.length; i++) {
      if (hanchan.players[i].username === username) {
        placement = hanchan.players[i].placement;
        fourthLoss = 135 + 15 * (hanchan.players[i].dan - 16);
      }
    }
    
    switch(placement) {
      case 0:
        return ['1st', '+90pt'];
      case 1:
        return ['2nd', '+45pt'];
      case 2:
        return ['3rd', '+-0pt'];
      case 3:
        return ['4th', '-' + fourthLoss.toString() + 'pt'];
      default:
        return '';
    }
  }

  getFormattedTimestamp() {
    let date = this.props.hanchan.timestamp.split(" ");
    return (
      <ul>
        <li>{date[0]}</li>
        <li>{date[1]}</li>
      </ul>
    )
  }

  getFormattedPlacement() {
    let strings = this.getPlacementStrings(this.props.hanchan, this.props.username);

    if (strings[1][0] === '-') {
      return (
        <ul>
        <li className="overview-match-history-placement">{strings[0]}</li>
        <li className="overview-match-history-minus-pt-swing">
          <small>{strings[1]}</small>
        </li>
      </ul>
      )
    } else if (strings[1][1] === '-') {
      return (
        <ul>
          <li className="overview-match-history-placement">{strings[0]}</li>
          <li><small>{strings[1]}</small></li>
        </ul>
      )
    } else {
      return (
        <ul>
          <li className="overview-match-history-placement">{strings[0]}</li>
          <li className="overview-match-history-plus-pt-swing">
            <small>{strings[1]}</small>
          </li>
        </ul>
      )
    }
  }

  getFormattedPlayers() {
    return (
      <ul>
        {this.props.hanchan.players.map(
          player => {
            if (player.username === this.props.username) {
              return (
                <li>
                  <a 
                    href="#" 
                    onClick={() => this.props.usernameHandler(player.username)}
                  >
                    <strong>{player.username}</strong>
                  </a>
                </li>
              )
            } else {
              return (
                <li>
                  <a 
                    href="#" 
                    onClick={() => this.props.usernameHandler(player.username)}
                  >
                    {player.username}
                  </a>
                </li>
              )
            }
          }
        )}
      </ul>
    )
  }

  getFormattedDans() {
    return (
      <ul>
        {this.props.hanchan.players.map(
          player => {
            if (player.username === this.props.username) {
              return (
                <li>
                  <strong>{ProfileUtil.getDanString(player.dan)}</strong>
                </li>
              )
            } else {
              return (
                <li>{ProfileUtil.getDanString(player.dan)}</li>
              )
            }
          }
        )}
      </ul>
    )
  }

  getFormattedRating() {
    return (
      <ul>
        {this.props.hanchan.players.map(
          player => {
            if (player.username === this.props.username) {
              return (
                <li>
                  <strong>R{Math.round(player.rating)}</strong>
                </li>
              )
            } else {
              return (
                <li>R{Math.round(player.rating)}</li>
              )
            }
          }
        )}
      </ul>
    )
  }

  getFormattedSeats() {
    return (
      <ul>
        {this.props.hanchan.players.map(
          player => {
            if (player.username === this.props.username) {
              return (
                <li>
                  <strong>{ProfileUtil.getSeatString(player.seat)}</strong>
                </li>
              )
            } else {
              return (
                <li>{ProfileUtil.getSeatString(player.seat)}</li>
              )
            }
          }
        )}
      </ul>
    )
  }

  getFormattedScores() {
    return (
      <ul>
        {this.props.hanchan.players.map(
          player => {
            if (player.username === this.props.username) {
              return (
                <li>
                  <strong>{player.score}</strong>
                </li>
              )
            } else {
              return (
                <li>{player.score}</li>
              )
            }
          }
        )}
      </ul>
    )
  }

  render() {
    return (
      <tr>
        <td>{this.getFormattedTimestamp()}</td>
        <td>{this.getFormattedPlacement()}</td>
        <td>{this.getFormattedSeats()}</td>
        <td>{this.getFormattedPlayers()}</td>
        <td>{this.getFormattedDans()}</td>
        <td>{this.getFormattedRating()}</td>
        <td>{this.getFormattedScores()}</td>
        <td><a href={this.props.hanchan.tenhou_log}>Replay</a></td>
      </tr>
    )
  }

}