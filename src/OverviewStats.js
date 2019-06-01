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
            </tbody>
          </table>
        </div>
      </div>
    );
  }

};