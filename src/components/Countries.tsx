import { MagnifyingGlass } from "react-loader-spinner";
import useCountries from "../hooks/useCountries";
import Country from "./Country";
import useRegions from "../hooks/useRegions";

type CountriesProps = {
  region: string;
};
const Countries = ({ region }: CountriesProps) => {
  const { data, isLoading, isError, error } = useCountries();
  const {
    data: regionData,
    isLoading: regionLoading,
    isError: regionError,
  } = useRegions(region);

  if (isLoading || regionLoading) {
    return (
      <div className="flex items-center justify-center">
        <MagnifyingGlass
          ariaLabel="magnifying-glass-loading"
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      </div>
    );
  }

  if (isError || regionError) {
    return <span>Error: {error?.message}</span>;
  }

  if (regionData) {
    return (
      <section className="flex justify-center px-5 pt-8 sm:px-24 md:px-20">
        <div className="flex flex-col flex-wrap sm:flex-row">
          {regionData?.map(({ name, flags, region, capital, population }) => (
            <div key={name.common} className="px-8 py-8 sm:w-1/4 sm:px-0">
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
  }

  return (
    <section className="flex justify-center px-5 pt-8 sm:px-24 md:px-20">
      <div className="flex flex-col flex-wrap sm:flex-row">
        {data?.map(({ name, flags, region, capital, population }) => (
          <div key={name.common} className="px-8 py-8 sm:w-1/4 sm:px-0">
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
