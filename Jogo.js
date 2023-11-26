var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

//EXPANDIR O MENU

var btnExp = document.querySelector('#btn-exp')
var leftBar = document.querySelector('.left-bar')

btnExp.addEventListener('click', function(){
    leftBar.classList.toggle('expandir')
})





var contador = 1;
var questao = ["Qual seu tipo favorito?", "Qual cor você prefere?", "O que você gosta de fazer nas horas vagas?", "Como você se define?", "Qual é a sua comida favorita?"]
var charmander = 0
var squirtle = 0
var bulbassauro = 0
var pikachu = 0
function começar(){
            resultado.innerHTML =
            `
            ${questao[contador]}
            `
            radios.innerHTML =
                `
                    Fogo
                <input type="radio" id="radio1" name="radio" value="radio1">
                    Água
                <input type="radio" id="radio2" name="radio" value="radio2">
                    Planta
                <input type="radio" id="radio3" name="radio" value="radio3">
                    Elétrico
                <input type="radio" id="radio4" name="radio" value="radio4">   
                <br>    
                <br>
                <button onclick="proximaPergunta()" class="comecar">Proxima pergunta</button>
                `
}

function proximaPergunta(){

    
    const selectedOption = document.querySelector('input[name="radio"]:checked');

     if (selectedOption) {
        charmander += 2
    }
    while(contador < 5){
        if(contador == 1){
            resultado.innerHTML =
            `
            ${questao[contador]}
            `
            radios.innerHTML =
            `
                    Vermelho
                <input type="radio" id="radio1" name="radio" value="radio1">
                    Azul
                <input type="radio" id="radio2" name="radio" value="radio2">
                    Verde
                <input type="radio" id="radio3" name="radio" value="radio3">
                    Amarelo
                <input type="radio" id="radio4" name="radio" value="radio4">
                <br>    
                <br>
                <button onclick="proximaPergunta()" class="comecar">Proxima pergunta</button>
            `   
        }else if(contador == 2){
            resultado.innerHTML =
            `
            ${questao[contador]}
            `
            radios.innerHTML =
            ` 
                    Treinar
                <input type="radio" id="radio1" name="radio">
                    Jogar
                <input type="radio" id="radio2" name="radio">
                    Dormir
                <input type="radio" id="radio3" name="radio">
                    Comer
                <input type="radio" id="radio4" name="radio">
                <br>    
                <br>
                <button onclick="proximaPergunta()" class="comecar">Proxima pergunta</button>
            `
        }else if(contador == 3){
            resultado.innerHTML =
            `
            ${questao[contador]}
            `
            radios.innerHTML =
            ` 
                    Aventureiro
                <input type="radio" id="radio1" name="radio">
                    Bincalhão
                <input type="radio" id="radio2" name="radio">
                    Calmo
                <input type="radio" id="radio3" name="radio">
                    Energético
                <input type="radio" id="radio4" name="radio">
                <br>    
                <br>
                <button onclick="proximaPergunta()" class="comecar">Proxima pergunta</button>
            `
        }else if(contador == 4){
            resultado.innerHTML =
            `
            ${questao[contador]}
            `
            radios.innerHTML =
            ` 
                    Carne
                <input type="radio" id="radio1" name="radio">
                    Peixe
                <input type="radio" id="radio2" name="radio">
                    Folhas
                <input type="radio" id="radio3" name="radio">
                    Doces
                <input type="radio" id="radio4" name="radio">
            <br>
            <br>
            <button onclick="resposta()" class="comecar">Resposta</button>
            `
        }
        contador ++
        if(contador >= 5){
            contador == 1
        }
        break
    }
}

function resposta(){
    radios.innerHTML = ''
    if(charmander > squirtle || charmander > bulbassauro || charmander > pikachu){
        resultado.innerHTML = 
        `Você se idêntificou com o Charmander!
        <button onclick="reset()" class="comecar">Resetar quiz</button>`
    }else if(squirtle > charmander || squirtle > bulbassauro || squirtle > pikachu){
        resultado.innerHTML = 
        `Você se idêntificou com o Squirtle!
        <button onclick="reset()" class="comecar">Resetar quiz</button>`
    }else if(bulbassauro > charmander || bulbassauro > squirtle || bulbassauro > pikachu){
        resultado.innerHTML = 
        `Você se idêntificou com o Bulbassauro!
        <button onclick="reset()" class="comecar">Resetar quiz</button>`
    }else if(pikachu > charmander || pikachu > squirtle || pikachu > bulbassauro){
        resultado.innerHTML = 
        `Você se idêntificou com o Pikachu!
        <button onclick="reset()" class="comecar">Resetar quiz</button>`
    }
}

function reset(){
    var contador = 1;
    var questao = ["Qual seu tipo favorito?", "Qual cor você prefere?", "O que você gosta de fazer nas horas vagas?", "Como você se define?", "Qual é a sua comida favorita?"]
    var charmander = 0
    var squirtle = 0
    var bulbassauro = 0
    var pikachu = 0
    var contador = 1
    resultado.innerHTML = ""
}