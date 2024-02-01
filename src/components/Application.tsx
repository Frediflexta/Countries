import Countries from "./Countries";
import Header from "./Header";
import SearchFilter from "./SearchFilter";

const Application = () => {
  return (
    <main className="flex h-screen w-full flex-col bg-[#F2F2F2] font-nunito">
      <Header />
      <SearchFilter />
      <Countries />
    </main>
  );
};

export default Application;
