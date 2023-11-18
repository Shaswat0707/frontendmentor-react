/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const CountryTile = ({ country, handleContinentClick }) => {
  let divStyle = {
    backgroundImage: "url(" + country.flags.svg + ")",
  };
  return (
    // <Link to={`/countries/${country.ccn3}`}>
    <Link
      to={`/countries/${country.ccn3}`}
      state={{ country: country }}
      className="country-tile-container"
    >
      <div className="country-tile-image" style={divStyle}>
        {/* <img src={country.flags.svg} alt="Flag" className="hidden" /> */}
      </div>
      <div className="country-tile-name">{country.name.official}</div>
      <div className="country-tile-value">
        Population:{" "}
        <span className="value">{numberWithCommas(country.population)}</span>
      </div>
      <div className="country-tile-value">
        Region:{" "}
        <span className="value">
          {country.continents.sort().map((continent) => (
            <span
              key={continent}
              onClick={() => handleContinentClick(continent)}
              className="country-tile-continents"
            >
              {continent}
            </span>
          ))}
        </span>
      </div>
      <div className="country-tile-value">
        Capital: <span className="value">{country.capital}</span>
      </div>
    </Link>
    // </Link>
  );
};

export default CountryTile;
