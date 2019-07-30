const Pool = require('pg').Pool

const pool = new Pool({
  user: 'garyblaser',
  host: 'localhost',
  database: 'search',
  password: 'password',
  port: 5432,
})

const getItems = (cb) => {
  pool.query(`SELECT * FROM items LIMIT 1`, (err, res) => {
    if (err) {
      cb(err)
    } else {
      cb(null, res.rows)
    }
  })
}

module.exports = { getItems };