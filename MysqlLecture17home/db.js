const sql=require('mysql');

let config={
    "host":'localhost',
    "user":'zorro',
    "password":'Vicky@123',
    "database":'db'
}

let connection = sql.createConnection(config);

function connect() {
    connection.connect();
}

module.exports= {
    connect

}


