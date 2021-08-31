import React from 'react';
const axios = require('axios');

export default class EditQuote extends React.Component {
  constructor (props) {
    super(props)
    console.log(props);
    this.state = {
      quote: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ quote: e.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    var sendQuote = { editedQuote: this.state.quote, currentQuote: this.props.quote
    }
    this.setState({ quote: '' })
    axios.put('http://localhost:3000/quote/', sendQuote)
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
        <input type="submit" value="Submit Edit" />
      </form>
      </div>
    )
  };
};
