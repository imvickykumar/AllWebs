const express=require('express');
const app=express();
const database=require('./db');
const router=require('./route.js');
const html=require('./login1.0.html');
const css=require('./login1.0.css');
const js=require('./login1.0.js');
console.log(router.route);

app.use('/',router.route);

let port=5000 || process.env.PORT;

app.listen(port,function () {
     // database.connect();
    console.log("server is running on port"+port);
       database.connect();
});