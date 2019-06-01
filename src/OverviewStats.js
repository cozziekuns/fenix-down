import React from 'react';

export default class OverviewStats extends React.Component {

  render() {
    return (
      <div className="overview-misc">
        <div className="overview-other-title">
          Stats
        </div>
        <div className="overview-stats">
          <table>
            <tbody>
              <tr>
                <td>WIP:</td>
                <td className="overview-highlights-value">WIP%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

};