// Aula 1 - Objetos

/*
class Pessoa {
    constructor(pNome) {
        this.nome = pNome
    }
}

let p1 = new Pessoa('Joao')
let p2 = new Pessoa('Bruno')
let p3 = new Pessoa('Cibele')

console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)
*/

// Continuação Aula 2 - Objetos

class Carro {
    canal = 'CFB Cursos'
    constructor(pNome, pTipo) {
        this.nome = pNome
        this.canal = 'Youtube'
        if (pTipo == 1) {
            this.tipo = 'Esportivo'
            this.velmax = 300
        } else if (pTipo == 2) {
            this.tipo = 'Utilitário'
            this.velmax = 100
        } else if (pTipo == 3) {
            this.tipo = 'Passeio'
            this.velmax = 160
        } else {
            this.tipo = 'Militar'
            this.velmax = 180
        }
    }
    getNome() {
        return this.nome
    }

    getTipo() {
        return this.tipo
    }

    getVelMax() {
        return this.velmax
    }

    getInfo() {
        return [this.nome, this.tipo, this.velmax]
    }

    setNome(nome) {
        this.nome = nome
    }

    setTipo(tipo) {
        this.tipo = tipo
    }

    setVelMax(velmax) {
        this.velmax = velmax
    }

    info() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Vel.Max: ${this.velmax}`)
        console.log(`Canal: ${this.canal}`)
        console.log(`============================`)
    }
}

let c1 = new Carro('Rapidão', 1)
let c2 = new Carro('Super Luxo', 3)
let c3 = new Carro('Bombadão', 4)
let c4 = new Carro('Carrego Tudo', 2)

// c1.info()
// console.log(c1.getInfo()[0])

c1.setNome('Rapidassozasso')
c1.setVelMax(500)

c1.info()
c2.info()
c3.info()
