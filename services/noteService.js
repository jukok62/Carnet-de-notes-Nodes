const conn = require("./database")

const fetchNote = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT id_note, titre_note, contenu_note,categorie FROM carnetnotes.notes;`;
        let query = conn.query(sql, (err,result,field) => {
            if(err){
                return reject(err);
            }
            resolve(result);
        });
    });
};

const fetchNoteById = (id) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT id_note, titre_note, contenu_note,categorie , id_user, couleur
        FROM carnetnotes.notes
        WHERE id_user = ${id}`;
        let query = conn.query(sql, (err,result,field) => {
            if(err){
                return reject(err);
            }
            resolve(result);
        });
    });
};

const fetchNoteByNoteId = (id) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT id_note, titre_note, contenu_note,categorie , id_user, couleur, date_creation
        FROM carnetnotes.notes
        WHERE id_note = ${id}`;
        let query = conn.query(sql, (err,result,field) => {
            if(err){
                return reject(err);
            }
            resolve(result);
        });
    });
};

const addNote = (note) => {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO notes (id_user, titre_note, contenu_note, date_creation, couleur, categorie) VALUES ('${note.id_user}','${note.titre}', '${note.contenu}', '${note.date}','${note.color}','${note.categorie}' )`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

const updateNote2 = (id, data) => {
    return new Promise((resolve, reject) => {
        // Construisez la requête SQL correctement en utilisant 'data' pour les nouvelles valeurs
        const sql = `UPDATE notes SET 
                        titre_note = '${data.titre_note}', 
                        categorie = '${data.categorie}', 
                        contenu_note = '${data.contenu_note}', 
                        couleur = '${data.couleur}' ,
                        date_creation = '${data.date}'
                        WHERE id_note = ${data.id_note}`;

        // Exécutez la requête SQL
        conn.query(sql, (err, result, field) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};





const DeleteNote = (id) => {
    return new Promise((resolve, reject) => {
        let sql = `DELETE FROM notes WHERE id_note = ${id}`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    fetchNote,
    addNote,
    fetchNoteById,
    DeleteNote,
    updateNote2,
    fetchNoteByNoteId
}