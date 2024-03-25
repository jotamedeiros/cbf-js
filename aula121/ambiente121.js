const f_texto = document.querySelector('#f-texto')
const p_texto = document.querySelector('#p_texto')
const btn_texto = document.querySelector('#btn_texto')

btn_texto.addEventListener('click', (evt) => {

})

let num = 10
const curso = 'JavaScript'


localStorage.setItem('nome', 'João')
localStorage.setItem('canal', 'CFB Cursos')
localStorage.setItem('curso', curso)


// localStorage.removeItem('curso')
// alert(localStorage.getItem(localStorage.key(0)))
// alert(window.localStorage.getItem('nome'))
// alert(window.localStorage.getItem('canal'))
// alert(window.localStorage.getItem('curso'))
// alert(localStorage.length)
// localStorage.clear()


sessionStorage.setItem('nome', 'João')
sessionStorage.setItem('canal', 'CFB Cursos')
sessionStorage.setItem('curso', curso)