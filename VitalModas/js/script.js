function getNome() {
    var parameters = new URLSearchParams(window.location.search());
    return parameters.get('nome');
}

function getPreco() {
    var parameters = new URLSearchParams(window.location.search());
    return parameters.get('preco');
}