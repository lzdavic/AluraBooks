const elemetoParaInserirLivros = document.getElementById('livros')

function exibirLivrosNaTela(listaDeLivros) {
    listaDeLivros.forEach(livro => {
        elemetoParaInserirLivros.innerHTML += `
            <div class="livro">
                <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
                <h2 class="livro__titulo">
                    ${livro.titulo}
                </h2>
                <p class="livro__descricao">${livro.autor}</p>
                // <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p> 
                <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
            </div>`
    });
}

// R$${livro.preco.toFixed(2)} [toFixed(2)] serve para exivir apenas 2 casas decimais após desconto aplicado
