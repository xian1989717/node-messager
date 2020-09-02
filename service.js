const { connection } = require('./mysql.config')

module.exports = {
  getIndex (req, res) {
    const sql = 'select * from node_messager'
    connection.query(sql, (err, data) => {
      const _data = {
        list: data
      }
      res.render('index.html', _data)
    })
  },
  getOne (req, res) {
    const query = req.query
    const sql = 'select * from node_messager where Mno= ' + query.id
    connection.query(sql, (err, data) => {
      const _data = {
        list: data
      }
      res.render('detail.html', _data)
    })
  },
  getEditOne (req, res) {
    const query = req.query
    const sql = 'select * from node_messager where Mno=' + query.id
    connection.query(sql, (err, data) => {
      if (err) {
        res.send('error')
      }
      const _data = {
        list: data
      }
      res.render('edit.html', _data)
    })
  }
}
