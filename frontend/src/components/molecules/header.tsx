"use client";

import { useRouter } from "next/navigation";
import { BookOpen, Plus, List } from "lucide-react";

export default function Header() {
  const router = useRouter();
  return (
    <div className="shadow-md fixed top-0 z-30 flex h-20 w-full items-center justify-center bg-white border-b border-gray-200">
      <div className="flex h-full w-full max-w-[1440px] items-center justify-between gap-3 px-6 lg:px-10 xl:px-20">
        <div className="flex items-center gap-2">
          <BookOpen className="w-8 h-8 text-indigo-600" />
          <h1 className="text-xl font-bold text-gray-900">Biblioteca</h1>
        </div>

        <nav className="hidden md:flex items-center gap-2">
          <button
            onClick={() => router.push("/")}
            className="px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors font-medium"
          >
            Início
          </button>
          <button
            onClick={() => router.push("/livros")}
            className="px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors font-medium flex items-center gap-2"
          >
            <List className="w-4 h-4" />
            Meus Livros
          </button>
          <button
            onClick={() => router.push("/livros/novo")}
            className="px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg transition-colors font-medium flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Cadastrar
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => router.push("/livros")}
            className="p-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
          >
            <List className="w-5 h-5" />
          </button>
          <button
            onClick={() => router.push("/livros/novo")}
            className="p-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg transition-colors"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
