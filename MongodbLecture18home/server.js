const express=require('express');
const app=express();
const mongo=require('mongodb').MongoClient;
const dbname='shoppingcart';
const url='mongodb://localhost:27017';
let db;

function connect() {
        mongo.connect(url,function (err,client) {
        console.log("Connected Successfully");
        db = client.db(dbname);
        //client.close();  //if here than it will stop all client and connection;
        insertDocument();
        client.close();
    })
}


function insertDocument(){
    let collection=db.collection('items');
    collection.insertMany([{
        price:200,
        type:'Mobile',
        quantity:25
    },{
        price:2000,
        type:'wheat'
    },{
        price:12,
        type:'fruit',
        quantity:'3kg'
    }],function (err,result) {
        console.log(result);
    })
}


app.listen(5000,function () {
    connect();
});
