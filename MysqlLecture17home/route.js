const route=require('express').Router();

route.get('/hello', function(req,res) {
    res.send("hello");
});

module.exports={
    route
}