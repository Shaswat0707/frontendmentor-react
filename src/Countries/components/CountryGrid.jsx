/* eslint-disable react/prop-types */
import { useCountryStore } from "../store";
import CountryTile from "./CountryTile";

const CountryGrid = () => {
  const countries = useCountryStore((state) => state.countries);
  return (
    <div className="container">
      <div className="country-container">
        {countries.map((country) => (
          <CountryTile key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default CountryGrid;
