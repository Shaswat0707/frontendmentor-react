import { Navbar, FilterBar, CountryGrid } from "./components";
import "./Countries.css";
import { useCountryStore } from "./store";

const Countries = () => {
  const theme = useCountryStore((state) => state.theme);
  return (
    <div className="countries-rest" data-dark-theme={theme}>
      <Navbar />
      <FilterBar />
      <CountryGrid />
    </div>
  );
};

export default Countries;
