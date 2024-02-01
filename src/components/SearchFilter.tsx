const SearchFilter = () => {
  return (
    <section className="flex items-center justify-between pt-16">
      <div className="shadow-[0px 2px 9px rgba(0, 0, 0, 0.0532439)] relative pl-6">
        <img
          className="absolute left-3 top-1/2 h-6 w-6 -translate-y-1/2 transform text-gray-400"
          src="../Web/svg/search-icon.svg"
          alt="search icon"
        />
        <input
          type="text"
          className="w-96 rounded-[5px] py-2 pl-10 pr-3 focus:outline-none"
          placeholder="Search for a country..."
        />
      </div>
      <div className="pr-16">
        <select name="Filter by Region" id="region">
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
