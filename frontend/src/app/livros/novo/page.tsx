import BookRegister from "@/components/templates/register";
import Header from "@/components/molecules/header";

export default function NewBooks() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="pt-20">
        <BookRegister />
      </div>
    </div>
  );
}
