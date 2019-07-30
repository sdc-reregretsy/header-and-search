const Pool = require('pg').Pool

const pool = new Pool({
  database: 'postgres'
})

const getItems = (cb) => {
  pool.query(`SELECT * FROM items LIMIT 100`, (err, res) => {
    if (err) {
      cb(err)
    } else {
      cb(null, res.rows)
    }
  })
}

module.exports = { getItems };