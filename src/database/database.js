const mysql = require('mysql');
const DB_PASSWORD = require('../../config/config');

const dataBase = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: DB_PASSWORD,
    database: 'dbtodo'
});

dataBase.connect((error) => {
    if(error) {
        throw error; 
    }

    console.log('Database connected !');
});

module.exports = dataBase;