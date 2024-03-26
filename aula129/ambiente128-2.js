const ctx = document.getElementById('graphic');

let labelsX = ['Disponibilidade', 'Qualidade', 'Performance'];
let valores = [0, 0, 0];

let grafico = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labelsX,
        datasets: [{
            label: '# of Votes',
            data: valores,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const obterDados = () => {
    const endpoint = 'https://b529b686-de15-4b68-87d6-77983da73383-00-22hfwclnndfrc.worf.replit.dev/';

    fetch(endpoint)

    .then(res => res.json())
    .then(res => {
        valores[0] = res.disponibilidade
        valores[1] = res.qualidade
        valores[2] = res.performance
        grafico.update()
    })

    .catch(erro => {
        console.log(`ERRO: ${erro}`)
    })
}

let intervalo = setInterval(obterDados, 2000)
