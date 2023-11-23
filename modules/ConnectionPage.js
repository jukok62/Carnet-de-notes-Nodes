const express = require("express");
const router = express.Router();
const conn = require("../services/database")
const connectionService = require("../services/connectionService")


router.get("/", async (req, res) =>{
    connectionService.getUserByEmail(email).then(result =>{
        res.status(200)
        res.json(result);
    }).catch(err =>{
        console.error("Oopsi...", err);
        res.json({"Message" : "Error" + err.sqlMessage})
    })
});

// router.get("/", async (req, res) => {
//     const { email } = req.query;
  
//     if (!email) {
//       return res.status(400).json({ message: 'Veuillez fournir un email' });
//     }
  
//     try {
//       const user = await connectionService.getUserByEmail(email);
  
//       if (!user) {
//         return res.status(404).json({ message: 'Utilisateur non trouvé' });
//       }
  
//       res.status(200).json(user);
//     } catch (err) {
//       console.error("Oopsi...", err);
//       res.status(500).json({ message: 'Erreur serveur lors de la récupération de l\'utilisateur' });
//     }
//   });

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(400).json({message : 'veuillez entrer un email et un mot de passe correct'})
    }

    try {
        // Récupérer les informations de l'utilisateur à partir de la base de données
        const user = await connectionService.getUserByEmail(email);

        // Vérifier si l'utilisateur existe
        if(!user){
            return res.status(401).json({message : 'Identifiant incorrect'})
        }

        // Vérifier si le mot de passe correspond
        if(user.mdp_user !== password) {
            return res.status(401).json({message : 'Identifiant incorrect'})
        }

         // Si tout est correct, renvoyer une réponse réussie
         res.status(200).json({message : 'Connexion réussie', user: user})
    } catch (e) {
        console.log(e)
        res.status(500).json({message : 'Erreur serveur lors de la vérification des identifiants'})
    }
  });

module.exports = router;