import { useState } from "react";
// import { Region } from "../global";
// import useCountries from "../hooks/useCountries";

const Regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

const SearchFilter = () => {
  const [region, setRegion] = useState("");
  // const {} = useCountries();

  return (
    <section className="items-center justify-between px-5 pt-12 sm:flex sm:px-20">
      <div className="relative">
        <img
          className="h-4.5 w-4.5 absolute left-5 top-1/2 -translate-y-1/2 transform text-gray-400"
          src="../Web/svg/search-icon.svg"
          alt="search icon"
        />
        <input
          type="text"
          className="grey-out-placeholder h-20 w-full rounded-[5px] border-gray-100 py-2 pl-16 pr-3 shadow-sm focus:ring-gray-50 sm:h-14 sm:w-[480px]"
          placeholder="Search for a country..."
        />
      </div>
      <div className="pt-5 sm:pt-0">
        <select
          className="h-20 w-1/2 rounded-[5px] border-gray-100 pl-8 text-sm shadow-sm sm:h-14 sm:w-[200px]"
          name="countries"
          id="region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
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
  );
};

export default SearchFilter;
