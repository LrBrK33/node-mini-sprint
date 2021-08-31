import React from 'react';
import axios from 'axios';
//const axios = require('axios');

class AddQuote extends React.Component {
  constructor () {
    super()
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('clicked');
    var sendQuote = JSON.stringify({ quote: this.state.value })
    this.setState({ value: '' })
    var config = { "headers": {
      'Content-Type': 'application/json'
      }}

    axios.post('http://localhost:3000/quote/', sendQuote, config)
      .then(function (response) {
        console.log('axios response', response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    )
  };
};

export default AddQuote;
