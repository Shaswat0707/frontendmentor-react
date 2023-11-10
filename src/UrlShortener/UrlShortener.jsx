import "./UrlShortener.css";
import {
  Navbar,
  Hero,
  UrlInputBox,
  Statistics,
  BoostYourLink,
  Footer,
} from "./components";

const UrlShortener = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <UrlInputBox />
      <Statistics />
      <BoostYourLink />
      <Footer />
    </>
  );
};

export default UrlShortener;
