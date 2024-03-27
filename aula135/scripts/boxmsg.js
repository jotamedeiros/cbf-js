const head = document.head

const estilo = '<link rel="stylesheet" href="./styles/boxmsg.css"></link>'
head.innerHTML += estilo

class Boxmsg {
    titulo = null
    texto = null
    cor = null
    destino = null
    divmsg = null

    constructor(config) {
        this.titulo = config.titulo
        this.texto = config.texto
        this.cor = config.cor
        this.destino = document.body
    }

    mostrar = () => {
        this.divmsg = document.createElement('div')
        this.divmsg.setAttribute('id', 'divmsg')
        this.divmsg.setAttribute('class', 'divmsg')
        this.destino.prepend(this.divmsg)

        const areaBoxmsg = document.createElement('div')
        areaBoxmsg.setAttribute('id', 'areaBoxmsg')
        areaBoxmsg.setAttribute('class', 'areaBoxmsg')
        this.divmsg.appendChild(areaBoxmsg)

        const tituloBoxmsg = document.createElement('div')
        tituloBoxmsg.setAttribute('id', 'tituloBoxmsg')
        tituloBoxmsg.setAttribute('class', 'tituloBoxmsg')
        tituloBoxmsg.style.backgroundColor = `${this.cor}`
        tituloBoxmsg.innerHTML = this.titulo
        areaBoxmsg.appendChild(tituloBoxmsg)
    }

    ocultar = () => {

    }
}