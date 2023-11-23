const express = require("express");
const router = express.Router();
const conn = require("../services/database")
const inscriptionService = require("../services/inscriptionService")




router.get("/", async (req, res) =>{
    inscriptionService.fetchInscription().then(result =>{
        res.status(200)
        res.json(result);
    }).catch(err =>{
        console.error("Oopsi...", err);
        res.json({"Message" : "Error" + err.sqlMessage})
    })
});

router.post('/', (req, res) => {
    let data = req.body;
    console.log(data)
    inscriptionService.addInscription(data).then(result => {
        res.status(201)
        res.json(data)
    }).catch(err => {
        console.log(err)
        res.json({"message" : "Votre ajout ne s'est pas bien passé"})
    })
  })

module.exports = router;