var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/escolhidos", function (req, res) {
    dashController.escolhidos(req, res);
});

router.get("/identificados", function (req, res) {
    dashController.identificados(req, res);
});



module.exports = router;