function nome() {
    console.log('COLOSSAL DE VILA BELMIRO')
}

function soma2_10() {
    let n1 = 2
    let n2 = 10
    let soma = n1 + n2
    console.log(soma)
}

function mudarTexto() {
    let d1 = document.querySelector('div#d1')
    let d2 = document.querySelector('div#d2')
    let d3 = document.querySelector('div#d3')

    d1.innerHTML = 'PEIXUDO'
    d2.innerHTML = 'COLOSSAL'
    d3.innerHTML = 'LEÃO DO MAR'

    
}

for (let i = 0; i <= 10; i++) {
    nome()
}

for (let i = 0; i <= 4; i++) {
    soma2_10()
}