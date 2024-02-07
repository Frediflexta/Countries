import Country from "./Country";
import data from "../data.json";

const Countries = () => {
  return (
    <section className="flex px-5 pt-14 sm:px-20 md:px-20">
      <div className="flex-row">
        <Country
          name={data[190].name}
          image={data[190].flags.svg}
          region={data[190].region}
          capital={data[190].capital as string}
          population={data[190].population}
        />
        <Country
          name={data[190].name}
          image={data[190].flags.svg}
          region={data[190].region}
          capital={data[190].capital as string}
          population={data[190].population}
        />
        <Country
          name={data[190].name}
          image={data[190].flags.svg}
          region={data[190].region}
          capital={data[190].capital as string}
          population={data[190].population}
        />
        <Country
          name={data[190].name}
          image={data[190].flags.svg}
          region={data[190].region}
          capital={data[190].capital as string}
          population={data[190].population}
        />
      </div>
    </section>
  );
};

export default Countries;
