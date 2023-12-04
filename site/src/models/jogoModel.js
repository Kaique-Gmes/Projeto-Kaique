var database = require("../database/config");

function responder(jogo, nick) {
    var instrucao = `
        INSERT INTO jogo (pokemonJogo, nickfk) VALUES ('${jogo}', '${nick}');
    `;
    console.log("Executando a instrução SQL (INSERT): \n" + instrucao);

    return database.executar(instrucao)
}

module.exports = {
    responder
};