import React from 'react';

export default class ProfileSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 'liebe'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({ value: props.username })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    fetch('https://houou-db.herokuapp.com/player/' + this.state.value + '/profile')
      .then(res => res.json())
      .then(
        (result) => {
          if (result.error) {
            alert('Player not found: ' + this.state.value);
          } else {
            this.props.usernameHandler(this.state.value);
          }
        }
      )
    
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input 
            type="text" 
            value={this.state.value} 
            onChange={this.handleChange} 
            spellCheck="false"
          />
        </label>
      </form> 
    )
  }

}