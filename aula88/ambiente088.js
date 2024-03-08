const btn_alert= document.querySelector('#btn_alert')
const btn_confirm = document.querySelector('#btn_confirm')
const btn_prompt = document.querySelector('#btn_prompt')

// alert()

btn_alert.addEventListener('click', (evt) => {
    alert('Clique OK se o ney vai voltar')
})

// confirm()

btn_confirm.addEventListener('click', (evt) => {
    let ret = confirm('Você acha que o ney vai voltar?')
    if (ret) {
        console.log('Botão OK pressionado!')
    } else {
        console.log('Botão CANCELAR pressionado!')
    }
})

// prompt()

btn_prompt.addEventListener('click', (evt) => {
    let retorno = prompt('Qual é o nome do jogador que vai fazer 80 gols pelo santos em 2026?', 'DICA: MOICANO')
    if (retorno == 'Neymar') {
        alert('SANTÁSTICO CAMPEÃO DO MUNDO 2026!')
        console.log(retorno)
    } else {
        alert('SABE NADA DA REDONDA')
        console.log(retorno)
    }
})