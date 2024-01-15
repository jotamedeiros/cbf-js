// function mudarTexto() {
//     let d1 = document.querySelector('div#d1')
//     let d2 = document.querySelector('div#d2')
//     let d3 = document.querySelector('div#d3')

//     d1.innerHTML = 'PEIXUDO'
//     d2.innerHTML = 'LEÃO DO MAR'
//     d1.innerHTML = 'COLOSSAL DE VILA BELMIRO'

// }

// function canal() {
//     let n1 = 10
//     let n2 = 2
//     let res = n1 * n2

//     if (res % 2 == 0) {
//         return 'par'
//     } else {
//         return 'ímpar'
//     }
// }

// let res = canal()

// console.log(res) 

function parImpar(n1,n2) {
    let res = n1 * n2

    if (res % 2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

console.log(parImpar(10, 5))