const q1 = document.querySelector('#q1')
const q2 = document.querySelector('#q2')
const posx = document.querySelector('#posx')
const posy = document.querySelector('#posy')
const largura = document.querySelector('#largura')
const altura = document.querySelector('#altura')


// let q1Rect = q1.getBoundingClientRect()
// let q2Rect = q2.getBoundingClientRect()

q1.accessKey = 'b'
q2.accessKey = 'n'

console.log(q1.accessKey)
console.log(q2.accessKey)

const info = (square) => {
    let sqrRect = square.getBoundingClientRect()
    posx.innerHTML = `posx: ${sqrRect.x}`
    posy.innerHTML = `posy: ${sqrRect.y}`
    largura.innerHTML = `largura: ${sqrRect.width}`
    altura.innerHTML = `altura: ${sqrRect.height}`
}

q1.addEventListener('click', (evt) => {
    info(evt.target)
    // posx.innerHTML = `posx: ${q1Rect.x}`
    // posy.innerHTML = `posy: ${q1Rect.y}`
    // largura.innerHTML = `largura: ${q1Rect.width}`
    // altura.innerHTML = `altura: ${q1Rect.height}`
})

q2.addEventListener('click', (evt) => {
    info(evt.target)
    // posx.innerHTML = `posx: ${q2Rect.x}`
    // posy.innerHTML = `posy: ${q2Rect.y}`
    // largura.innerHTML = `largura: ${q2Rect.width}`
    // altura.innerHTML = `altura: ${q2Rect.height}`
})