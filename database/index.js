const mysql = require('mysql');
const mysqlConfig = require('../config.js');
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'student',
    password: 'student',
    database: 'search'
  }
})

// var connection = mysql.createConnection(mysqlConfig.DBCONFIG);
// var connection = mysql.createConnection({
//   host     : process.env.RDS_HOSTNAME,
//   user     : process.env.RDS_USERNAME,
//   password : process.env.RDS_PASSWORD,
//   port     : process.env.RDS_PORT,
//   database:  process.env.RDS_DB_NAME
// })

// connection.query(`CREATE TABLE items (listing_id int NOT NULL, title varchar(255) NOT NULL, PRIMARY KEY (listing_id));`);

const getAllItems = (cb) => {
  knex.select().table('items')
    .then(result => {
      console.log('Got items using knex!')
      cb(null, result)
    })
    .catch(err => {
      console.log('Error getting items');
      cb(err);
    })
  // connection.query(`SELECT * FROM items`, (err, result) => {
  //   if (err) {
  //     console.log('Error getting items');
  //     cb(err)
  //   } else {
  //     cb(null, result)
  //   }
  // });
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


// module.exports = { connection, getAllItems, addEntry };
module.exports = { knex, getAllItems, addEntry };