const p_array = document.querySelector('#array')
const btnReduzir = document.querySelector('#btnReduzir')
const resultado = document.querySelector('#resultado')

const elementos_array = [1, 2, 3, 4, 5]

let aux = []
let atual = []
// let dobro = []

p_array.innerHTML = `[${elementos_array}]`

btnReduzir.addEventListener('click', (evt) => {
    aux.push(elementos_array[0] - 1)
    atual.push(elementos_array[0])
    // dobro.push(elementos_array[0] * 2)
    resultado.innerHTML = elementos_array.reduce((ant, el, i) => {
        aux.push(ant)
        atual.push(el)
        // dobro.push(el * 2)
        return el + ant
    })
    // resultado.innerHTML += `<br/> Anterior: ${aux} <br/> Atual: ${atual} <br/> Dobro: ${dobro}`
    resultado.innerHTML += `<br/> Anterior: ${aux} <br/> Atual: ${atual}`
})