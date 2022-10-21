/*
File Name - users.js
Student Name - Deep R. patel
Student ID - 301239480
Date - 17-10-2022
*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
