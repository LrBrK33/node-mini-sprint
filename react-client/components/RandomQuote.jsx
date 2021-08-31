import React from 'react';
const axios = require('axios');

export default class RandomQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: this.props.quote,
    }
  }

  handleDelete() {
    //console.log('clicked delete')
    var config = { data: { quote: this.props.quote }};
    axios.delete('http://localhost:3000/quote/', config)
      .catch(err => console.log(err))
    this.props.handleQuoteGeneration();
  }

  render() {
    return (
      <>
      <h2 id="quote">{this.props.quote}</h2>
      <input type="submit" value="Edit" />
      <input type="submit" value="Delete" onClick={() => this.handleDelete()}/>
      </>
    )
  }
}