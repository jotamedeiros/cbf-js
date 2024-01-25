const caixa = document.querySelector('#caixa')

const carros = ['Polo', 'Golf', 'T-Cross', 'HRV']

let ol = `<ol>`
carros.map((el) => {
    ol += `<li>${el}</li>`
})
ol + `</ol>`



caixa.innerHTML = ol