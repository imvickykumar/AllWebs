const express = require('express');
const handlebars =require('handlebars');
const app=express();
const port=process.env.PORT||5002;
const hbs=require('hbs');

app.set('view engine','hbs');
app.set('views','views');

app.get('/',function (req,res) {
    res.render('index',{data:[{
            'fruit':'apple',
            'price':'20',
            'type':'fruit'
        }

        ]});
})

// app.listen(port,function () {
//
// })
app.listen(5000,function () {
    console.log("server is running on 5000");
});