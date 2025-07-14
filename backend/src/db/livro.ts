import db from "./database";

export interface Livro {
  id?: number;
  titulo: string;
  autor: string;
  preco: number;
  data_publicacao: string;
  editora?: string;
}

// Listar todos os livros
export function listarLivros(): Livro[] {
  const stmt = db.prepare("SELECT * FROM livros");
  const livros = stmt.all() as Livro[];
  return livros;
}

// Buscar livro por ID
export function buscarLivroPorId(id: number): Livro | undefined {
  const stmt = db.prepare("SELECT * FROM livros WHERE id = ?");
  return stmt.get(id) as Livro | undefined;
}

// Cadastrar novo livro
export function cadastrarLivro(livro: Omit<Livro, "id">): void {
  const stmt = db.prepare(`
    INSERT INTO livros (titulo, autor, preco, data_publicacao, editora)
    VALUES (?, ?, ?, ?, ?)
  `);
  stmt.run(
    livro.titulo,
    livro.autor,
    livro.preco,
    livro.data_publicacao,
    livro.editora ?? null
  );
}

// Atualizar um livro existente
export function atualizarLivro(id: number, livro: Omit<Livro, "id">): void {
  const stmt = db.prepare(`
    UPDATE livros
    SET titulo = ?, autor = ?, preco = ?, data_publicacao = ?, editora = ?
    WHERE id = ?
  `);
  stmt.run(
    livro.titulo,
    livro.autor,
    livro.preco,
    livro.data_publicacao,
    livro.editora ?? null,
    id
  );
}

// Deletar livro por ID
export function deletarLivro(id: number): void {
  const stmt = db.prepare("DELETE FROM livros WHERE id = ?");
  stmt.run(id);
}
