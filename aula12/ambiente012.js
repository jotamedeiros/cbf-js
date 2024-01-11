// Spread concatenando objetos

/*
let n1 = [10, 20, 30]
let n2 = [11, 22, 33, 44, 55]
let n3 = [...n1,...n2]

const jogador1 = {nome: 'João', energia: 100, vidas: 3, magia: 150}
const jogador2 = {nome: 'John', energia: 100, vidas: 5, velocidade: 80}
const jogador3 = {...jogador1, ...jogador2}

console.log(jogador3)

console.log(`n1: ${n1}`)
console.log(`n2: ${n2}`)
console.log(`n3: ${n3}`)
console.log(`tipo de n3: ${typeof(n3)}`)
*/

// Spread em funções

/*
const soma = (v1, v2, v3) => {
    return v1 + v2 + v3
}

let valores = [1, 5, 4, 10, 15, 35]

console.log(soma(...valores))
*/


// Spread no HTML

const objs1 = document.getElementsByTagName('div')
const objs2 = [...document.getElementsByTagName('div')]

objs2.forEach(element => {
    element.innerHTML = 'João Lindo e Sensacional está aprendendo finalmente.'
});

console.log(objs1)
console.log(objs2)