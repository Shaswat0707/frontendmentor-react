import { useCountryStore } from "../store";

/* eslint-disable react/prop-types */
const FilterBar = () => {
  const search = useCountryStore((state) => state.search);
  const setSearch = useCountryStore((state) => state.setSearch);
  const continent = useCountryStore((state) => state.continent);
  const setContinent = useCountryStore((state) => state.setContinent);

  return (
    <div className="container">
      <div className="filter-bar">
        <input
          type="text"
          aria-label="Search for a country"
          className="search"
          placeholder="Search for a country..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <select
          name="continents"
          id="continents"
          className="dropdown"
          value={continent}
          onChange={(event) => setContinent(event.target.value)}
        >
          <option value="">Filter by Region</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Polar">Antarctica</option>
          {/* <option value="South America">South America</option>
          <option value="North America">North America</option> */}
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
