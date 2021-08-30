import React from 'react';
const axios = require('axios');

class AddQuote extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }
  handleSubmit(event) {
    event.preventDefault();

  }
  render() {
    return (
      <form>
        <input type="text">
        <button id="submit" onClick={this.handleSubmit}>Submit</button>
        <p id="response"></p>
      </form>
    )
  };
};

export default AddQuote;