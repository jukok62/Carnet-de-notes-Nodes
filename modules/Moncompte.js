const express = require("express");
const router = express.Router();
const conn = require("../services/database")
const monCompteService = require("../services/monCompteService")



router.get("/:id", async (req, res) =>{
    monCompteService.fetchMonCompte(req.params.id).then(result =>{
        res.status(200)
        res.json(result);
    }).catch(err =>{
        console.error("Oopsi...", err);
        res.json({"Message" : "Error" + err.sqlMessage})
    })
});

module.exports = router;