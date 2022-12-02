var express = require('express');

var UserController = require("../controllers/usuarios")

var router = express.Router();

router.get("/probando", UserController.probando);

module.exports = router;