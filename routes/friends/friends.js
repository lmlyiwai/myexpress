var express = require('express')
var async = require('async');
var friends = express.Router();
var friendsDao = require('./userDao/friInfoDao')
friends.post('/insertFriends',function (req,res) {
	var data = req.body;
	var wid = data.wid;
	var friends = data.friends;
	friendsDao.
})
