var database = require("../database/config");

function buscarDashEscolhidos(){
    var instrucao = `
    select pokemon,count(pokemon) as qtdpokemon from treinador group by pokemon;
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarDashIdentificados(){
    var instrucao = `
    select pokemonJogo,count(pokemonJogo) as qtdpokemonJogo from jogo group by pokemonJogo;
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}




module.exports = {
    buscarDashEscolhidos,
    buscarDashIdentificados
}