function comprar () {
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;

    if (tipoDeIngresso == 'inferior') {
        comprarInferior(quantidade);
    }
    else if (tipoDeIngresso == 'superior') {
        comprarSuperior(quantidade);
    } 
    else {
        comprarPista(quantidade);
    }
}

function comprarInferior (quantidade) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
        if (quantidade > qtdInferior) {
            alert ('Quantidade de ingressos indisponível.');
        }
        else {
            qtdInferior = qtdInferior - quantidade;
            document.getElementById('qtd-inferior').textContent = qtdInferior;
            alert ('Compra realizada!');
        }
}

function comprarSuperior(quantidade) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
        if (quantidade > qtdSuperior) {
            alert ('Quantidade de ingressos indisponível.');
        }
        else {
            qtdSuperior = qtdSuperior - quantidade;
            document.getElementById('qtd-superior').textContent = qtdSuperior;
            alert ('Compra realizada!');
        }
}

function comprarPista(quantidade) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
        if (quantidade > qtdPista) {
            alert ('Quantidade de ingressos indisponível.');
        }
        else {
            qtdPista = qtdPista - quantidade;
            document.getElementById('qtd-pista').textContent = qtdPista;
            alert ('Compra realizada!');
        }
}