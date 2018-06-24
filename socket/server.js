const express=require('express');
const app=express();
const http=require('http').Server();
const socket=require('socket.io');
const io=socket(http);

// app.get('/',function (req,res) {
//     res.sendFile(__dirname+/index.html);
// });

app.get('/',express.static('public'));

io.on('connection',function (sock) {
    console.log("user Connected is established"+ sock.id);
    sock.on('message',function (data) {
        console.log(data);
    })
})

http.listen('3000',function () {
    console.log("server is working on 3000");
})