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
    const sql = 'select * from node_messager where id= ' + query.id
    res.render('detail.html')
  }
}