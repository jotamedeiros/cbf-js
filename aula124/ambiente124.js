const p_temp = document.querySelector('#p_temp')
const p_nivel = document.querySelector('#p_nivel')
const p_pressao = document.querySelector('#p_pressao')
const btn_fetch = document.querySelector('#btn_fetch')

const obterDados = () => {
    const endpoint = 'https://2bdd268f-1da7-4467-b1ab-7b6893779373-00-a6aleaoqj3vm.worf.replit.dev/'

    fetch(endpoint)

    .then(res => res.json())
    .then(res => {
        console.log(res)
        p_temp.innerHTML = `Temperatura: ${res.temperatura}`
        p_nivel.innerHTML = `Nível: ${res.nivel}`
        p_pressao.innerHTML = `Pressão: ${res.pressao}`
    })
}

// btn_fetch.addEventListener('click', (evt) => {
//     const intervaloId = setInterval(obterDados, 3000)
// })


let dados = {
    nome: 'Bruno',
    canal: 'CFB Cursos',
    curso: 'JavaScript'
}

let cabecalho = {
    method: 'POST',
    body: JSON.stringify(dados)
}

const gravarDados = () => {
    const endpoint = 'https://2bdd268f-1da7-4467-b1ab-7b6893779373-00-a6aleaoqj3vm.worf.replit.dev/'

    fetch(endpoint, cabecalho)

    .then(res => res.json())
    .then(ret => {
        console.log(ret)
    })
}

btn_fetch.addEventListener('click', (evt) => {
    gravarDados()
})