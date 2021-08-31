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
    var newQuote = [Object.values(req.body)]; //Object.values creates an array with object's values
    console.log('the quote', newQuote);
    db.addQuote(newQuote)
    console.log('post query sent')
    res.status(200).header(headers).send('Successfully added quote')
})

app.listen(port, ()=> {
  console.log(`Listening at http://localhost:${port}`)
});


// const handleRequest = function(req, res) {
//   console.log(`Endpoint: ${req.url} Method: ${req.method}`);

//   // redirect users to /quote if they try to hit the homepage. This should already work, no changes needed
//   if (req.url == '/') {
//     console.log('redirecting');
//     res.writeHead(301, {...headers, Location: `http://localhost:${port}/quote`}) //redirect to quote
//     res.end();
//   }

//   // GET ONE
//   if ((req.url == '/quote/' || req.url == '/quote') && req.method == "GET") {
//     var quote = getRandomQuote();
//     res.writeHead(201, headers);
//     res.end(quote)
//   }

//   // POST/CREATE
//   else if ((req.url == '/quote/' || req.url == '/quote') && req.method == "POST") {
//     var newQuote = ''
//     console.log(newQuote)
//     req.on('data', chunk => {
//       newQuote += chunk.toString();
//       quotes.push(newQuote);
//     });
//     req.on('end', () => {
//       res.writeHead(200, headers);
//       res.end('Successfully added quote');
//     })

//   }

// //CATCH ALL ROUTE
//   else {
//     res.writeHead(404,headers);
//     res.end('Page/End Point not found');

//   }
// }

// const server = http.createServer(handleRequest);
// server.listen(port);

// console.log('Server is running in the terminal!');
// console.log(`Listening on http://localhost:${port}`);
