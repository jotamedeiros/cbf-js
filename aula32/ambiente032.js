const cursosTodos = [...document.getElementsByClassName('curso')]
const cursosC1 = [...document.getElementsByClassName('c1')]
const cursosC2 = [...document.getElementsByClassName('c2')]
const cursoEspecial = document.getElementsByClassName('curso') [0]

console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)

// cursosTodos.map((el) => {
//     el.classList.add('destaque')
// })

cursosC1.map((el) => {
    el.classList.add('destaque')
})

// cursosC2.map((el) => {
//     el.classList.add('destaque')
// })

cursoEspecial.classList.add('especial')