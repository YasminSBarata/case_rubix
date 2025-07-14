"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Button from "../atoms/button";

interface Livro {
  titulo: string;
  autor: string;
  preco: number;
  data_publicacao: string;
  editora?: string;
}

export default function BookEdit() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>(); // pega o id da rota dinâmica

  const [livro, setLivro] = useState<Livro | null>(null);
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:3333/livros/${id}`)
      .then((res) => res.json())
      .then((data) => setLivro(data))
      .catch(() => setErro("❌ Erro ao buscar livro"));
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!livro) return;

    try {
      const res = await fetch(`http://localhost:3333/livros/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(livro),
      });

      if (!res.ok) {
        setErro("❌ Erro ao atualizar livro");
        return;
      }

      setMensagem("✅ Livro atualizado!");
      setTimeout(() => router.push("/livros"), 1500);
    } catch {
      setErro("❌ Erro de conexão com a API");
    }
  };

  if (!livro) return <p className="p-6">Carregando...</p>;

  return (
    <div className="min-h-screen bg-whiteBG flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          ✏️ Editar Livro
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Título atual: {livro.titulo}
            </label>
            <input
              type="text"
              value={livro.titulo}
              onChange={(e) => setLivro({ ...livro, titulo: e.target.value })}
              required
              className="border rounded p-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Autor atual: {livro.autor}
            </label>
            <input
              type="text"
              value={livro.autor}
              onChange={(e) => setLivro({ ...livro, autor: e.target.value })}
              required
              className="border rounded p-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Preço atual: R$
              {typeof livro.preco === "number" ? livro.preco.toFixed(2) : "N/A"}
            </label>
            <input
              type="number"
              value={livro.preco}
              onChange={(e) =>
                setLivro({ ...livro, preco: parseFloat(e.target.value) })
              }
              required
              className="border rounded p-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Data de publicação: {livro.data_publicacao}
            </label>
            <input
              type="date"
              value={livro.data_publicacao}
              onChange={(e) =>
                setLivro({ ...livro, data_publicacao: e.target.value })
              }
              required
              className="border rounded p-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Editora atual: {livro.editora || "N/A"}
            </label>
            <input
              type="text"
              value={livro.editora || ""}
              onChange={(e) => setLivro({ ...livro, editora: e.target.value })}
              className="border rounded p-2 w-full"
            />
          </div>

          <Button className="w-full" type="submit">
            Salvar alterações
          </Button>
        </form>

        {mensagem && (
          <p className="mt-4 text-green-600 text-center">{mensagem}</p>
        )}
        {erro && <p className="mt-4 text-red-500 text-center">{erro}</p>}
      </div>
    </div>
  );
}
