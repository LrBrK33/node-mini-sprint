const http = require('http');

//headers to allows CORS requests
const headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10
};

const port = 3000;

// TODO: Fill with strings of your favorite quotes :)
const quotes = [
  'Face your fears. Live your dreams.',
  'You miss every shot you don\'t take.',
  'Be the change that you wish to see in the world',
  'Problems are not stop signs, they are guidelines.',
  'The harder I work, the more luck I seem to have.',
];

//Utility Function to return a random integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getRandomQuote() {
  // use getRandomInt to pick number between 0 and quotes length
  var quote = quotes[getRandomInt(0, quotes.length)]
  return quote;
}

const handleRequest = function(req, res) {
  console.log(`Endpoint: ${req.url} Method: ${req.method}`);

  // redirect users to /quote if they try to hit the homepage. This should already work, no changes needed
  if (req.url == '/') {
    console.log('redirecting');
    res.writeHead(301, {...headers, Location: `http://localhost:${port}/quote`}) //redirect to quote
    res.end();
  }

  // GET ONE
  if ((req.url == '/quote/' || req.url == '/quote') && req.method == "GET") {
    var quote = JSON.stringify(getRandomQuote());
    res.writeHead(201);
    res.end(quote)
  }
  // POST/CREATE
  else if ((req.url == '/quote/' || req.url == '/quote') && req.method == "POST") {
    var newQuote = ''
    console.log(newQuote)
    req.on('data', chunk => {
      newQuote += chunk.toString();
      quotes.push(newQuote);
    });
    req.on('end', () => {
      res.writeHead(200);
      res.end('Successfully add quote');
    })

  }

//CATCH ALL ROUTE
  else {
    res.writeHead(404,headers);
    res.end('Page/End Point not found');

  }
}

const server = http.createServer(handleRequest);
server.listen(port);

console.log('Server is running in the terminal!');
console.log(`Listening on http://localhost:${port}`);
