// Função para exibir os inputs para inserir os nomes dos livros
function exibirInputs() {
    var quantidade = document.getElementById("quantidadeInput").value;
    var inputsDiv = document.getElementById("inputs");
    inputsDiv.innerHTML = ""; // Limpa os inputs anteriores

    for (var i = 0; i < quantidade; i++) {
        var input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Nome do livro " + (i + 1);
        input.className = "livroInput";
        inputsDiv.appendChild(input);
    }
}

// Função para sortear os livros
function sortearLivros() {
    var livroInputs = document.getElementsByClassName("livroInput");
    var livros = [];

    // Obtém os nomes dos livros inseridos nos inputs
    for (var i = 0; i < livroInputs.length; i++) {
        var nomeLivro = livroInputs[i].value.trim();
        if (nomeLivro !== "") {
            livros.push(nomeLivro);
        }
    }

    // Verifica se há pelo menos um livro inserido
    if (livros.length === 0) {
        document.getElementById("resultado").innerText = "Por favor, insira pelo menos um nome de livro.";
        return;
    }

    // Sorteia um livro aleatório da lista
    var indiceSorteado = Math.floor(Math.random() * livros.length);
    var livroSorteado = livros[indiceSorteado];

    // Exibe o resultado do sorteio na página
    document.getElementById("resultado").innerText = "Livro sorteado: " + livroSorteado;
}
