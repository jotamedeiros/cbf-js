const p_array = document.querySelector('#array')
const btnVerificar = document.querySelector('#btnVerificar')
const resultado = document.querySelector('#resultado')

const elementos_array = [16, 12, 20, 17, 15, 13, 11, 19]

p_array.innerHTML = `[${elementos_array}]`

btnVerificar.addEventListener('click', (evt) => {
    const retorno = elementos_array.some((el, i) => {
        if (el < 18) {
            resultado.innerHTML = `Array não conforme na posição ${i}`
        }
        return el >= 18
    })
    if (retorno == true) {
        resultado.innerHTML = 'OK!'
    }
})