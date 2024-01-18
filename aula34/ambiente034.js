const c1 = document.querySelector('#c1')

const cursos = [...document.querySelectorAll('.curso')]

cursos.map((el) => {
    el.addEventListener('click', (evt) => {
        const e = evt.target
        e.classList.add('destaque')
        console.log(`${e.innerHTML} foi clicado`)
    })
})

// const msg = () => {
//     alert('Clicou!')
// }

// c1.addEventListener('click', msg)

// c1.addEventListener('click', (evt) => {
//     const el = evt.target
//     el.classList.add('destaque')
// })

