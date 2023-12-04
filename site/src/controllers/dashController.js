var dashModel = require("../models/dashModel");

function escolhidos(req, res) {

    dashModel.buscarDashEscolhidos()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(error => {
        console.error("Erro ao processar a solicitação:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    });
};

function identificados(req, res) {

    dashModel.buscarDashIdentificados()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(error => {
        console.error("Erro ao processar a solicitação:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    });
};


module.exports = {
    identificados,
    escolhidos
}