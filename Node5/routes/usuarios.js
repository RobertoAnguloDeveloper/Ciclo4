var express = require('express');

var UserController = require("../controllers/usuarios")

var router = express.Router();

router.post("/create", UserController.create);
router.get("/read", UserController.read);
router.put("/update", UserController.update);
router.delete("/delete", UserController.delete);

module.exports = router;