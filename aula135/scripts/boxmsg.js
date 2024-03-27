const head = document.head

const estiloBox = '<link rel="stylesheet" href="./styles/boxmsg.css"></link>'
head.innerHTML += estiloBox

class Boxmsg {
    static cor = '#888'
    static destino = null
    static divmsg = null
    static tipo = null
    static comando_sn = null
    static textos = []

    static mostrar = (config, titulo, texto) => {
        this.cor = config.cor
        this.tipo = config.tipo
        this.textos = config.textos
        this.comando_sn = () => {config.comando_sn()}
        this.destino = document.body
        this.titulo = titulo
        this.texto = texto
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

        const corpoBoxmsg = document.createElement('div')
        corpoBoxmsg.setAttribute('id', 'corpoBoxmsg')
        corpoBoxmsg.setAttribute('class', 'corpoBoxmsg')
        corpoBoxmsg.innerHTML = this.texto
        areaBoxmsg.appendChild(corpoBoxmsg)

        const rodapeBoxmsg = document.createElement('div')
        rodapeBoxmsg.setAttribute('id', 'rodapeBoxmsg')
        rodapeBoxmsg.setAttribute('class', 'rodapeBoxmsg')
        areaBoxmsg.appendChild(rodapeBoxmsg)

        if (this.tipo == 'ok'){
            const btnBoxmsg = document.createElement('button')
            btnBoxmsg.setAttribute('id', 'btnBoxmsg')
            btnBoxmsg.setAttribute('class', 'btnBoxmsg')
            btnBoxmsg.style.backgroundColor = `${this.cor}`
            btnBoxmsg.innerHTML = 'ok'
            btnBoxmsg.addEventListener('click', (evt) => {
                this.ocultar()
            })
            rodapeBoxmsg.appendChild(btnBoxmsg)
        } else if (this.tipo == 'sn') {
            const btnBoxSim = document.createElement('button')
            btnBoxSim.setAttribute('id', 'btnBoxSim')
            btnBoxSim.setAttribute('class', 'btnBoxSim')
            btnBoxSim.style.backgroundColor = `${this.cor}`
            btnBoxSim.innerHTML = this.textos[0]
            btnBoxSim.addEventListener('click', (evt) => {
                this.comando_sn()
                this.ocultar()
            })
            rodapeBoxmsg.appendChild(btnBoxSim)

            const btnBoxNao = document.createElement('button')
            btnBoxNao.setAttribute('id', 'btnBoxNao')
            btnBoxNao.setAttribute('class', 'btnBoxNao')
            btnBoxNao.style.backgroundColor = `${this.cor}`
            btnBoxNao.innerHTML = this.textos[1]
            btnBoxNao.addEventListener('click', (evt) => {
                this.ocultar()
            })
            rodapeBoxmsg.appendChild(btnBoxNao)
        }
        
    }

    static ocultar = () => {
        this.divmsg.remove()
    }
}

export {Boxmsg}