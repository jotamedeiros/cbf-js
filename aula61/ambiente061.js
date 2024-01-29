const btn_add = document.querySelector('#btn_add')
const res = document.querySelector('.res')
const nome = document.querySelector('#f_nome')
const idade = document.querySelector('#f_idade')
let pessoas = []


const criarObj = () => {
    const Pessoa = {
        nome:'',
        idade:'',
        
        getNome: function() {
            return this.nome
        },
    
        getIdade: function() {
            return this.idade
        },
    
        setNome: function(nome) {
            this.nome = nome
        },
    
        setIdade: function(idade) {
            this.idade = idade
        }
    }
    Pessoa.setNome(nome.value)
    Pessoa.setIdade(idade.value)
    pessoas.push(Pessoa)
}


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
    criarObj()
    nome.value = ''
    idade.value = ''
    nome.focus()
    addPessoa()
})