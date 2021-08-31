const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db')
app.use(express.json());
app.use(cors())
const port = 3000;
app.use(express.static('../react-client/dist'))

//headers to allows CORS requests
const headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10,
};

//Utility Function to return a random integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getRandomQuote(quoteArray) {
  // input will be the quote array from getQuote db query
  // use getRandomInt to pick number between 0 and quotes length
  var quote = quoteArray[getRandomInt(0, quoteArray.length)].quote
  return quote;
}

app.get('/', (req, res) => {
  console.log('redirecting');
  res.status(301).send()
});

app.get('/quote/', (req, res) => {
  db.getQuote((results) => {
    var quote = getRandomQuote(results);
    res.status(201).header(headers).send(quote);
  })
});

app.post('/quote/', (req, res) => {
    var newQuote = Object.values(req.body); //Object.values creates an array with object's values
    console.log('the quote', newQuote);
    db.addQuote(newQuote)
    res.status(200).header(headers).send('Successfully added quote')
})

app.delete('/quote/', (req, res) => {
  var quote = Object.values(req.body);
  db.deleteQuote(quote)
  res.status(200).header(headers).send('Successfully deleted quote')
})

app.listen(port, ()=> {
  console.log(`Listening at http://localhost:${port}`)
});
