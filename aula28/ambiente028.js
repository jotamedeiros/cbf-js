// Método 'map()'

const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React']

// cursos.map((el, i) => {
//     console.log(`Curso: ${el} - Posição do Curso: ${i}`)
// })

let c = cursos.map((el, i) => {
    return `<div> ${el} </div>`
})

console.log(c)


// Método 'map()' manipulando a DOM

let el = document.getElementsByTagName('div')
el = [...el]

console.log(el)

el.map((e, i) => {
    e.innerHTML = 'SANTÁSTICO'
})



const elem = document.getElementsByTagName('div')
const val = Array.prototype.map.call(elem, ({innerHTML}) => innerHTML)

console.log(val)


// Método 'map()' com funções


const converterInt = (e) => parseInt(e)
const dobrar = (e) => e * 2

let num = ['1', '2', '3', '4', '5'].map(dobrar)

console.log(num)