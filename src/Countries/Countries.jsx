import { Navbar, FilterBar, CountryGrid } from "./components";
import { useState, useEffect, useRef } from "react";

import { LIGHT } from "./CONSTANTS";

import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [mode, setMode] = useState(LIGHT);
  const [country, setCountry] = useState("");
  const [continent, setContinent] = useState("");

  const countryList = useRef([]);

  const toggleMode = (currentMode) => {
    setMode(!currentMode);
  };

  useEffect(() => {
    async function fetchCountries() {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries([...data]);
      countryList.current = [...data];
    }
    fetchCountries();
  }, []);

  const handleCountryInput = (event) => {
    setCountry(event.target.value);
    setCountries(
      countryList.current.filter((country) =>
        country.name.official
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      )
    );
  };

  const handleContinentInput = (event) => {
    handleContinentClick(event.target.value);
  };

  const handleContinentClick = (continent) => {
    setContinent(continent);
    if (continent !== "")
      setCountries(
        countryList.current.filter((country) =>
          country.continents.includes(continent)
        )
      );
    else setCountries([...countryList.current]);
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <FilterBar
        country={country}
        continent={continent}
        handleCountryInput={handleCountryInput}
        handleContinentInput={handleContinentInput}
      />
      <CountryGrid
        countries={countries}
        handleContinentClick={handleContinentClick}
      />
    </>
  );
};

export default Countries;
