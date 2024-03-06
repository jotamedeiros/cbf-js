const div_data = document.querySelector('#div_data')
const div_timer = document.querySelector('#div_timer')
const data = new Date()

// data

let dia = data.getDate() < 10 ? `0${data.getDate()}`:`${data.getDate()}`

let mes = data.getMonth() < 10 ? `0${data.getMonth()}`:`${data.getMonth()}`

let ano = data.getFullYear()

div_data.innerHTML = `Data: ${dia}/${mes}/${ano}`

// timer

const timer = () => {
    const data = new Date()

    let hora = data.getHours() < 10 ? `0${data.getHours()}`:`${data.getHours()}`

    let minutos = data.getMinutes() < 10 ? `0${data.getMinutes()}`:`${data.getMinutes()}`

    let segundos = data.getSeconds() < 10 ? `0${data.getSeconds()}`:`${data.getSeconds()}`

    let full_hour = `${hora}:${minutos}:${segundos}`

    div_timer.innerHTML = full_hour
}

const intervalo = setInterval(timer, 1000)


/* timer + prático

const timer = () => {
    const data = new Date()

    div_timer.innerHTML = data.toLocaleTimeString()
}

const intervalo = setInterval(timer, 1000)

*/
