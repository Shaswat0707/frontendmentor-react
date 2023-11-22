import { create } from "zustand";
import { LIGHT } from "./CONSTANTS";

const searchCountries = (countries, continent, search) => {
  // const tempCountries = countries.filter((country) =>
  //   country.name.toLowerCase().includes(search.toLowerCase())
  // );
  // if (continent !== "")
  //   return tempCountries.filter((country) =>
  //     country.continents.includes(continent)
  //   );
  // return tempCountries;
  return countries
    .filter((country) =>
      country.region.toLowerCase().includes(continent.toLowerCase())
    )
    .filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
};

export const joinArray = (array) => array.join(", ");

export const getCountry = (cca3) =>
  useCountryStore
    .getState()
    .allCountries.filter((country) => country.cca3 === cca3)
    .at(0);

export const getBorderCountries = (borders) => {
  const borderCountryMap = [];
  useCountryStore
    .getState()
    .allCountries.filter((country) => borders.includes(country.cca3))
    .map((country) => borderCountryMap.push(country));
  return borderCountryMap;
};

export const numberWithCommas = (x) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const getCurrency = (currencies) => {
  const currencyNames = [];
  for (let [, value] of Object.entries(currencies))
    currencyNames.push(value.name);
  return joinArray(currencyNames);
};

export const getLanguages = (languageObject) => {
  const languages = [];
  for (let [, value] of Object.entries(languageObject))
    languages.push(value.name);
  return joinArray(languages);
};

export const getNativeName = (nativeNames) => {
  let res = "";
  for (let [, value] of Object.entries(nativeNames)) res = value.common;
  return res;
};

export const useCountryStore = create((set, get) => ({
  countries: [],
  allCountries: [],
  theme: LIGHT,
  search: "",
  continent: "",
  setAllCountries: (countries) =>
    set({
      allCountries: countries,
      countries: searchCountries(countries, get().continent, get().search),
    }),
  setSearch: (search) =>
    set({
      search,
      countries: searchCountries(get().allCountries, get().continent, search),
    }),
  setContinent: (continent) =>
    set({
      continent,
      countries: searchCountries(get().allCountries, continent, get().search),
    }),
  toggleTheme: (theme) => set({ theme: !theme }),
}));

fetch("/public/data.json")
  .then((response) => response.json())
  .then((countries) => {
    useCountryStore.getState().setAllCountries(countries);
  });
