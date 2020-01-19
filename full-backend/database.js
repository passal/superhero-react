const mysql = require("mysql");

const sqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "23542354",
    database: "projectcs"
});

sqlConnection.connect( (err) => {
    if(err){
        console.log("Connection Failed", err);
    } else {
        console.log("Connected");
    }
});

module.exports = sqlConnection;