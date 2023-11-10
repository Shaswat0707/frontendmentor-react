import { useState } from "react";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  const [toggleDataVisible, setToggleDataVisible] = useState(false);
  const toggleNavigation = () => {
    setToggleDataVisible(!toggleDataVisible);
  };
  return (
    <header className="primary-header">
      <div className="container">
        <div className="nav-wrapper">
          <a href="#" aria-label="Home">
            <svg className="logo" width="90" height="24">
              <use xlinkHref={`${Logo}#logo`} />
            </svg>
          </a>
          <button
            aria-controls="primary-navigation"
            aria-expanded={toggleDataVisible}
            className="mobile-nav-toggle"
            onClick={toggleNavigation}
          >
            <span className="visually-hidden">Menu</span>
          </button>
          <nav
            className="primary-navigation"
            id="primary-navigation"
            data-visible={toggleDataVisible}
          >
            <ul aria-label="Primary" role="list" className="nav-list">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
              <li className="break-up"></li>
              <li className="align-right">
                <a href="#">Login</a>
              </li>
              <li>
                <button className="primary-button">Sign Up</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
