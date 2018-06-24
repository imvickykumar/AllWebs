
const express = require('express');//express itself a content of function just installed
const app=express();

// app.listen('5000',function () {
//     console.log("server is running on port 5000"); // this returns all the functions in express library
//
// })
//
// console.log(express);

// app.use('/',expresss.static('public'))

app.use(function (req,res,next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    next();

})
// app.get('/',function (req,res) {
//     console.log(req.query.todo);
//     //res.send("hello world");

//})
app.get('/todos',function (req,res) {
    res.send(req.query.todo.toUpperCase());

})

app.listen('4000',function () {
     console.log("server is running on port 4000"); // this returns all the functions in express library

 });