// const head = document.head
const body = document.body

// const estilo = '<link rel="stylesheet" href="topo.css"></link>'
// head.innerHTML += estilo

// formatação do 'topo'
const estiloTopo =
    "display: flex;" +
    "justify-content: space-between;" +
    "align-items: center;" +
    "background-color: #f5f5f5;" +
    "height: 150px;"


// criação do elemento 'topo'
const topo = document.createElement('div')
topo.setAttribute('id', 'topo')
topo.setAttribute('style', estiloTopo)
// topo.setAttribute('class', 'topo')
body.prepend(topo)


// formatação da 'img' do logo
const estiloImg =
    "width: 350px;"+
    "height: 200px;"


// criação do elemento 'logo'
const logo = 
    "<div id='logo' class='logo'>" +
        `<img src='./images/logo-santos.png' style='${estiloImg}' title='CFB Cursos' />` +
    "</div>"
topo.innerHTML += logo


// formatação do campo 'login'
const estiloLogin =
    `margin-right: 100px;`


// criação do campo de 'login' no cabeçalho
const login =
    `<div id='login' class='login' style='${estiloLogin}'>` +
        "<p id='matricula'>Matrícula: <span></span></p>" +
        "<p id='nome'>Nome: <span></span></p>" +
    "</div>"
topo.innerHTML += login