let nome = ''
const primeiro = document.querySelector('.primeiro')
const btn = document.querySelector('.entrar')
const main = document.querySelector('main')

function enter() {
    nome = prompt('Qual o seu nome?')
    if (nome.toLowerCase() === 'alex' || nome.toLowerCase() === 'pai') {
        alert(`Hoje é seu aniversário ${nome}, Bem vindo ao site!`)
        primeiro.classList.add('bloqueado')
        btn.classList.remove('bloqueado')
    }
    else {
        alert('Hoje não é seu aniversário')
    }
}

function presente(){
    btn.classList.add('bloqueado')
    main.classList.remove('bloqueado')
}

enter()