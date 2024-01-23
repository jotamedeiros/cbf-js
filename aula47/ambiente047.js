const p_array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btn_pesquisar = document.querySelector('#btnPesquisar')
const resultado = document.querySelector('#resultado')

// const elementos_array = [10, 5, 8, 2, 9, 15, 20]
const elementos_array = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']

p_array.innerHTML = `[${elementos_array}]`

btn_pesquisar.addEventListener('click', (evt) => {
    resultado.innerHTML = 'Valor não encontrado'
    const retorno = elementos_array.find((el, i) => {
         if (el.toUpperCase() == txt_pesquisar.value.toUpperCase()) {
            resultado.innerHTML = `Valor ${el} encontrado na posição ${i + 1}`
            return el
         }
    })
    console.log(retorno)
})