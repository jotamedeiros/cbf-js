// Primeira forma de utilizar o 'filter()', com uma função pré-existente [menos prática]:

const idades = [15, 21, 30, 17, 18, 44, 12, 50]

// const filtroMaior18 = (valor) => {
//     if (valor >= 18) {
//         return valor
//     }
// }

// const maior = idades.filter(filtroMaior18)


// Segunda forma de utilizar, criando a função na chamada do 'filter()' [mais prática]:

const maior = idades.filter((val) => {
    if (val >= 18) {
        return val
    }
})

const menor = idades.filter((val) => {
    if (val <= 18) {
        return val
    }
})

console.log(idades)
console.log(maior)
console.log(menor)


// EXEMPLO: Classificação de uma corrida:

const ranking = ['João', 'Cibele', 'Millena', 'Guilherme', 'Gustavo', 'Matheus', 'Sherek', 'Charles', 'Gava', 'Murillo']

const podium = ranking.filter((el, i) => {
    if (i >= 0 && i <= 2) {
        return el
    }
})

console.log(ranking)

podium.map((el, i) => {
    console.log(`Atleta: ${el} - Posição: ${i + 1}`)
})