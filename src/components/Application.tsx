import Countries from "./Countries";
import Header from "./Header";
import SearchFilter from "./SearchFilter";

const Application = () => {
  return (
    <main className="font-nunito">
      <Header />
      <SearchFilter />
      <Countries />
    </main>
  );
};

export default Application;
