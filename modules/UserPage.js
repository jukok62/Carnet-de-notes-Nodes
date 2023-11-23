const express = require("express");
const router = express.Router();
const conn = require("../services/database")
const userService = require("../services/userService")

router.get("/", async (req, res) =>{
    userService.fetchUser().then(result =>{
        res.status(200)
        res.json(result);
    }).catch(err =>{
        console.error("Oopsi...", err);
        res.json({"Message" : "Error" + err.sqlMessage})
    })
});

module.exports = router;