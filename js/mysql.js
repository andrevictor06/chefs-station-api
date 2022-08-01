var mysql      = require('mysql');


function mysqlQuery(sql){
    console.log(sql);
    return new Promise( (resolve, reject) =>{
        connection =  connect();
        connection.query(sql, function(err, rows, fields) {
            if (err) throw err;
            resolve( { rows:rows, fields:fields});
          });
        connection.end();
    })
    
}


function connect(){
    var connection = mysql.createConnection({
        host     : process.env.MYSQL_HOST,
        database : process.env.MYSQL_DATABASE,
        user     : process.env.MYSQL_USER,
        password : process.env.MYSQL_PASSWORD
    });
      
    connection.connect();

    return connection;
}

module.exports = {
    mysqlQuery
}