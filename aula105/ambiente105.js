let nome = new String('Santos Futebol Clube 1912')
let email = 'jota@jota.com.br'
let numeros = '1, 10, 100, 1000'

console.log(nome)

// modificador 'i' [ignora 'Case Sensitive']
console.log(nome.search(/Futebol/i))

// modificador 'o' [retorno global]
console.log(nome.match(/O/ig))

// função 'replace()' aceita RegEx
console.log(nome.replace(/O/ig, 'asso'))

// limitador colchetes [] busca caracteres independente da ordem
console.log(nome.match(/[bol]/ig))

// limitador hífen [-] 'até'
console.log(email.match(/[a-m]/ig))

// limitador pipe [|] 'também'
console.log(nome.match(/[a-d | 0-5]/ig))

// Metacaracteres
console.log(nome.match(/\d/ig)) // Números
console.log(nome.match(/\s/ig)) // Espaços
console.log(nome.match(/\bF/ig)) // Caracteres AlfaNuméricos


// Quantificadores
console.log(nome.match(/o+/ig)) // +
console.log(numeros.match(/10/ig))
console.log(numeros.match(/10+/ig)) // +
console.log(numeros.match(/10*/ig)) // *
console.log(numeros.match(/10?/ig)) // ?
