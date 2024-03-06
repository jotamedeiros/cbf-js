const timer_container = document.querySelector('#timer-container')
const div_date = document.querySelector('#div_date')
const div_timer = document.querySelector('#div_timer')
const btn_active = document.querySelector('#btn-active')
const btn_stop = document.querySelector('#btn-stop')
const alarm_time = document.querySelector('#alarm-time')
const alarm_hour = document.querySelector('#alarm-hour')

const som_alarme = new Audio('retro-alarm.mp3')
som_alarme.loop = -1

let ts_atual = null
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false


const checkHour = () => {
    // informa a hora do alarme
    ts_atual = Date.now()
    ts_alarme = ts_atual + (alarm_time.value * 1000)
    alarme_ativado = true
    const dt_alarme = new Date(ts_alarme)

    let hora = dt_alarme.getHours() < 10 ? `0${dt_alarme.getHours()}` : `${dt_alarme.getHours()}`;

    let minuto = dt_alarme.getMinutes() < 10 ? `0${dt_alarme.getMinutes()}` : `${dt_alarme.getMinutes()}`;

    let segundo = dt_alarme.getSeconds() < 10 ? `0${dt_alarme.getSeconds()}` : `${dt_alarme.getSeconds()}`;

    alarm_hour.innerHTML = `${hora}:${minuto}:${segundo}`
}

const activeAlarm = () => {
    const data = new Date()
    if (alarme_ativado && !alarme_tocando) {
        if (data.getTime() >= ts_alarme) {
            alarme_tocando = true
            som_alarme.play()
            timer_container.classList.add('alarme')
        }
    }
}

const date = () => {
    const data = new Date()

    data_atual = data.toLocaleDateString()

    div_date.innerHTML = data_atual
}

const timer = () => {
    const data = new Date()

    hora_atual = data.toLocaleTimeString()

    div_timer.innerHTML = hora_atual
}

btn_active.addEventListener('click', (evt) => {
    checkHour()
    setTimeout(activeAlarm, alarm_time.value * 1000)
})

btn_stop.addEventListener('click', (evt) => {
    alarme_ativado = false
    alarme_tocando = false
    timer_container.classList.remove('alarme')
    alarm_hour.innerHTML = ''
    alarm_time.value = 0
    som_alarme.pause()
    som_alarme.currentTime = 0
})

const dateInterval = setInterval(date, 1000)
const timerInterval = setInterval(timer, 1000)

