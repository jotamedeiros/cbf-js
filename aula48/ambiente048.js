const p_array = document.querySelector('#array')
const btnVerificar = document.querySelector('#btnVerificar')
const resultado = document.querySelector('#resultado')

const elementos_array = [21, 25, 19, 20, 18, 18, 22]

p_array.innerHTML = `[${elementos_array}]`

btnVerificar.addEventListener('click', (evt) => {
    // resultado.innerHTML = 'Array não conforme'
    const retorno = elementos_array.every((el, i) => {
        if (el < 18) {
            resultado.innerHTML = `Array não conforme na posição ${i}`
        }
        return el >= 18
    })
    if (retorno == true) {
        resultado.innerHTML = 'OK!'
    }
    // console.log(retorno)
})