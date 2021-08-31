import React from 'react';
const axios = require('axios');

class AddQuote extends React.Component {
  constructor () {
    super()
    this.state = {
      quote: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({quote: e.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    var sendQuote = JSON.stringify({ quote: this.state.quote })
    this.setState({ quote: '' })

    axios.post('http://localhost:3000/quote/', sendQuote)
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
          <input type="text" value={this.state.quote} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit New Quote" />
      </form>
      </div>
    )
  };
};

export default AddQuote;
