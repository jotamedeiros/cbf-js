const carro = document.querySelector('#carro')
const btn_esquerda = document.querySelector('#btn_esquerda')
const btn_direita = document.querySelector('#btn_direita')
const btn_parar = document.querySelector('#btn_parar')

const init = () => {
    carro.style.position = 'relative'
    carro.style.left = '0px'
    carro.style.width = '100px'
    tamMax = window.innerWidth - parseInt(carro.style.width)
}

let anima = null
let tamMax = null

const move = (dir) => {
    if (dir > 0) {
        if (parseInt(carro.style.left) <= tamMax) {
            carro.style.left = parseInt(carro.style.left) + (10 * dir) + 'px'
            anima = setTimeout(move, 20, dir)
        } else {
            clearTimeout(anima)
        }
    } else if (dir < 0) {
        if (parseInt(carro.style.left) >= 0) {
            carro.style.left = parseInt(carro.style.left) + (10 * dir) + 'px'
            anima = setTimeout(move, 20, dir)
        } else {
            clearTimeout(anima)
        }
    }
    console.log(tamMax)
}

btn_parar.addEventListener('click', (evt) => {
    clearTimeout(anima)
})

btn_esquerda.addEventListener('click', (evt) => {
    clearTimeout(anima)
    move(-1)
})

btn_direita.addEventListener('click', (evt) => {
    clearTimeout(anima)
    move(1)
})

//window.onload = init
window.addEventListener('load', init())
window.addEventListener('resize', () => {
    let tamMax = window.innerWidth - parseInt(carro.style.width)
})