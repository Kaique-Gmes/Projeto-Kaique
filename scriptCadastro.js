
function fazerCadastro(){
    var nome = input_nome.value;
    var sobrenome = input_sobrenome.value;
    var email = input_email.value;
    var pokemonInicial = input_inicial.value;
    var senha = input_senha.value;
    var confirmarSenha = input_confirmarSenha.value;

    if(nome.length < 3){
        alert(`Nome invalido<br>Nome precisa ser maior que 3`)
    }
}