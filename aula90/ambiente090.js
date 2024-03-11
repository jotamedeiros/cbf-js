const objetos = document.querySelector('#objetos')


const computador = {
    cpu: '',
    ram: '',
    hd: '',

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

delete(computador.hd)

const c1 = Object.assign({}, computador)
c1.info()

const c2 = Object.create(computador)
c2.cpu = 'i9'
c2.ram = '64gb'
c2.hd = '2tb'
c2.info()

const o1 = {obj1: '1'}
const o2 = {obj2: '2'}
const o3 = {obj3: '3'}
const o4 = Object.assign(o1, o2, o3)
// console.log(o4)


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