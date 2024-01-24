const valor1 = document.querySelector('input[type=number]#valor1')
const valor2 = document.querySelector('input[type=number]#valor2')
const resultado = document.querySelector('#resultado')
const soma = document.querySelector('#soma')
const subtracao = document.querySelector('#subtracao')
const multiplicacao = document.querySelector('#multiplicacao')
const divisao = document.querySelector('#divisao')


// Array de operações
const op = [
    (n1, n2) => {
        res = n1 + n2
        return res
    },

    (n1, n2) => {
        res = n1 - n2
        return res
    },

    (n1, n2) => {
        res = n1 * n2
        return res
    },

    (n1, n2) => {
        res = n1 / n2
        return res
    },
]

// Eventos dos botões

// Botão de soma
soma.addEventListener('click', (evt) => {
    let res = op[0](Number(valor1.value), Number(valor2.value))
    resultado.innerHTML = res
})


// Botão de subtração
subtracao.addEventListener('click', (evt) => {
    let res = op[1](Number(valor1.value), Number(valor2.value))
    resultado.innerHTML = res
})

// Botão de multiplicação
multiplicacao.addEventListener('click', (evt) => {
    let res = op[2](Number(valor1.value), Number(valor2.value))
    resultado.innerHTML = res
})

// Botão de divisão
divisao.addEventListener('click', (evt) => {
    let res = op[3](Number(valor1.value), Number(valor2.value))
    resultado.innerHTML = res
})