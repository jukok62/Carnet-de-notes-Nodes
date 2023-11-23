
const conn = require("./database")

const fetchInscription = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT nom_user, prenom_user, email_user, mdp_user
        FROM utilisateurs`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

const addInscription = (user) => {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO utilisateurs (nom_user, prenom_user, email_user, mdp_user) VALUES ('${user.nom}','${user.prenom}', '${user.email}', '${user.password}')`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    fetchInscription,
    addInscription
}