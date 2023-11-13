const { application } = require('express');
var mysql = require('mysql');
var db = mysql.createConnection({
    host:'1.234.44.149',
    user: 'user',
    password: 'jiyeonyee0312',
    database: 'board',
    dateStrings: "date",
});
db.connect();

module.exports = db;