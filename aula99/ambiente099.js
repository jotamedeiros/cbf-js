class Jogador {
    constructor(nome) {
        this.nome = nome
        this.id = Symbol()
    }
}

let jogadores = []

for (let i = 1; i <= 4; i++) {
    jogadores.push(new Jogador(`j${i}`))
}

let s1 = jogadores[0].id

jogadores = jogadores.filter((el) => {
    return el.id != s1
})

let s = jogadores.map((el) => {
    return el.id
})

console.log(jogadores)
console.log(s1)
console.log(s)