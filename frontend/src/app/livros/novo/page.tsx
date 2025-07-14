import BookRegister from "@/components/templates/register";
import Header from "@/components/molecules/header";

export default function NewBooks() {
  return (
    <div className=" fle flex-col h-full">
      <Header />
      <BookRegister />
    </div>
  );
}
