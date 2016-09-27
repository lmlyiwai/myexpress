var userInfoDao = module.exports;
var pool = require('./mysql-pool');
userInfoDao.getUserInfo = function(wid, cb) {
	var getUserInfo = "select * from userInfo where wid = ?"
	pool.getConnection(function(err, connection) {
		if (err)
			cb(err);
		connection.query(getUserFriendsSql, [wid], function(err, result) {
			// return object back to pool
			connection.release();
			cb(err, result);
		});
	});
}
userInfoDao.insertUserInfo = function(wid, tel,cb) {
	var insertUserInfo = "insert into userInfo(wid,tel) values(?,?)"
	pool.getConnection(function(err, connection) {
		if (err)
			cb(err);
		connection.query(insertUserFriendsSql, [wid,tel], function(err, result) {
			// return object back to pool
			connection.release();
			cb(err, result);
		});
	});
}