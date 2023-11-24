// const express = require("express");
// const router = express.Router();
// const conn = require("../services/database");

// router.post('/api/login', (req,res) => {

//     // TODO : checker en base le user par rapport a l'email
//     if (req.body.email !== user.email) {
//         res.status(401).send('invalid credentials');
//     }
//     if(req.body.password !== user.email) {
//         res.status(401).send('invalid credentials')
//         return ;
//     }
//     const accessToken =  generateAccessToken(user);
//     res.send({
//         accessToken,
//     });
// });

// function authenticateToken(req,res,next) {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1]; // 'bearer zezrtfzhzhzuh  [1] pour dire que l'espace se situe après bearer

//     if(!token) {
//         return res.sendStatus(401);
//     }
//     Jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//         if(err) {
//             return res.sendStatus(401);
//         }
//         req.user = user;  // chaque route recupere les info decoder de user
//         next();
//     });
// }

// router.get('/api/me' , authenticateToken, (req,res) => {
//     res.send(req.user);
// })

