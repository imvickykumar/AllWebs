
const file=require('fs');

var readFile=function (data) {
    file.readFile('./abc',function (err) {
        if(err) throw err;
      console.log(data.toString());
    })

}

var writeFile=function (data,callback) {
    file.writeFile('./abc',data,function (err) {
        file.readFile('./abc',function (err,data) {
            if(err) callback("read and write not done");
            console.log(data.toString());

        })

    })
}


function getPath() {
    return __dirname;

}

getPath();

function complete() {
    return "file is completed";

}

// module.exports={
//     getpath,complete
// }

module.exports=[getPath,complete,readFile,writeFile]