const express = require("express");
const router = express.Router();

router.get("/",(req, res)=>{
    res.render("index",{titulo:"Esta es la página de inicio"});
});

router.get("/usuarios",(req, res)=>{
    res.render("usuarios",{tituloUsuarios:"Esta es la página de Usuarios"});
   
});

module.exports = router;