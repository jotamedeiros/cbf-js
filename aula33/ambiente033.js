const divTodas = [...document.getElementsByTagName('div')]
const cursosTodos = [...document.getElementsByClassName('curso')]
const cursosC1 = [...document.getElementsByClassName('c1')]
const cursosC2 = [...document.getElementsByClassName('c2')]
const cursoEspecial = document.getElementById('c1')

const query_divTodas = [...document.querySelectorAll('div[class]')]
const query_pDentroDiv = [...document.querySelectorAll('div > p')]
const query_cursosTodos = [...document.querySelectorAll('.curso')]
const query_cursosC1 = [...document.querySelectorAll('.c1')]
const query_cursosC2 = [...document.querySelectorAll('.c2')]
const c7 = document.querySelector('div#c7')
const c14 = document.querySelector('div.classe14')

console.log(query_divTodas)
console.log(query_pDentroDiv)
console.log(query_cursosTodos)
console.log(query_cursosC1)
console.log(query_cursosC2)
console.log(c7)
console.log(c14)

// console.log(divTodas)
// console.log(cursosTodos)
// console.log(cursosC1)
// console.log(cursosC2)
// console.log(cursoEspecial)

// cursosTodos.map((el) => {
//     el.classList.add('destaque')
// })

// cursosC1.map((el) => {
//     el.classList.add('destaque')
// })