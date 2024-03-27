const head = document.head

const estilo = '<link rel="stylesheet" href="./styles/boxmsg.css"></link>'

class Boxmsg {
    constructor(config) {
        this.titulo = config.titulo
        this.texto = config.texto
        this.cor = config.cor
        this.destino = document.body
    }

    mostrar = () => {
        console.log(this.texto)
    }

    ocultar = () => {

    }
}