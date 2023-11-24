const express = require("express");
const router = express.Router();
const conn = require("../services/database")
const noteService = require("../services/noteService")

router.get("/", async (req,res) => {
    noteService.fetchNote()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.error("oops" , err);
        res.json({"message ": "error" + err.sqlMessage});
    })
})

router.get("/:id", async (req,res) => {
    noteService.fetchNoteById(req.params.id)
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.error("oops" , err);
        res.json({"message ": "error" + err.sqlMessage});
    })
})

router.get("/:id/note", async (req,res) => {
    noteService.fetchNoteByNoteId(req.params.id)
    .then(result => {
        res.status(200).json(result[0]);
    })
    .catch(err => {
        console.error("oops" , err);
        res.json({"message ": "error" + err.sqlMessage});
    })
})

router.post('/', (req, res) => {
    let data = req.body;
    noteService.addNote(data).then(result => {
        res.status(201)
        res.json(data)
    }).catch(err => {
        console.log(err)
        res.json({"message" : "Votre ajout ne s'est pas bien passé"})
    })
  })

  router.put('/:id', (req, res) => {
    let data = req.body;
    noteService.updateNote2(req.params.id, data) // Passer les données à mettre à jour à la fonction
        .then(result => {
            res.status(201)
            res.json(data)
            console.log('Requête SQL:', result); // Utiliser 'result' au lieu de 'sql' ici
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({"message" : "Votre mise à jour ne s'est pas bien passée"}); // Envoyer une réponse avec un statut 500 pour indiquer une erreur interne du serveur
        });
});

  router.delete('/:id', (req, res) => {
    let id = req.params.id;
    noteService.DeleteNote(id).then(result => {
        res.status(200).json({"message": "La note a été supprimée avec succès"});
    }).catch(err => {
        console.log(err);
        res.status(500).json({"message" : "Une erreur s'est produite lors de la suppression de la note"});
    });
});

module.exports = router;