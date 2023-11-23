const express = require("express");
const router = express.Router();
const conn = require("../services/database")
const categorieService = require ('../services/categorieService')




router.get("/", async (req, res) =>{
    categorieService.fetchCategorie().then(result =>{
        res.status(200)
        res.json(result);
    }).catch(err =>{
        console.error("Oopsi...", err);
        res.json({"Message" : "Error" + err.sqlMessage})
    })
});

router.get("/:id", async (req, res) =>{
    categorieService.fetchCategorie(req.params.id).then(result =>{
        res.status(200)
        res.json(result);
    }).catch(err =>{
        console.error("Oopsi...", err);
        res.json({"Message" : "Error" + err.sqlMessage})
    })
});

module.exports = router;