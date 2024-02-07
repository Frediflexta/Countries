import Countries from "./Countries";
import Header from "./Header";
import SearchFilter from "./SearchFilter";

const Application = () => {
  return (
    <main className="w-screen font-nunito sm:w-screen">
      <Header />
      <SearchFilter />
      <Countries />
    </main>
  );
};

export default Application;
