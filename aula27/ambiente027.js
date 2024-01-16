// Função geradora

function* perguntas() {
    const nome = yield 'Qual é o seu nome?'
    const esporte = yield 'Qual seu esporte favorito?'
    return `Seu nome é ${nome}, seu esporte favorito é ${esporte}`
}

const itp = perguntas()

console.log(itp.next().value)
console.log(itp.next('João').value)
console.log(itp.next('Futebol').value)


// Função geradora com loop

function* contador() {
    let i = 0
    while (true) {
        yield i++
    }
}

const itc = contador()
for (let i = 0; i < 15; i++) {
    console.log(itc.next().value)
}

// Função geradora com loop 'for of'

function* contador() {
    let i = 0
    while (true) {
        yield i++
        if (i > 50) {
            break
        }
    }
}

const itc = contador()
for (c of itc) {
    console.log(c)
}