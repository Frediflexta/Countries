import Country from "./Country";
import data from "../data.json";

const Countries = () => {
  return (
    <section className="flex justify-center px-5 pt-8 sm:px-24 md:px-24">
      <div className="flex flex-col sm:flex-row">
        <div className="px-8 py-8">
          <Country
            name={data[190].name}
            image={data[190].flags.svg}
            region={data[190].region}
            capital={data[190].capital as string}
            population={data[190].population}
          />
        </div>
      </div>
    </section>
  );
};

export default Countries;
