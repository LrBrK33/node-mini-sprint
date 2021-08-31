var mysql = require('mysql');

connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'quotes'
});

connection.connect();


// queries can go here
const getQuote = (callback) => {
  var queryString = 'SELECT quote FROM quotes'

  connection.query(queryString, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(res);
    }
  })
}

const addQuote = (params, callback) => {
  console.log('these are params', params)
  var queryString = "INSERT INTO quotes (quote) VALUES (?)";

  connection.query(queryString, params)
}

exports.connection = connection;
exports.getQuote = getQuote;
exports.addQuote = addQuote;