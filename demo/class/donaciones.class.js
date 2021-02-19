const DB = require("./db");

class Donaciones {
    constructor() {

    }

    Listar(callback) {
        let db = new DB();
        let sql = "Call sp_pcmDonaciones();";
        db.Query(sql, (err, data) => {
            if (!err) {
                callback(null, data);
            }
        })
    }
}

module.exports = Donaciones;