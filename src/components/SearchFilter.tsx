const SearchFilter = () => {
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
          defaultValue="Filter by Region"
          className="h-20 w-1/2 rounded-[5px] border-gray-100 pl-8 text-sm shadow-sm sm:h-14 sm:w-[200px]"
          name="countries"
          id="region"
        >
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
