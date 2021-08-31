import React from 'react';
const axios = require('axios');
import AddQuote from './AddQuote.jsx';
import RandomQuote from './RandomQuote.jsx';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      quote: 'This is state'
    }
    this.handleQuoteGeneration = this.handleQuoteGeneration.bind(this);
  }

  handleQuoteGeneration() {
    axios.get('http://localhost:3000/quote/')
      .then((res) => {
        this.setState({ quote: res.data })
      })
      .catch(err => console.log(err))
  }
  componentDidMount() {
    this.handleQuoteGeneration();
  };

  render() {
    return (
      <div>
        <h1>Random Quote Generator</h1>
        <input type="submit" value="Generate Random Quote" onClick={()=> this.handleQuoteGeneration()} />
        <RandomQuote quote={this.state.quote} handleQuoteGeneration={this.handleQuoteGeneration} />
        <AddQuote />
      </div>
    )
  }

};

export default App;
