/* eslint-disable react/prop-types */
import Icon from "../assets/sun-moon-sprite.svg";
import { DARK } from "../CONSTANTS";

const Navbar = ({ mode, toggleMode }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-title">Where in the world</div>
        <div className="nav-mode" onClick={() => toggleMode(mode)}>
          <div className="mode-image"></div>
          <svg className="icon" width="13" height="13">
            {mode === DARK ? (
              <use xlinkHref={`${Icon}#sun`} />
            ) : (
              <use xlinkHref={`${Icon}#moon`} />
            )}
          </svg>
          <div className="mode-text">
            {mode === DARK ? "Light" : "Dark"} Mode
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
