const SearchFilter = () => {
  return (
    <section className="sm:flex items-center justify-between pt-12 sm:px-20 px-5">
      <div className="relative">
        <img
          className="h-4.5 w-4.5 absolute left-5 top-1/2 -translate-y-1/2 transform text-gray-400"
          src="../Web/svg/search-icon.svg"
          alt="search icon"
        />
        <input
          type="text"
          className="grey-out-placeholder h-[56px] sm:w-[480px] w-full rounded-[5px] border-gray-100 py-2 pl-12 pr-3 shadow-md focus:ring-gray-50"
          placeholder="Search for a country..."
        />
      </div>
      <div className="sm:pt-0 pt-5">
        <select
          className="h-[56px] sm:w-[200px] w-full rounded-[5px] border-gray-100 text-sm"
          name="countries"
          id="region"
        >
          <option value="" disabled selected hidden>
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default SearchFilter;
