const mysql = require('mysql');

const connection = mysql.createConnection({
	host: process.env.MYSQLDB_HOST || "localhost",
	user: process.env.MYSQLDB_USER,
	password: process.env.MYSQLDB_ROOT_PASSWORD,
	database: process.env.MYSQLDB_DATABASE
  });
  
  connection.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
	connection.query("CREATE DATABASE mydb", function (err, result) {
	  if (err) throw err;
	  console.log("Database created");
	});
  });

const query = (...args) => connection.query(...args);

module.exports = { query };