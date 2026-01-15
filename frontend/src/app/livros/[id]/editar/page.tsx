import BookEdit from "@/components/templates/edit";
import Header from "@/components/molecules/header";

export default function Edition() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="pt-20">
        <BookEdit />
      </div>
    </div>
  );
}
