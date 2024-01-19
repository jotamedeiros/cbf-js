const caixa1 = document.querySelector('#caixa1')
// const btn_c1 = document.querySelector('#c1')

// Variável que recebe o array de todas as div's pertencentes a classe '.curso'.
const todosCursos = [...document.querySelectorAll('.curso')]


// Evento que dispara o 'clicou' ao clicar no container
caixa1.addEventListener('click', (evt) => {
    console.log('clicou!')
    console.log(evt)
})

// Evento que aplica o método 'stopPropagation()' nas div's e impede o disparo do evento 'clicou'.
todosCursos.map((e) => {
    e.addEventListener('click', (evt) => {
        evt.stopPropagation()
    })
})


// btn_c1.addEventListener('click', (evt) => {
//     evt.stopPropagation()
// })