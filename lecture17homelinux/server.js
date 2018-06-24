
console.log("in server");
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "newuser",
    password: "Vicky@123"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});