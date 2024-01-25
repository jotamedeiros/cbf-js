const caixa = document.querySelector('#caixa')

let mapa = new Map()

mapa.set('curso', 'JavaScript')
mapa.set(10, 'CFB Cursos')
mapa.set(1, 100)
mapa.set('Joao', 100)

mapa.delete(1)

console.log(mapa)

let pesquisa = 'curso'

if (mapa.has(pesquisa)) {
    res = `A chave existe na coleção com o valor: ${mapa.get(pesquisa)}`
} else {
    res = 'A chave NÃO está na coleção.'
}

res += `<br/> O tamanho da coleção é ${mapa.size}`
caixa.innerHTML = res


mapa.forEach((el, i) => {
    console.log(el)
})