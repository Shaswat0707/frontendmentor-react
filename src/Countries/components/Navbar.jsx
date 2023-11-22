/* eslint-disable react/prop-types */
import Icon from "../assets/sun-moon-sprite.svg";
import { useNavigate } from "react-router-dom";
import { DARK } from "../CONSTANTS";
import { useCountryStore } from "../store";

const Navbar = () => {
  const theme = useCountryStore((state) => state.theme);
  const toggleTheme = useCountryStore((state) => state.toggleTheme);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-title" onClick={() => navigate("/countries")}>
          Where in the world
        </div>
        <div className="nav-mode" onClick={() => toggleTheme(theme)}>
          <div className="mode-image"></div>
          <svg className="icon" width="13" height="13">
            {theme === DARK ? (
              <use xlinkHref={`${Icon}#sun`} />
            ) : (
              <use xlinkHref={`${Icon}#moon`} />
            )}
          </svg>
          <div className="mode-text">
            {theme === DARK ? "Light" : "Dark"} Mode
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
