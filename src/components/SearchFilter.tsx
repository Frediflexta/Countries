import { Dispatch, FormEvent } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { ActionType } from "../global";
import useCountry from "../hooks/useCountry";
import { useNavigate } from "react-router-dom";
import searchIcon from "../assets/search-icon.svg";

const Regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

type SearchFilterProps = {
  country: string;
  region: string;
  dispatch: Dispatch<ActionType>;
};

const SearchFilter = ({ country, region, dispatch }: SearchFilterProps) => {
  const debounceCountry = useDebounce(country, 300);
  const navigate = useNavigate();

  const { data } = useCountry(debounceCountry);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Triggered =>", data?.[0]?.name.common);

    if (data && data?.[0]?.name) {
      dispatch({ type: "updateCountryData", payload: data });
      navigate(`/countrydetails/${data?.[0]?.name.common}`);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <section className="items-center justify-between px-5 pt-12 sm:flex sm:px-20 ">
        <div className="relative ">
          <img
            className="h-4.5 w-4.5 absolute left-5 top-1/2 -translate-y-1/2 transform text-gray-400 "
            src={searchIcon}
            alt="search icon"
          />
          <input
            type="text"
            id="country"
            autoComplete="off"
            className="grey-out-placeholder h-20 w-full rounded-[5px] border-gray-100 py-2 pl-16 pr-3 shadow-sm focus:ring-gray-50 dark:bg-[#2B3844] dark:text-white dark:placeholder-white sm:h-14 sm:w-[480px]"
            placeholder="Search for a country..."
            onChange={(e) => {
              dispatch({ type: "updateCountry", payload: e.target.value });
            }}
          />
        </div>
        <div className="pt-5 sm:pt-0">
          <select
            autoComplete="off"
            className="h-20 w-1/2 rounded-[5px] border-gray-100 pl-8 text-sm shadow-sm dark:bg-[#2B3844] dark:text-white sm:h-14 sm:w-[200px]"
            name="countries"
            id="region"
            value={region}
            onChange={(e) => {
              dispatch({ type: "updateRegion", payload: e.target.value });
            }}
          >
            <option value="" disabled hidden>
              Filter by Region
            </option>
            {Regions.map((region) => (
              <option value={region} key={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
      </section>
    </form>
  );
};

export default SearchFilter;
