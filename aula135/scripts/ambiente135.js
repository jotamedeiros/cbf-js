const config = {
    titulo: 'Teste',
    texto: 'Seja sócio-rei!',
    cor: '#48f'
}

const boxmsg = new Boxmsg(config)

const btn_viewbox = document.querySelector('#btn-viewbox')

btn_viewbox.addEventListener('click', (evt) => {
    boxmsg.mostrar()
})