const express = require('express');
const db = require('../database');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.use('/', express.static('./client/dist'));

app.get('/search', (req, res) => {
  db.getAllItems((err, result) => {
    if(err){
      res.status(404).end();
    }else {
      // console.log(result);
      res.send(result);
    }
  })
})
/*
Function for seeding database; do NOT want this route available outside development environment
app.post('/search', (req, res) => {
  console.log(req.body);
  const allPosts = req.body.map(item => {
    return db.addEntry(item)
  })
  Promise.all(allPosts)
    .then((success) => {
      res.send('Items added')
    })
    .catch((fail) => {
      Console.log('Failure in a promise')
      res.status(400).end();
    })
})
*/

app.listen(3000, () => { console.log('Header and Search Server listening on port 3000')});