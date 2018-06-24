fs.read('./start.html', 'r', function(err, fileToRead){
    if (!err){
        fs.readFile(fileToRead, {encoding: 'utf-8'}, function(err,data){
            if (!err){
                console.log('received data: ' + data);
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data);
                response.end();
            }else{
                console.log(err);
            }
        });
    }else{
        console.log(err);
    }
});