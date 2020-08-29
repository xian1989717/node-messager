const connection = require('./mysql.config')


module.exports = {
  getIndex (req, res) {
    connection.connect()
    const sql = 'select * from node_messager'
    connection.query(sql, (err, data) => {
      console.log(data)
      res.render('index.html')
    })

  }
}