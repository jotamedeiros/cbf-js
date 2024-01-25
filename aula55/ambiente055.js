const caixa = document.querySelector('#caixa')

let musicas = new Set(['funk', 'rap', 'pagode', 'rock', 'eletronica'])

musicas.add('sertanejo')
musicas.add('modao')
musicas.add('modao')
musicas.add('modao')
musicas.add('pagode')

musicas.delete('modao')
musicas.clear()

console.log(musicas)

musicas.forEach((el, i) => {
    caixa.innerHTML += `${el} <br/>`
})

// for (let m of musicas) {
//     caixa.innerHTML += `${m} <br/>`
// }