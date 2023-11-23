const conn = require("./database")

const fetchCategorie = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT *
        FROM carnetnotes.notes  ORDER BY categorie ASC;`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

const fetchCategorieById = (id) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT *
        FROM carnetnotes.notes WHERE id_user = '${id}'  ORDER BY categorie ASC;`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    fetchCategorie,
    fetchCategorieById
}