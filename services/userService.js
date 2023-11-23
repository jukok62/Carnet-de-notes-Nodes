const conn = require("./database")

const fetchUser = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM carnetnotes.utilisateurs;`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    fetchUser
}