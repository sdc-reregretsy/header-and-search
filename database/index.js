const mysql = require('mysql');
const mysqlConfig = require('../config.js');

var connection = mysql.createConnection(mysqlConfig.DBCONFIG);

// connection.query(`CREATE TABLE items (listing_id int NOT NULL, title varchar(255) NOT NULL, PRIMARY KEY (listing_id));`);

const getAllItems = (cb) => {
  connection.query(`SELECT * FROM items`, (err, result) => {
    if (err) {
      console.log('Error getting items');
      cb(err)
    } else {
      cb(null, result)
    }
  });
}

const addEntry = (item, cb) => {
  connection.query(`INSERT INTO items (listing_id, title) values (${item.listing_id}, "${item.title}");`, (err, result) => {
    if (err) {
      console.log('Error inserting item:', err);
      // cb(err)
    } else {
      console.log(item)
      // cb(null, result)
    }
  });
}


module.exports = {connection, getAllItems, addEntry};