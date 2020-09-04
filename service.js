const { connection } = require('./mysql.config')
const formidable = require("formidable")

module.exports = {
  getIndex (req, res) {
    const sql = `
      select 
        Mno,
        Mname,
        Msex,
        Mage,
        Mhobby 
      from 
        node_messager 
      where 
        is_removed = 0`
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
  deleteOne (req, res) {
    const query = req.query
    const sql = `
      update
        node_messager
      set 
        is_removed = 1
      where
        Mno = ${query.id}
    `
    connection.query(sql, (err, data) => {
      if (err) {
        res.send('error')
      }
      if (data.changedRows) {
        res.send('<script>alert("删除成功");window.location.href="/"</script>')
      }
    })
  },
  getEditOne (req, res) {
    const query = req.query
    const sql = 'select * from node_messager where Mno=' + query.id
    connection.query(sql, (err, data) => {
      if (err) {
        res.send('error')
      }
      res.render('edit.html', { data })
    })
  },
  editDetail (req, res) {
    const query = req.query
    const form = new formidable.IncomingForm()
    form.parse(req, (err, fields, files) => {
      if (err) return res.redirect(303, '/error')
      const { Mname, Msex, Mage, Mhobby } = fields
      const sql = `UPDATE 
            node_messager 
          SET 
            Mname = '${Mname}', 
            Msex = '${Msex}', 
            Mage = ${Mage}, 
            Mhobby = '${Mhobby}',
            is_removed = 0 
          WHERE 
            Mno = ${query.id}`
      connection.query(sql, (err, data) => {
        if (err) { return }
        if (data.changedRows) {
          res.send('<script>alert("保存成功");window.location.href="/"</script>')
        }
      })
    })
  }
}
