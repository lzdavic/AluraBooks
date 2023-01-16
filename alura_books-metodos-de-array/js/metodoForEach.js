const elemetoParaInserirLivros = document.getElementById('livros')
const elementoComValorTotalDeLivrosDisponíveis = document.getElementById('valor_total_livros_disponiveis')

function exibirLivrosNaTela(listaDeLivros) {
    elementoComValorTotalDeLivrosDisponíveis.innerHTML = ''
    elemetoParaInserirLivros.innerHTML = ''
    listaDeLivros.forEach(livro => {
        // let disponibilidade = verificarDisponibilidadeDoLivro(livro);
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
        elemetoParaInserirLivros.innerHTML += `
            <div class="livro">
                <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
                <h2 class="livro__titulo">
                    ${livro.titulo}
                </h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p> 
                <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
            </div>`
    });
}

// R$${livro.preco.toFixed(2)} "toFixed(2)" serve para exivir apenas 2 casas decimais após desconto aplicado

// function verificarDisponibilidadeDoLivro(livro) {
//     if (livro.quantidade > 0) {
//         return 'livro__imagens'
//     } else {
//         return 'livro__imagens indisponivel'
//     }
// }