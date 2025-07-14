"use client";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { MenuIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Button from "../atoms/button";

export default function Menu() {
  const router = useRouter();

  return (
    <Sheet>
      <div className="relative w-full">
        <SheetTrigger
          className="h-fit w-fit cursor-pointer text-white"
          aria-label="Botão de menu"
        >
          <MenuIcon size={55} className="w-9 h-9 text-whiteBG" />
        </SheetTrigger>
        <SheetContent
          className="bg-redPrimary from-redTertiary box-content rounded-s-4xl border-none bg-linear-to-b to-white/20 bg-cover px-[1.56rem] pt-[3.75rem] pb-10"
          onOpenAutoFocus={(event) => event?.preventDefault()}
        >
          <div className="flex flex-col items-start justify-center py-10 gap-10">
            <Button variant="secondary" onClick={() => router.push("/")}>
              Início
            </Button>
            <Button variant="secondary" onClick={() => router.push("/livros")}>
              Lista de livros
            </Button>
            <Button
              variant="secondary"
              onClick={() => router.push("/livros/novo")}
            >
              Cadastro de livros
            </Button>
          </div>
        </SheetContent>
      </div>
    </Sheet>
  );
}
