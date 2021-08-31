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
  var queryString = 'INSERT INTO quotes (quote) VALUES (?)'

  connection.query(queryString, (err, res) => {
    if (err) {
      console.log('error adding quote to db', error);
      callback(err, null);
    } else {
      callback(null, res);
    }
  })
}

exports.connection = connection;
exports.getQuote = getQuote;