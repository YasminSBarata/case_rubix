"use client";
import ListBooks from "@/components/templates/list";
import Header from "@/components/molecules/header";

export default function ListPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="pt-20">
        <ListBooks />
      </div>
    </div>
  );
}
