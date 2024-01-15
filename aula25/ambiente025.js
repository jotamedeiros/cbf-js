// Função anônima padrão

const soma = function(v1, v2) {
    return v1 + v2
}


// Arrow Function [sintaxe]

// const soma = () => {} 

const arrowSoma = (v1, v2) => {
    return v1 + v2
}

console.log(arrowSoma(10, 5))


// Arrow Function com apenas 1 parâmetro [não precisa dos parênteses para 1 parâmetro].

const nome = n => {
    return n
}

console.log(nome('João'))


// Arrow Function sem 'return' (operação simples) [não necessita de chaves {} ]

const add = n => n + 10

console.log(add(10))


// Arrow function com 1 parâmetro e sem 'return' [não precisa de parênteses nem chaves {}]

// const nome = n => n

// console.log(nome('João'))