const express = require('express');
const db = require('../database/queries.js');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const data = require('../sampleData.js')
const PORT = process.env.PORT || 3000;
const compression = require('compression');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
app.use(compression());

app.use('/', express.static('./client/dist'));

app.get('/search', (req, res) => {
  db.getItems((err, result) => {
    if (err) {
      res.status(404).send('Error, no records found');
    } else {
      // console.log(result);
      res.send(result);
    }
  })
})

module.exports = app

// Uncomment to seed database with listing_id and titles; *********

// const allPosts = data.map(item => {
//   return db.addEntry(item)
// })
// console.log('Attempting to seed DB')
// Promise.all(allPosts)
//   .then((success) => {
//     console.log('All Items added')
//   })
//   .catch((fail) => {
//     Console.log('Failure in a promise')
//   })

// **************

// app.listen(PORT, () => { console.log('Header and Search Server listening on port ', PORT) });

// try {
//   module.exports = practiceSolution;
//   module.exports.helperFunction = helperFunction;
// } catch (error) {
//   console.log('we caught an error');
// }
