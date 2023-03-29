function getNome() {
    var parameters = new URLSearchParams(window.location.search);
    return parameters.get('imagem');
}

function getPreco() {
    var parameters = new URLSearchParams(window.location.search);
    return parameters.get('preco');
}