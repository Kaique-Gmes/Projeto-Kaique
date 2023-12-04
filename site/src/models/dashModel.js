var database = require("../database/config");

function buscarDashEscolhidos(){
    var instrucao = `
    select zona as zona,count(zona) as qtdZona from cao as c join endereco as e on c.fkEndereco = e.idEndereco where c.stats = 'perdi' group by zona;
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