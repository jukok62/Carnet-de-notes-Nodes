const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const note = require("./modules/NotePage")
const user = require("./modules/UserPage")
const connexion = require("./modules/ConnectionPage")
const monCompte = require("./modules/Moncompte")
const inscription = require("./modules/InscriptionPage")
const categorie = require('./modules/categoriePage')
const date = require('./modules/datePage')

app.use(express.json())
app.use(cors({
    origin:"http://localhost:3001"
}))

app.get("/" , (req,res) => {
    res.send("hello world");
})

app.use("/note", note)
app.use("/user", user)
app.use("/connexion" , connexion)
app.use("/MonCompte", monCompte)
app.use("/inscription", inscription)
app.use("/categorie" , categorie)
app.use("/date" , date)

app.listen(port, () => {
    console.log(`Application à l'écoute sur le port http://127.0.0.1:${port}/ !`);
})

