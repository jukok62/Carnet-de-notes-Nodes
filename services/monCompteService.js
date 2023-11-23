const conn = require("./database")

const fetchMonCompte = (id) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT u.nom_user, u.prenom_user, u.email_user, count(n.id_note) as nb_note, count(n.categorie) as nb_categorie
        FROM utilisateurs u 
        JOIN notes n ON n.id_user = u.id_user
        WHERE n.id_user = ${id}
        group by  u.nom_user, u.prenom_user, u.email_user;`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    fetchMonCompte
}