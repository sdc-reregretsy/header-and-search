const Pool = require('pg').Pool

const pool = new Pool({
  database: 'search'
})

const getItems = (cb) => {
  let random = Math.floor(Math.random() * 9999900)
  console.log(random)

  pool.query(`SELECT id, product_name FROM items WHERE _id>${random} AND _id<${random}+101 ORDER BY _id`, (err, res) => {
    if (err) {
      cb(err)
    } else {
      cb(null, res.rows)
    }
  })
}

module.exports = { getItems };