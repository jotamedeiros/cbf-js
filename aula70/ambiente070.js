const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaRes = document.querySelector('.res')
const display = document.querySelector('.display')
const teclaCpy = document.querySelector('#tCpy')
const teclaLimpar = document.querySelector('#tLimpar')
const teclaIgual = document.querySelector('#tIgual')
const teste = document.querySelector('#teste')

let sinal = false
let decimal = false

teclasNum.map((el, i) => {
    el.addEventListener('click', (evt) => {
        sinal = false
        if (evt.target.innerHTML == ',') {
            if (!decimal) {
                decimal = true
                if (display.innerHTML == '0') {
                    display.innerHTML = '0,'
                } else {
                    display.innerHTML += evt.target.innerHTML
                }
            }
        } else {
            if (display.innerHTML == '0') {
                display.innerHTML = ''
            }
            display.innerHTML += evt.target.innerHTML
        }
    })
})

teclasOp.map((el, i) => {
    el.addEventListener('click', (evt) => {
        if (!sinal) {
            sinal = true
            if (display.innerHTML == '0') {
                display.innerHTML = ''
            }
            if (evt.target.innerHTML == 'x') {
                display.innerHTML += '*'
            } else {
                display.innerHTML += evt.target.innerHTML
            }
        }
    })
})

teclaLimpar.addEventListener('click', (evt) => {
    sinal = false
    decimal = false
    display.innerHTML = 0
})

teclaIgual.addEventListener('click', (evt) => {
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})

teclaCpy.addEventListener('click', (evt) => {
    navigator.clipboard.writeText(display.innerHTML)
    // teste.select()
    // teste.setSelectionRange(0, 999999) // Mobile
    // navigator.clipboard.writeText(teste.value)
})