var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");

//Recebendo os dados do html e direcionando para a função cadastrar de jogoController.js
router.post("/responder", function (req, res) {
    jogoController.responder(req, res);
})

module.exports = router;