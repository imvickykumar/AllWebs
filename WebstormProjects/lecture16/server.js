
const express=require('express');
const app=express();

const bodyParser=require('body-parser');


let todoArray=[];

app.use(bodyParser.urlencoded({exrended:true}));
app.use(bodyParser.json());


app.use('/',express.static('public'));

app.post('/todos',function (req,res) {
    todoArray.push(req.body.data);
    res.status(200);
    // console.log(req.body);
    // res.send('Completed');        //after this lower part wont run
   // res.send(req.body.data);
});


app.listen('5000',function () {
    console.log("server is running")

});