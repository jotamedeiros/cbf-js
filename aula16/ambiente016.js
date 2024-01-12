let num = [10, 20, 30, 40, 50]

const objs = document.getElementsByTagName('div')

// for (let i = 0; i < num.length; i++) {
//     console.log(num[i])
// }

// for (n in num) {
//     console.log(num[n])
// }

// for (n of num) {
//     console.log(n)
// }

for (o of objs) {
    console.log(o.innerHTML = 'COLOSSAL DE VILA BELMIRO')
}

for (o in objs) {
    // console.log(objs[o].innerHTML = 'PEIXUDO')
}