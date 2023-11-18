import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Link to="/advice-generator">Advice Generator</Link>
      <br />
      <Link to="/url-shortener">URL Shortener</Link>
      <br />
      <Link to="/countries">Countries</Link>
      <br />
    </div>
  );
};

export default Home;
