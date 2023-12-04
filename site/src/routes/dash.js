var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/escolhidos", function (req, res) {
    dashController.caesZonas(req, res);
});

router.get("/identificados", function (req, res) {
    dashController.caesSexo(req, res);
});

module.exports = router;