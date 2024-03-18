const long = document.querySelector('#long')
const lati = document.querySelector('#lati')

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarLocalizacao, erroLocalizacao)
} else {
    console.log('Geolocalização não ativada/suportada')
}

function mostrarLocalizacao(pos) {
    console.log(pos)
    long.innerHTML = pos.coords.longitude
    lati.innerHTML = pos.coords.latitude
}

function erroLocalizacao(pos) {
    console.log('Erro ao obter a localização.')
}