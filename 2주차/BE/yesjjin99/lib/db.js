var mysql = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'beast4518',
  database : 'dev_immersion'
});
db.connect();
module.exports = db;