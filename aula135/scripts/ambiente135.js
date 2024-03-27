import { Boxmsg } from "./boxmsg.js"

const config = {
    cor: '#48f',
    tipo: 'ok', // tipos: 'ok' / 'sn'
    textos: ['sim', 'não'],
    comando_sn: () => {}
}

const fsim = () => {
    console.log('Botão SIM pressionado!')
}

// const boxmsg = new Boxmsg(config)

const btn_viewbox = document.querySelector('#btn-viewbox')
const btn_viewbox2 = document.querySelector('#btn-viewbox2')
const btn_viewbox3 = document.querySelector('#btn-viewbox3')


btn_viewbox.addEventListener('click', (evt) => {
    config.tipo = 'ok'
    Boxmsg.mostrar(config, 'Seja Sócio-Rei!', 'Inscreva-se agora mesmo, torne-se Sócio-Rei do maior clube da Terra e faça parte do reinado!')
})


btn_viewbox2.addEventListener('click', (evt) => {
    config.tipo = 'sn'
    config.comando_sn = () => {fsim()}
    Boxmsg.mostrar(config, 'Associe-se!', 'Associe-se hoje mesmo e faça parte da retomada do maior clube do Mundo!')
})


btn_viewbox3.addEventListener('click', (evt) => {
    config.tipo = 'sn'
    config.textos = ['ok', 'cancela']
    config.comando_sn = () => {}
    Boxmsg.mostrar(config, 'Seja Santasticamente Sócio!', 'Hoje mesmo você pode contribuir com o crescimento do nosso Peixão!')
})