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