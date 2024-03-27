import { Boxmsg } from "./boxmsg.js"

const config = {
    cor: '#48f'
}

Boxmsg.config(config)

// const boxmsg = new Boxmsg(config)

const btn_viewbox = document.querySelector('#btn-viewbox')
const btn_viewbox2 = document.querySelector('#btn-viewbox2')
const btn_viewbox3 = document.querySelector('#btn-viewbox3')

btn_viewbox.addEventListener('click', (evt) => {
    Boxmsg.mostrar('Seja Sócio-Rei!', 'Inscreva-se agora mesmo, torne-se Sócio-Rei do maior clube da Terra e faça parte do reinado!')
})

btn_viewbox2.addEventListener('click', (evt) => {
    Boxmsg.mostrar('Associe-se!', 'Associe-se hoje mesmo e faça parte da retomada do maior clube do Mundo!')
})

btn_viewbox3.addEventListener('click', (evt) => {
    Boxmsg.mostrar('Seja Santasticamente Sócio!', 'Hoje mesmo você pode contribuir com o crescimento do nosso Peixão!')
})