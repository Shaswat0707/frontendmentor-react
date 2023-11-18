/* eslint-disable react/prop-types */
const FilterBar = ({
  country,
  continent,
  handleCountryInput,
  handleContinentInput,
}) => {
  return (
    <div className="container">
      <div className="filter-bar">
        <input
          type="text"
          aria-label="Search for a country"
          className="search"
          placeholder="Search for a country..."
          value={country}
          onChange={handleCountryInput}
        />
        <select
          name="continents"
          id="continents"
          className="dropdown"
          value={continent}
          onChange={handleContinentInput}
        >
          <option value="">Filter by Region</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Antarctica">Antarctica</option>
          <option value="South America">South America</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
