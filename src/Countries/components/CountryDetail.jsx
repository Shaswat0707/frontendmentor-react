/* eslint-disable react/prop-types */
import { useParams, useNavigate } from "react-router-dom";
import {
  getCountry,
  getBorderCountries,
  numberWithCommas,
  joinArray,
  getCurrency,
  getLanguages,
  useCountryStore,
} from "../store";
import Icon from "../assets/arrow-back.svg";
import Navbar from "./Navbar";

const CountryDetail = () => {
  const { id } = useParams();
  const countryObj = getCountry(id);
  const countryState = useCountryStore((state) => state.country);
  const country = countryObj === undefined ? countryState : countryObj;
  const borderCountries = getBorderCountries(country.borders);
  const navigate = useNavigate();
  const theme = useCountryStore((state) => state.theme);

  return (
    <div className="countries-rest" data-dark-theme={theme}>
      <Navbar />
      <div className="container">
        <div className="country-detail-container">
          <button className="primary back-button" onClick={() => navigate(-1)}>
            <svg className="icon" width="20" height="20">
              <use xlinkHref={`${Icon}#arrow-back`}></use>
            </svg>{" "}
            Back
          </button>
          <div className="country-detail">
            <div className="country-detail-flag">
              <img src={country.flags.svg} alt="Flag" />
            </div>
            <div className="country-detail-content">
              <div className="country-detail-name">{country.name}</div>
              <div className="country-detail-tiles">
                <div className="country-detail-tile">
                  <span>Native Name: </span>
                  {/* {getNativeName(country.name.nativeName)} */}
                  {country.nativeName}
                </div>
                <div className="country-detail-tile">
                  <span>Population: </span>
                  {numberWithCommas(country.population)}
                </div>
                <div className="country-detail-tile">
                  <span>Region: </span>
                  {country.region}
                </div>
                <div className="country-detail-tile">
                  <span>Sub Region: </span>
                  {country.subregion}
                </div>
                <div className="country-detail-tile">
                  <span>Capital: </span>
                  {/* {joinArray(country.capital)} */}
                  {country.capital}
                </div>
              </div>
              <div className="country-detail-tiles">
                <div className="country-detail-tile">
                  <span>Top Level Domain: </span>
                  {joinArray(country.topLevelDomain)}
                </div>
                <div className="country-detail-tile">
                  <span>Currencies: </span>
                  {getCurrency(country.currencies)}
                </div>
                <div className="country-detail-tile">
                  <span>Languages: </span>
                  {getLanguages(country.languages)}
                </div>
              </div>
              <div className="country-detail-tiles">
                <div className="country-detail-tiles-title">
                  Border Countries:
                </div>
                <div className="country-detail-tiles-button-wrapper">
                  {borderCountries.map((borderCountry) => (
                    <button
                      key={borderCountry.cca3}
                      className="primary borderCountry-button"
                      onClick={() =>
                        navigate(`../${borderCountry.cca3}`, {
                          relative: "path",
                        })
                      }
                    >
                      {borderCountry.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
