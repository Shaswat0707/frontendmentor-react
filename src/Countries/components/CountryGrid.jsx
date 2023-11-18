/* eslint-disable react/prop-types */
import CountryTile from "./CountryTile";

const CountryGrid = ({ countries, handleContinentClick }) => {
  return (
    <div className="container">
      <div className="country-container">
        {countries.map((country) => (
          <CountryTile
            key={country.cca3}
            country={country}
            handleContinentClick={handleContinentClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryGrid;
