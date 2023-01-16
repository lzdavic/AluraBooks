const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibirLivrosNaTela(livrosFiltrados);
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotal(livrosFiltrados)
        const valorTotalDescontado = valorTotal * 0.95
        exibirValorTotalDosDisponiveis(valorTotalDescontado);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosDisponiveis(valorTotalDescontado) {
    elementoComValorTotalDeLivrosDisponíveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Economize 5% em todos livros disponíveis por apenas R$ <span id="valor">${valorTotalDescontado}</span></p>
    </div>
    `
}