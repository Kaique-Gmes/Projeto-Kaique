function fazerCadastro(){
    var nome = input_nomeCompleto.value;
    var nick = input_nickname.value;
    var email = input_email.value;
    var pokemonInicial = input_inicial.value;
    var senha = input_senha.value;
    var confirmarSenha = input_confirmarSenha.value;

    if(nome.indexOf(' ') == -1 && nome.length <=4){
        alert(`Insira seu nome COMPLETO`)
    }
    else if(nick.length < 1){
        alert(`Insira um Nickname`)
    }
    else if(email.indexOf('@') == -1 || email.indexOf('.') == -1){
        alert(`Email inválido`)
    }
    else if(pokemonInicial != "Charmander" && 
    pokemonInicial != "Bulbassauro" && 
    pokemonInicial != "Squirtle" && 
    pokemonInicial != "Pikachu"){
        alert(`Insira um pokemon inicial válido`)
    }
    else if(senha.length < 8){
        alert(`Senha inválida`)
    }
    else if(senha.indexOf('!') == -1 && 
    senha.indexOf('@') == -1 && 
    senha.indexOf('#') == -1 && 
    senha.indexOf('$') == -1 && 
    senha.indexOf('%') == -1 && 
    senha.indexOf('&') == -1 && 
    senha.indexOf('*') == -1
    ){
alert(`Insíra um caracter especial`)
    }
    else if(confirmarSenha != senha){
        alert(`Senhas não coincidem`)
    }
    else{
        alert(`Parabéns!!, agora você é um treinador Pokemon!`)
    }
}