const conn = require("./database");

const getDate = (id) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT *
        FROM carnetnotes.notes WHERE id_user = ${id}  ORDER BY date_creation ASC;`;
        let query = conn.query(sql, (err,result,field) => {
            if(err){
                return reject(err);
            }
            resolve(result);
        });
    });
};

module.exports = {
 getDate
}