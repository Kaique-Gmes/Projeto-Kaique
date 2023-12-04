<<<<<<< HEAD
var express = require("express");
=======
var express = require ("express");
>>>>>>> 8efaf3e2c8bfe9a248aaf23bfe26d924b00b9c3c
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;


>>>>>>> 8efaf3e2c8bfe9a248aaf23bfe26d924b00b9c3c
