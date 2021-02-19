const mysql = require('mysql');

class DB {
    constructor() {

    }

    Query(sql, callback) {
        let conexion = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'demo'
        });

        conexion.connect();
        conexion.query(sql, (err, rows) => {
            if (!err) {
                callback(err, rows);
            } else {
                console.log('ERROR => ', err);
            }
        })
        conexion.end();
    }
}

module.exports = DB;