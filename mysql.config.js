const mysql = require('mysql')

const connection = mysql.createConnection({
  host: '182.92.170.202',
  user: 'test',
  password: 'test@db_mysql',
  database: 'test'
});

module.exports.connection = connection