import { Routes, Route } from "react-router-dom";
import AdviceGenerator from "./AdviceGenerator/AdviceGenerator";
import Home from "./Home";
import UrlShortener from "./UrlShortener/UrlShortener";
import Countries from "./Countries/Countries";
import CountryDetail from "./Countries/components/CountryDetail";
import CreditCard from "./CreditCard/CreditCard";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advice-generator" element={<AdviceGenerator />} />
        <Route path="/url-shortener" element={<UrlShortener />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:id" element={<CountryDetail />} />
        <Route path="/credit-card" element={<CreditCard />} />
      </Routes>
    </>
  );
};

export default App;
