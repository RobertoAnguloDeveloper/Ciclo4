var express = require("express");
var UserController = require("../controllers/usuarios");

var router = express.Router();

router.get("/probando", UserController.probando);
router.post("/testeando", UserController.testeando);
router.post("/login", UserController.login);
router.post("/guardarUsuario", UserController.save);
router.put("/actualizar",UserController.update);
router.delete("/eliminar",UserController.delete);
router.get("/usuarios",UserController.listarUsuarios);

module.exports = router;

