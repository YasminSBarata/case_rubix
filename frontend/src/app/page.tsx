"use client";

import Button from "@/components/atoms/button";
import Header from "@/components/molecules/header";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function HomePage() {
  const router = useRouter();
  const [mensagem, setMensagem] = useState<string | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3333/")
      .then((res) => res.json())
      .then((data) => setMensagem(data.message))
      .catch(() => setErro("❌ Não foi possível conectar com a API."));
  }, []);

  return (
    <div className="min-h-screen bg-whiteBG flex items-center justify-center p-6 pt-20">
      <Header />
      <div className="bg-whiteBG shadow-xl rounded-lg p-8 max-w-md w-full text-center  flex flex-col items-center justify-center gap-10">
        <h1 className="text-2xl font-bold">GERENCIADOR VIRTUAL DE LIVROS </h1>
        <p className="text-base font-medium ">
          Aplicação web para gerenciamento de dados de livros com
          funcionalidades de cadastro, edição e exclusão.
        </p>
        <Button onClick={() => router.push("/livros")}>LISTA DE LIVROS </Button>
        <Button onClick={() => router.push("/livros/novo")}>
          CADASTRE UM TÍTULO
        </Button>
        <h3 className="text-base font-normal text-gray-800 -mb-5">
          Teste de Conexão com a API:
        </h3>
        {mensagem && (
          <p className="text-green-600 font-medium">✅ {mensagem}</p>
        )}

        {erro && <p className="text-redPrimary font-medium">{erro}</p>}
      </div>
    </div>
  );
}
