import useCountries from "../hooks/useCountries";
import Country from "./Country";

const Countries = () => {
  const { data, isLoading, isError, error } = useCountries();
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  console.log(data);
  return (
    <section className="flex justify-center px-5 pt-8 sm:px-24 md:px-24">
      <div className="flex flex-col sm:flex-row">
        {data?.map(({ name, flags, region, capital, population }) => (
          <div key={name.common} className="px-8 py-8">
            <Country
              name={name.common}
              image={flags.png}
              region={region}
              capital={capital && Array.isArray(capital) ? capital[0] : ""}
              population={population}
              alt={flags.alt}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countries;
