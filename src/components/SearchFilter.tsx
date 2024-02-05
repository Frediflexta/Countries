const SearchFilter = () => {
  return (
    <section className="flex items-center justify-between pt-12">
      <div className="relative pl-20">
        <img
          className="h-4.5 w-4.5 absolute left-28 top-1/2 -translate-y-1/2 transform text-gray-400"
          src="../Web/svg/search-icon.svg"
          alt="search icon"
        />
        <input
          type="text"
          className="grey-out-placeholder h-[56px] w-[480px] rounded-[5px] border-gray-100 py-2 pl-16 pr-3 shadow-md focus:ring-gray-50"
          placeholder="Search for a country..."
        />
      </div>
      <div className="pr-20">
        <select
          className="h-[56px] w-[200px] rounded-[5px] border-gray-100 text-sm"
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
