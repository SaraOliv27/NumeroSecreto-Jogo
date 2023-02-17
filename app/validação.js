function verificaValorValido(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor Inválido</div>'
        return
    }

    if (numeroMaiorMenordoqPermitido(numero)) {
        elementoChute.innerHTML += `
            <div>Valor Inválido: O número secreto está entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2><i class="fa-solid fa-sparkles"></i>Você Acertou!<i class="fa-solid fa-sparkles"></i></h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente<i class="fa-solid fa-rotate-right"></i></button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorMenordoqPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e =>{
    if (e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})