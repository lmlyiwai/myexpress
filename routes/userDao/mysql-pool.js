var mysql = require('mysql');
var pool = mysql.createPool({
	user:"root",
	database:"social",
	password:"Lml,,..03111376"
});
module.exports = pool;
