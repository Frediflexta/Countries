import Country from "./Country";
import data from "../data.json";

const Countries = () => {
  return (
    <section className="pl-20 pt-14">
      <Country
        name={data[190].name}
        image={data[190].flags.svg}
        region={data[190].region}
        capital={data[190].capital}
        population={data[190].population}
      />
    </section>
  );
};

export default Countries;
