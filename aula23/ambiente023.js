// Função parametrizada

function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(10, 5))


// Função com parâmetros REST

function soma(...valores) {
    let tam = valores.length
    let res = 0
    for (let i = 0; i < tam; i++) {
        res += valores[i]
    }
    return res
}

console.log(soma(10, 5, 2, 8))



// Função com parâmetros REST com 'for of'


function soma(...valores) {
    let res = 0
    for (i of valores) {
        res += i
    }
    return res
}

console.log(soma(10, 5, 2, 8))


// Função com parâmetros REST com 'for in'

function soma(...valores) {
    let tam = valores.length
    let res = 0
    for (n in valores) {
        res += valores[n]
    }
    return res
}

console.log(soma(10, 5, 2, 8))