"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/atoms/button";

export default function BookRegister() {
  const router = useRouter();

  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [preco, setPreco] = useState("");
  const [data, setData] = useState("");
  const [editora, setEditora] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const novoLivro = {
      titulo,
      autor,
      preco: parseFloat(preco),
      data_publicacao: data,
      editora: editora || undefined,
    };

    try {
      const res = await fetch("http://localhost:3333/livros", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoLivro),
      });

      if (!res.ok) {
        setErro("❌ Erro ao cadastrar livro.");
        return;
      }

      setMensagem("✅ Livro cadastrado com sucesso!");
      setTimeout(() => router.push("/livros"), 1500);
    } catch {
      setErro("❌ Erro de conexão com a API.");
    }
  };

  return (
    <div className="min-h-screen bg-whiteBG flex items-center justify-center pt-20 p-6">
      <div className="bg-whiteBG shadow-xl rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          ➕ Cadastrar Novo Livro
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
            className="border rounded p-2"
          />
          <input
            type="text"
            placeholder="Autor"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            required
            className="border rounded p-2"
          />
          <input
            type="number"
            placeholder="Preço (ex: 59.90)"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            required
            className="border rounded p-2"
          />
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
            className="border rounded p-2"
          />
          <input
            type="text"
            placeholder="Editora (opcional)"
            value={editora}
            onChange={(e) => setEditora(e.target.value)}
            className="border rounded p-2"
          />
          <Button type="submit" className="w-full">
            Cadastrar
          </Button>
        </form>

        {mensagem && (
          <p className="mt-4 text-green-600 text-center">{mensagem}</p>
        )}
        {erro && <p className="mt-4 text-redPrimary text-center">{erro}</p>}
      </div>
    </div>
  );
}
