"use client";

import { useEffect, useState } from "react";
import Button from "../atoms/button";
import Link from "../atoms/link";

interface Livro {
  id: number;
  titulo: string;
  autor: string;
  preco: number;
  data_publicacao: string;
  editora?: string;
}

export default function ListBooks() {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);
  const [searchId, setSearchId] = useState("");

  const carregarTodos = () => {
    setLoading(true);
    fetch("http://localhost:3333/livros")
      .then((res) => res.json())
      .then((data) => {
        setLivros(data);
        setErro(false);
        setLoading(false);
      })
      .catch(() => {
        setErro(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    carregarTodos();
  }, []);

  const handleBuscarPorId = () => {
    if (!searchId.trim()) return;

    setLoading(true);
    fetch(`http://localhost:3333/livros/${searchId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Livro não encontrado");
        return res.json();
      })
      .then((data) => {
        setLivros([data]); // só o livro buscado
        setErro(false);
        setLoading(false);
      })
      .catch(() => {
        setLivros([]);
        setErro(true);
        setLoading(false);
      });
  };

  const excluirLivro = async (id: number) => {
    const confirmar = confirm("Tem certeza que deseja excluir este livro?");
    if (!confirmar) return;

    try {
      const res = await fetch(`http://localhost:3333/livros/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        alert("❌ Erro ao excluir o livro");
        return;
      }

      setLivros((livros) => livros.filter((l) => l.id !== id));
    } catch {
      alert("❌ Erro de conexão com a API");
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-whiteBG py-10 px-4">
      <div className="max-w-3xl mx-auto bg-whiteBG p-8 rounded  flex flex-col justify-center items-center shadow-xl">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          📚 Lista de Livros
        </h1>

        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <input
            type="number"
            placeholder="Buscar por ID"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full sm:max-w-[200px]"
          />

          <div className="flex flex-row gap-2 w-full ">
            <Button onClick={handleBuscarPorId} className=" sm:w-auto">
              Buscar
            </Button>
            <Button onClick={carregarTodos} className=" sm:w-auto">
              Limpar
            </Button>
          </div>
        </div>

        {loading && <p className="text-gray-600">Carregando livros...</p>}

        {erro && (
          <p className="text-redPrimary">
            Livro não encontrado ou erro na API.
          </p>
        )}

        {!loading && livros.length === 0 && (
          <p className="text-gray-500 text-center">Nenhum livro cadastrado.</p>
        )}

        <ul className="flex flex-col gap-6">
          {livros.map((livro) => (
            <li key={livro.id} className="border-b pb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {livro.titulo}
              </h2>
              <p className="text-sm text-gray-600">Autor: {livro.autor}</p>
              <p className="text-sm text-gray-600">
                Preço: R${livro.preco.toFixed(2)}
              </p>
              <p className="text-sm text-gray-600">
                Publicado em: {livro.data_publicacao}
              </p>
              <p className="text-sm text-gray-600">
                Editora: {livro.editora || "N/A"}
              </p>

              <div className="mt-3 flex gap-4">
                <Button asChild>
                  <Link href={`/livros/${livro.id}/editar`}>Editar</Link>
                </Button>
                <Button onClick={() => excluirLivro(livro.id)}>Excluir</Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
