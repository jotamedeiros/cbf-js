const objetos = document.querySelector('#objetos')

const computador = {
    cpu: 'i9',
    ram: '64gb',
    hd: '2tb',

    info: function() {
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`HD: ${this.hd}`)
        console.log(`Monitor: ${this.monitor}`)
        console.log(`Placa de Vídeo: ${this.placaVideo}`)
    }
}

computador['monitor'] = '22pol'
computador.placaVideo = 'GTX 1650'

// console.log(computador)
// console.log(computador['monitor'])
// console.log(computador.placaVideo)
// console.log(computador.info())


const computadores = [
    {
        cpu: 'i9',
        ram: '64gb',
        hd: '2tb'
    },

    {
        cpu: 'i7',
        ram: '32gb',
        hd: '2tb'
    },

    {
        cpu: 'i5',
        ram: '16gb',
        hd: '1gb'
    }
]

computadores.forEach((el) => {
    // console.log(el)
    const div = document.createElement('div')
    div.innerHTML = `<p>${el.cpu}</p>
                     <p>${el.ram}</p>
                     <p>${el.hd}</p>`
    div.setAttribute('class', 'computador')

    objetos.appendChild(div)
})

// computador.info()
// console.log(computadores)

// // objetos.innerHTML = `${computador.cpu} - ${computador.ram} - ${computador.hd}`

// objetos.innerHTML = JSON.stringify(computadores)