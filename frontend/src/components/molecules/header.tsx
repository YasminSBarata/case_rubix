"use client";

import { useRouter } from "next/navigation";
import Button from "../atoms/button";
import Menu from "./menu";

export default function Header() {
  const router = useRouter();
  return (
    <div className="shadow-lg fixed top-0 z-30 flex h-21.25 w-lvw items-center justify-center bg-redSecundary ">
      <div className="flex h-full w-full max-w-[1440px] items-center justify-end gap-3 px-7.5 lg:px-10 xl:px-20">
        <div className="hidden w-full max-w-[612px] items-center justify-between gap-2 lg:flex">
          <Button
            className="text-black font-semibold"
            variant="secondary"
            onClick={() => router.push("/")}
          >
            Início
          </Button>
          <Button
            className="text-black font-semibold"
            variant="secondary"
            onClick={() => router.push("/livros")}
          >
            Lista de livros
          </Button>
          <Button
            className="text-black font-semibold"
            variant="secondary"
            onClick={() => router.push("/livros/novo")}
          >
            Cadastro de livros
          </Button>
        </div>

        <div className="w-fit ml-auto lg:hidden">
          <Menu />
        </div>
      </div>
    </div>
  );
}
