const endpoint = 'https://2bdd268f-1da7-4467-b1ab-7b6893779373-00-a6aleaoqj3vm.worf.replit.dev/'

fetch(endpoint)

.then(res => res.json())
.then(res => {
    console.log(res)
})