import { Routes, Route } from "react-router-dom";
import AdviceGenerator from "./AdviceGenerator/AdviceGenerator";
import NotFound from "./NotFound";
import Home from "./Home";
import UrlShortener from "./UrlShortener/UrlShortener";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advice-generator" element={<AdviceGenerator />} />
        <Route path="/url-shortener" element={<UrlShortener />} />
      </Routes>
    </>
  );
};

export default App;
