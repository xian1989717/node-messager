const connection = require('./mysql.config')


module.exports = {
  getIndex (req, res) {
    connection.connect()
    res.render('index.html')
  }
}