const caixa = document.querySelector('#caixa')

let cores = ['Azul', 'Verde', 'Vermelho', ['claro', 'escuro', 'médio']]
let cursos = ['HTML', 'CSS', 'Javascript', cores]

// cursos[0] = 'C++'
// cursos[1] = 2024

// cursos.push('C++')
// cursos.unshift('Python')
// cursos.shift()
// cursos.pop()

// console.log(cursos[0])
// console.log(cursos[1])

console.log(cursos[3][3][2])

cursos.map((el, i) => {
    let p = document.createElement('p')
    p.innerHTML = el
    caixa.appendChild(p)
})
