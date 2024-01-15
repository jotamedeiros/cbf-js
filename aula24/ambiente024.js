// Funções 'normais'

// function soma(n1, n2) {
//     return n1 + n2
// }

// Função 'anônima' [sem nome]

// const f = function(v1, v2) {
//     return v1 + v2
// }

// let res = f(10, 5)
// console.log(res)


// Função 'anônima' com parâmetros 'rest'

const f = function (...valores) {
    let res = 0
    for (i of valores) {
        res += i
    }
    return res
}

console.log(f(1, 2, 5, 10, 20))


// Função 'anônima' com constructor

const nf = new Function ('v1', 'v2', 'return v1 + v2')

console.log(nf(10, 5))