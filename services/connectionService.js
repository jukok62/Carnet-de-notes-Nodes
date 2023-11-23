const conn = require("./database");

const fetchConnection = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT email_user, mdp_user FROM utilisateurs`
        let query = conn.query(sql, (err, result,field) => {
            if(err){
                return reject(err);
            }
            resolve(result);
        });
    });
};

// const getUserByEmail = (email) => {
//     return new Promise((resolve, reject) => {
//       const sql = `SELECT email_user, mdp_user FROM utilisateurs WHERE email_user = '${email}' ;`;
//       conn.query(sql, (error, result) => {
//         if (error) {
//           console.error('Erreur lors de la récupération de l\'utilisateur par email:', error);
//           reject(error);
//         } else {
//           // results contient les résultats de la requête
//           // Si l'utilisateur est trouvé, results contiendra ses informations
//           // Sinon, results sera un tableau vide
//           resolve(result);
//         }
//       });
//     });
//   };
  const getUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT id_user, email_user, mdp_user FROM utilisateurs WHERE email_user = ? ;';
      conn.query(sql, [email], (error, results) => {
        if (error) {
          console.error('Erreur lors de la récupération de l\'utilisateur par email:', error);
          reject(error);
        } else {
          // results contient les résultats de la requête
          // Si l'utilisateur est trouvé, results contiendra ses informations
          // Sinon, results sera un tableau vide
          resolve(results[0] ? results[0] : null);
        }
      });
    });
  };

const addConnexion = (user) => {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO utilisateurs (nom_user, prenom_user, email_user, mdp_user) VALUES ('${user.nom}','${user.prenom}', '${user.email}', '${user.password}')`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    fetchConnection,
    addConnexion,
    getUserByEmail
}