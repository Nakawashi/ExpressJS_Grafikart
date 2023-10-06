const mysql = require('mysql2');
const connection = mysql.createConnection({
	host : 'localhost',
	user : 'naka',
	password : 'chien',
	database : 'db_livreor'
});

connection.connect()

module.exports = connection