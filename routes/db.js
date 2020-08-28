/*
* Conexión a MySQL
 */

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'todo',
    password: '123456',
    database: 'todos',
    port: 3306,
});
connection.connect((err) => {
    if (err) throw err;
    console.log('Connectado!');
});
module.exports = connection;
