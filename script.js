let nome = ''
let token = ''
const primeiro = document.querySelector('.primeiro')
const btn = document.querySelector('.entrar')
const main = document.querySelector('main')

function enter() {
    nome = prompt('Qual o seu nome?')
    if (nome.toLowerCase() === 'alex' || nome.toLowerCase() === 'pai') {
        token = prompt(`Prove que vc é o ${nome}. Quem se rebelou contra a UNSC hoje de manhã?`)
        if (token.toLowerCase() === 'chief' || token.toLowerCase() === 'master chief' || token.toLowerCase() === 'halo') {
            alert(`Olá ${nome}, Bem vindo ao site!`)
            primeiro.classList.add('bloqueado')
            btn.classList.remove('bloqueado')
        }
        else{
            alert('Errado!')
        }
    }
    else {
        alert('Hoje não é seu aniversário')
    }
}

function presente() {
    btn.classList.add('bloqueado')
    main.classList.remove('bloqueado')
}

enter()