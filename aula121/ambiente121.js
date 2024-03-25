// const f_texto = document.querySelector('#f-texto')
// const p_texto = document.querySelector('#p_texto')
// const btn_texto = document.querySelector('#btn_texto')

// btn_texto.addEventListener('click', (evt) => {

// })

// let num = 10
// const curso = 'JavaScript'


// localStorage.setItem('nome', 'João')
// localStorage.setItem('canal', 'CFB Cursos')
// localStorage.setItem('curso', curso)


// // localStorage.removeItem('curso')
// // alert(localStorage.getItem(localStorage.key(0)))
// // alert(window.localStorage.getItem('nome'))
// // alert(window.localStorage.getItem('canal'))
// // alert(window.localStorage.getItem('curso'))
// // alert(localStorage.length)
// localStorage.clear()


// sessionStorage.setItem('nome', 'João')
// sessionStorage.setItem('canal', 'CFB Cursos')
// sessionStorage.setItem('curso', curso)


const form = document.querySelector('#form')
const name = document.querySelector('#name')
const welcome = document.querySelector('#welcome')
const username = document.querySelector('#username')
const logout = document.querySelector('#logout')

// checa se nome do usuário foi preenchido.
const checkUser = () => {
    const userName = localStorage.getItem('name')

    if (userName) {
        form.style.display = 'none'
        welcome.style.display = 'block'

        username.innerHTML = `${userName}`
    } else {
        form.style.display = 'block'
        welcome.style.display = 'none'
    }
}

// resgata e salva o 'name' preenchido pelo usuário
form.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const nome = name.value

    localStorage.setItem('name', nome)

    name.value = ''

    checkUser()
})

// remove o 'name' do usuário ao clicar no 'logout'
logout.addEventListener('click', (evt) => {
    localStorage.removeItem('name')

    checkUser()
})

// Início da aplicação
checkUser();