const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: '1234567',
    user: 'coolDB',
    database: 'coolDB',
    host: 'localhost',
    port: '3306'
});

let coolDBtest = {};

coolDBtest.all = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM testUser`, (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = coolDBtest;


