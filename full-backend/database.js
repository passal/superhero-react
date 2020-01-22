const mysql = require("mysql");

const sqlConnection = mysql.createConnection({
    host: "remotemysql.com",
    user: "vjmcfQhymg",
    password: "v9ZWcyd95p",
    database: "vjmcfQhymg"
});

sqlConnection.connect( (err) => {
    if(err){
        console.log("Connection Failed", err);
    } else {
        console.log("Connected");
    }
});

module.exports = sqlConnection;
