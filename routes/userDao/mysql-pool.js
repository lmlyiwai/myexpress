var mysql = require('mysql');
var pool = mysql.createPool({
	user:"root",
	database:"social",
	password:"a6447209"
});
module.exports = pool;