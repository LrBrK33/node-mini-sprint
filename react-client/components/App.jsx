import React from 'react';
const axios = require('axios');
import AddQuote from 'AddQuote.jsx'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      quote: 'This is state'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // get quote from server
    axios.get('http://localhost:3000/quote/')
      .then((res) => {
        this.setState({ quote: res.data })
      })
      .catch(err => console.log(err))
  };

  handleSubmit () {

  }

  render() {
    return (
      <div>
        <h1>Random Quote Generator</h1>
        <h2 id="quote">{this.state.quote}</h2>
        <AddQuote />
      </div>
    )
  }

};

export default App;
