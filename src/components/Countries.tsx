import { MagnifyingGlass } from "react-loader-spinner";
import useCountries from "../hooks/useCountries";
import Country from "./Country";
import useRegions from "../hooks/useRegions";
import { Dispatch } from "react";
import { ActionType } from "../global";

type CountriesProps = {
  region: string;
  dispatch: Dispatch<ActionType>;
};

const Countries = ({ region, dispatch }: CountriesProps) => {
  const { data, isLoading, isError, error } = useCountries();
  const {
    data: regionData,
    isLoading: regionLoading,
    isError: regionError,
  } = useRegions(region);

  if (isLoading || regionLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
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
          {regionData?.map((data) => (
            <div key={data.name.common} className="px-8 py-8 sm:w-1/4 sm:px-0">
              <Country
                name={data.name.common}
                image={data.flags.png}
                region={data.region}
                capital={
                  data.capital && Array.isArray(data.capital)
                    ? data.capital[0]
                    : ""
                }
                population={data.population}
                alt={data.flags.alt}
                dispatch={dispatch}
                data={data}
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
        {data?.map((data) => (
          <div key={data.name.common} className="px-8 py-8 sm:w-1/4 sm:px-0">
            <Country
              name={data.name.common}
              image={data.flags.png}
              region={data.region}
              capital={
                data.capital && Array.isArray(data.capital)
                  ? data.capital[0]
                  : ""
              }
              population={data.population}
              alt={data.flags.alt}
              dispatch={dispatch}
              data={data}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countries;
