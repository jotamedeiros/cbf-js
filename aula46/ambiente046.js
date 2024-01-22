const caixaCursos = document.querySelector('#caixaCursos')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'ReactNative']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')
const btnRemoverCurso = document.getElementById('btnRemoverCurso')
const btnAdicionarNovoCursoAntes = document.querySelector('#btnAdicionarAntes')
const btnAdicionarNovoCursoDepois = document.querySelector('#btnAdicionarDepois')
const nomeCurso = document.querySelector('#nomeCurso')


let indice = 0

const tirarSelecao = () => {
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    cursosSelecionados.map((el, i) => {
        el.classList.remove('selecionado')
    })
}

const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', `c${indice}`)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = curso
    novoElemento.addEventListener('click', (evt) => {
        tirarSelecao()
        evt.target.classList.toggle('selecionado')
    })
    return novoElemento
}


cursos.map((el, chave) => {
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const cursoSelecionado = () => {
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    return cursosSelecionados[0]
}

btnCursoSelecionado.addEventListener('click', (evt) => {
    try {
        alert(`Curso selecionado: ${cursoSelecionado().innerHTML}`)
    } catch(ex) {
        alert(`Você precisa selecionar um curso!`)
    }
})

btnRemoverCurso.addEventListener('click', (evt) => {
    const cs = cursoSelecionado()
    if (cs != undefined) {
        cs.remove()
    } else {
        alert(`Você precisa selecionar um curso!`)
    }
})

btnAdicionarNovoCursoAntes.addEventListener('click', (evt) => {
        try {
            if (nomeCurso.value != '') {
                const novoCurso = criarNovoCurso(nomeCurso.value)
                caixaCursos.insertBefore(novoCurso, cursoSelecionado())
            } else {
                alert('O novo curso precisa ter um nome!')
            }
        } catch(ex) {
            alert(`Você precisa selecionar um curso!`)
        }
    nomeCurso.value = ''
})


btnAdicionarNovoCursoDepois.addEventListener('click', (evt) => {
        try {
            if (nomeCurso.value != '') {
                const novoCurso = criarNovoCurso(nomeCurso.value)
                caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling)  
            } else {
                alert('O novo curso precisa ter um nome!')
            }
        } catch(ex) {
            alert(`Você precisa selecionar um curso!`)
        }
    nomeCurso.value = ''
})