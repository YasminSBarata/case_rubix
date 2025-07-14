import BookEdit from "@/components/templates/edit";
import Header from "@/components/molecules/header";

export default function Edition() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <BookEdit />
    </div>
  );
}
