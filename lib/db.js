const { application } = require('express');
var mysql = require('mysql');
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = require('../config/config');
var db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    dateStrings: "date",
});
db.connect();

module.exports = db;

