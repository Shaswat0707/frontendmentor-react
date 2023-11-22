/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useCountryStore, numberWithCommas } from "../store";

const CountryTile = ({ country }) => {
  const setContinent = useCountryStore((state) => state.setContinent);
  let divStyle = {
    backgroundImage: "url(" + country.flags.svg + ")",
  };
  return (
    <div className="country-tile-container">
      <Link
        to={`/countries/${country.cca3}`}
        className="country-tile-image"
        style={divStyle}
      >
        {/* <img src={country.flags.svg} alt="Flag" className="hidden" /> */}
      </Link>
      <Link to={`/countries/${country.cca3}`} className="country-tile-name">
        {country.name}
      </Link>
      <div className="country-tile-value">
        Population:{" "}
        <span className="value">{numberWithCommas(country.population)}</span>
      </div>
      <div className="country-tile-value">
        Region:{" "}
        <span className="value">
          {/* {country.continents.sort().map((continent) => ( */}
          <span
            onClick={() => setContinent(country.region)}
            className="country-tile-continents"
          >
            {country.region}
          </span>
          {/* ))} */}
        </span>
      </div>
      <div className="country-tile-value">
        Capital: <span className="value">{country.capital}</span>
      </div>
    </div>
    // </Link>
  );
};

export default CountryTile;
