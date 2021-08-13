const mysql = require('mysql');
const db = mysql.createConnection({
  hoist: 'localhost',
  user: 'root',
  password: '525252',
  database: 'week_2',
});
db.connect();

module.exports = db;