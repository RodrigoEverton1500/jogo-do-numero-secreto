let numerosSorteados = [];
let tentativas = 1;
const numeroLimite = 1000;
let numeroSecreto = gerarNumeroAleatorio();
iniciar();

function gerarNumeroAleatorio() {
    numeroSorteado = parseInt(Math.random() * numeroLimite + 1);
    if (numerosSorteados.length == numeroLimite) {
        numerosSorteados = [];
    }

    if (numerosSorteados.includes(numeroSorteado)) {
        return gerarNumeroAleatorio();
    } else {
        numerosSorteados.push(numeroSorteado);
        return numeroSorteado;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function exibirTexto(tag, texto) {
    let objeto = document.querySelector(tag);
    objeto.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:0.9});
}

function iniciar() {
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Número entre 1 a 1000');

    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log(numerosSorteados);
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        console.log(true);
        exibirTexto('p', 'Acertou! Tentativas: ' + tentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        console.log(chute - numeroSecreto);
        if (chute > numeroSecreto) {
            exibirTexto('p', 'menor que ' + chute);
        } else {
            exibirTexto('p', 'maior que ' + chute);
        }
    }

    limparCampo();
    tentativas++;
}