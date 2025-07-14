import readline from "readline";
import {
  listarLivros,
  buscarLivroPorId,
  cadastrarLivro,
  atualizarLivro,
  deletarLivro,
} from "./db/livro";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function menu() {
  console.log("\n📚 Menu de Livros");
  console.log("1 - Listar livros");
  console.log("2 - Buscar por ID");
  console.log("3 - Cadastrar novo livro");
  console.log("4 - Atualizar livro existente");
  console.log("5 - Remover livro");
  console.log("0 - Sair");

  rl.question("\nEscolha uma opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        return handleListar();
      case "2":
        return handleBuscar();
      case "3":
        return handleCadastrar();
      case "4":
        return handleAtualizar();
      case "5":
        return handleRemover();
      case "0":
        rl.close();
        return;
      default:
        console.log("❌ Opção inválida.");
        menu();
    }
  });
}

function handleListar() {
  listarLivros();
  menu();
}

function handleBuscar() {
  rl.question("ID do livro: ", (idStr) => {
    const id = parseInt(idStr);
    const livro = buscarLivroPorId(id);
    console.log(livro || "Livro não encontrado.");
    menu();
  });
}

function handleCadastrar() {
  rl.question("Título: ", (titulo) => {
    rl.question("Autor: ", (autor) => {
      rl.question("Preço (número): ", (precoStr) => {
        rl.question("Data de publicação (YYYY-MM-DD): ", (data) => {
          rl.question("Editora (opcional): ", (editora) => {
            cadastrarLivro({
              titulo,
              autor,
              preco: parseFloat(precoStr),
              data_publicacao: data,
              editora: editora || undefined,
            });
            console.log("✅ Livro cadastrado!");
            menu();
          });
        });
      });
    });
  });
}

function handleAtualizar() {
  rl.question("ID do livro a atualizar: ", (idStr) => {
    const id = parseInt(idStr);
    const livro = buscarLivroPorId(id);

    if (!livro) {
      console.log("Livro não encontrado.");
      return menu();
    }

    rl.question(`Título [${livro.titulo}]: `, (titulo) => {
      rl.question(`Autor [${livro.autor}]: `, (autor) => {
        rl.question(`Preço [${livro.preco}]: `, (precoStr) => {
          rl.question(`Data [${livro.data_publicacao}]: `, (data) => {
            rl.question(`Editora [${livro.editora ?? ""}]: `, (editora) => {
              atualizarLivro(id, {
                titulo: titulo || livro.titulo,
                autor: autor || livro.autor,
                preco: precoStr ? parseFloat(precoStr) : livro.preco,
                data_publicacao: data || livro.data_publicacao,
                editora: editora || livro.editora,
              });
              console.log("✏️ Livro atualizado!");
              menu();
            });
          });
        });
      });
    });
  });
}

function handleRemover() {
  rl.question("ID do livro a remover: ", (idStr) => {
    const id = parseInt(idStr);
    deletarLivro(id);
    console.log("🗑️ Livro removido.");
    menu();
  });
}

// Inicia o menu
menu();
