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
        let sql = `SELECT id_note, titre_note, contenu_note,categorie , id_user
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

const addNote = (note) => {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO notes (id_user, titre_note, contenu_note, date_creation, couleur, categorie) VALUES ('${note.id_user}','${note.titre}', '${note.contenu}', '${note.date}','${note.color}','${note.categorie}' )`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

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
    DeleteNote
}