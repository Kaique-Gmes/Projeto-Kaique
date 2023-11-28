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
    var avaliacoes = [];
function avaliar(){
    var avaliacao = input_avaliador.value;
    avaliacoes.push(avaliacao);

    footerConfig.innerHTML =
    `
    <h1>Avaliaçoes<h1/>
    `
    for(var contar = 0; contar < avaliacoes.length; contar ++){
        footerConfig.innerHTML += 
        `<p>
        Avaliacão - ${contar + 1} ${avaliacoes[contar]}
        <p/>
        `
        footerConfigBotao.innerHTML = `<button onclick="avaliarNovamente()" class="botao-avaliar">Avaliar novamente</button>`
    }
    
}
var avaliacao = input_avaliador.value;
function avaliarNovamente(){
    
    footerConfigBotao.innerHTML = ""

    footerConfig.innerHTML = 
    `
    <h1>Faça uma avaliação anônima sobre o site</h1>
    <input type="text" class="input-avaliacao" id="input_avaliador">
    `       
    footerConfigBotao.innerHTML = `<button onclick="avaliar()" class="botao-avaliar">Avaliar novamente</button>`
}