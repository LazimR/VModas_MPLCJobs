function getNome() {
    var parameters = new URLSearchParams();
    return parameters.get('nome');
}

function getPreco() {
    var parameters = new URLSearchParams();
    return parameters.get('preco');
}