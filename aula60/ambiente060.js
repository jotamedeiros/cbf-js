const btn_add = document.querySelector('#btn_add')
const res = document.querySelector('.res')
let pessoas = []

const addPessoa = () => {
    res.innerHTML = ''
    pessoas.map((el, i) => {
        const div = document.createElement('div')
        div.setAttribute('class', 'pessoa')
        div.innerHTML = `Nome: ${el.getNome()} <br/> Idade: ${el.getIdade()}`
        res.appendChild(div)
    })
}

btn_add.addEventListener('click', (evt) => {
    const nome = document.querySelector('#f_nome')
    const idade = document.querySelector('#f_idade')
    const p = new Pessoa(nome.value, idade.value)
    pessoas.push(p)
    nome.value = ''
    idade.value = ''
    nome.focus()
    addPessoa()
})

function Pessoa(pNome, pIdade) {
    this.nome = pNome,
    this.idade = pIdade,

    this.getNome = function() {
        return this.nome
    },

    this.getIdade = function() {
        return this.idade
    },

    this.setNome = function(nome) {
        this.nome = nome
    },

    this.setIdade = function(idade) {
        this.idade = idade
    },

    this.info = function() {
        console.log(`Nome.: ${this.nome}`)
        console.log(`Idade.: ${this.idade}`)
        console.log(`=========================`)
    }
}

