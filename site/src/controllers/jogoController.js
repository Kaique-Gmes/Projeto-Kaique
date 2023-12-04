var jogoModel = require("../models/jogoModel");

function responder(req, res) {
    var jogo = req.body.jogoServer;

    jogoModel.responder(jogo)
        .then(function (Resultado) {
            res.json(Resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o cadastro do jogo! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
};

module.exports = {
    responder
}
