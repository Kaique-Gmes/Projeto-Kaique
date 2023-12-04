var database = require("../database/config");

function responder(jogo) {
    var instrucao = `
        INSERT INTO jogo (pokemonJogo) VALUES ('${jogo}');
    `;
    console.log("Executando a instrução SQL (INSERT): \n" + instrucao);

    return database.executar(instrucao)
}

module.exports = {
    responder
};