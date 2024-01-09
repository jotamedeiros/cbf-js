// Operadores de comparação de igualdade estrita e ampla

let n1 = 1
let n2 = "1"

let v1 = {nome: 'João'}
let v2 = v1

console.log(v1 === v2)

// Leitura e impressão de dados via javascript

let nome = prompt(`Insira seu nome: `)

document.write(`Olá ${nome}!`)


// Operadores Note e Different

let b1 = 1
let b2 = 2

console.log(!(b1 != b2))


// Operadores Mobile e Desktop

if (navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone|iPad|iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)
|| navigator.userAgent.match(/Opera Mini/i)
|| navigator.userAgent.match(/IEMobile/i)
) {
    console.log('Celular')
} else {
    console.log('PC')
}


// Nomenclatura de variáveis e escopo

let name = 'João'

{
    let siglacurso = 'JS'
    console.log(siglacurso)
}

const curso = () => {
    let curso = 'Javascript'
    console.log(curso)
}

curso()