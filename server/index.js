const express = require('express');
const db = require('../database');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const data = require('../sampleData.js')

app.use(bodyParser.json());
app.use(cors());

app.use('/', express.static('./client/dist'));

app.get('/search', (req, res) => {
  db.getAllItems((err, result) => {
    if (err) {
      res.status(404).send('Error, no records found');
    } else {
      // console.log(result);
      res.send(result);
    }
  })
})

// Uncomment to seed database with listing_id and titles; *********

// const allPosts = data.map(item => {
//   return db.addEntry(item)
// })
// Promise.all(allPosts)
//   .then((success) => {
//     console.log('All Items added')
//   })
//   .catch((fail) => {
//     Console.log('Failure in a promise')
//   })

// **************

app.listen(3000, () => { console.log('Header and Search Server listening on port 3000') });