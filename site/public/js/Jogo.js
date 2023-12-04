var menuItem = document.querySelectorAll('.item-menu')

function selectLink() {
    menuItem.forEach((item) =>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item) =>
    item.addEventListener('click', selectLink)
)

//EXPANDIR O MENU

var btnExp = document.querySelector('#btn-exp')
var leftBar = document.querySelector('.left-bar')

btnExp.addEventListener('click', function () {
    leftBar.classList.toggle('expandir')
})





var contador = 0;
var questao = ["Qual seu tipo favorito?", "Qual cor você prefere?", "O que você gosta de fazer nas horas vagas?", "Como você se define?", "Qual é a sua comida favorita?"]
var charmander = 0
var squirtle = 0
var bulbassauro = 0
var pikachu = 0
function começar() {
    resultado.innerHTML =
        `
            ${questao[contador]}
            `
    radios.innerHTML =
        `
        <input type="radio" id="radio1" name="radio" value="radio1">
        Fogo
        <input type="radio" id="radio2" name="radio" value="radio2">
        Água
        <input type="radio" id="radio3" name="radio" value="radio3">
        Planta
        <input type="radio" id="radio4" name="radio" value="radio4">   
        Elétrico
                <br>    
                <br>
                <div class="content-proximapergunta">
                <button onclick="proximaPergunta()" class="proximaPergunta">Proxima pergunta</button>
            </div>
                `
                contador ++
}

function proximaPergunta() {
    const selectedOption1 = document.querySelector('input[value="radio1"]:checked');
    const selectedOption2 = document.querySelector('input[value="radio2"]:checked');
    const selectedOption3 = document.querySelector('input[value="radio3"]:checked');
    const selectedOption4 = document.querySelector('input[value="radio4"]:checked');

    if (selectedOption1) {
        charmander++
    }
    if (selectedOption2) {
        squirtle++
    }
    if (selectedOption3) {
        bulbassauro++
    }
    if (selectedOption4) {
        pikachu++
    }
    
    while (contador < 5) {

        if (contador == 1) {
            resultado.innerHTML =
                `
            ${questao[contador]}
            `
            radios.innerHTML =
                `
                <input type="radio" id="radio1" name="radio" value="radio1">
                Vermelho
                <input type="radio" id="radio2" name="radio" value="radio2">
                Azul
                <input type="radio" id="radio3" name="radio" value="radio3">
                Verde
                <input type="radio" id="radio4" name="radio" value="radio4">
                Amarelo
                <br>
                <br>
                <div class="content-proximapergunta">
                <button onclick="proximaPergunta()" class="proximaPergunta">Proxima pergunta</button>
            </div>
            `
        } else if (contador == 2) {
            resultado.innerHTML =
                `
            ${questao[contador]}
            `
            radios.innerHTML =
                `
                <input type="radio" id="radio1" name="radio" value="radio1">
                Treinar
                <input type="radio" id="radio2" name="radio" value="radio2">
                Jogar
                <input type="radio" id="radio3" name="radio" value="radio3">
                Dormir
                <input type="radio" id="radio4" name="radio" value="radio4">
                Comer
                <br>
                <br>
                <div class="content-proximapergunta">
                <button onclick="proximaPergunta()" class="proximaPergunta">Proxima pergunta</button>
            </div>
            `
        } else if (contador == 3) {
            resultado.innerHTML =
                `
            ${questao[contador]}
            `
            radios.innerHTML =
                ` 
                <input type="radio" id="radio1" name="radio" value="radio1">
                Aventureiro
                <input type="radio" id="radio2" name="radio" value="radio2">
                Bincalhão
                <input type="radio" id="radio3" name="radio" value="radio3">
                Calmo
                <input type="radio" id="radio4" name="radio" value="radio4">
                Energético
                <br>    
                <br>
                <div class="content-proximapergunta">
                <button onclick="proximaPergunta()" class="proximaPergunta">Proxima pergunta</button>
            </div>
            `
        } else if (contador == 4) {
            resultado.innerHTML =
                `
            ${questao[contador]}
            `
            radios.innerHTML =
                ` 
                <input type="radio" id="radio1" name="radio" value="radio1">
                Carne
                <input type="radio" id="radio2" name="radio" value="radio2">
                Peixe
                <input type="radio" id="radio3" name="radio" value="radio3">
                Folhas
                <input type="radio" id="radio4" name="radio" value="radio4">
                Doces
            <br>
            <br>
            <div class="content-proximapergunta">
            <button onclick="resposta()" class="proximaPergunta">Resposta</button>
        </div>
            `
        }if(contador >= 5){
            contador =1
        }
        contador++
        break
    }
}

function resposta() {

    const selectedOption1 = document.querySelector('input[value="radio1"]:checked');
    const selectedOption2 = document.querySelector('input[value="radio2"]:checked');
    const selectedOption3 = document.querySelector('input[value="radio3"]:checked');
    const selectedOption4 = document.querySelector('input[value="radio4"]:checked');

    if (selectedOption1) {
        charmander++
    }
    if (selectedOption2) {
        squirtle++
    }
    if (selectedOption3) {
        bulbassauro++
    }
    if (selectedOption4) {
        pikachu++
    }

    radios.innerHTML = ''
    //Charmander >
    if (charmander > squirtle && charmander > bulbassauro && charmander > pikachu) {
        resultado.innerHTML =
            `
        <div class="content-reset" id="resetar">
        <h2>Você se idêntificou com o Charmander!</h2>
        <button onclick="reset()" class="proximaPergunta">Resetar quiz</button>
        </div>`
    }
    //Squirtle >
    if (squirtle > charmander && squirtle > bulbassauro && squirtle > pikachu) {
        radios.innerHTML  = ""
        resultado.innerHTML =
        `
        <div class="content-reset" id="resetar">
        <h2>Você se idêntificou com o Squirtle!</h2>
        <button onclick="reset()" class="proximaPergunta">Resetar quiz</button>
        </div>`
    }
    //Bulbassauro >
    if (bulbassauro > charmander && bulbassauro > squirtle && bulbassauro > pikachu) {
        radios.innerHTML  = ""
        resultado.innerHTML =
        `
        <div class="content-reset" id="resetar">
        <h2>Você se idêntificou com o Bulbassauro!</h2>
        <button onclick="reset()" class="proximaPergunta">Resetar quiz</button>
        </div>`
    }
    //Pikachu >
    if (pikachu > charmander && pikachu > squirtle && pikachu > bulbassauro) {
        radios.innerHTML  = ""
        resultado.innerHTML =
        `
        <div class="content-reset" id="resetar">
        <h2>Você se idêntificou com o Pikachu!</h2>
        <button onclick="reset()" class="proximaPergunta">Resetar quiz</button>
        </div>`
    }
}

function reset() {
    resetar.innerHTML = ``;
    contador = 0;
    charmander = 0;
    squirtle = 0;
    bulbassauro = 0;
    pikachu = 0;
}