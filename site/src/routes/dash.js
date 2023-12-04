var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/iniciaisEscolhidos", function (req, res) {
    dashController.caesZonas(req, res);
});

router.get("/iniciaisIdentificados", function (req, res) {
    dashController.caesSexo(req, res);
});

module.exports = router;