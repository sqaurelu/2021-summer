const mysql = require('mysql2/promise');
const {logger} = require('./winston');

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
    host: 'hy-db.cnfijj4zwkng.ap-northeast-2.rds.amazonaws.com',
    user: 'mwilliam55',
    port: '3306',
    password: 'dlghdud55!',
    database: 'hy-db'
});

module.exports = {
    pool: pool
};