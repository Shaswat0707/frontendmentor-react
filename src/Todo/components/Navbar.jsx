import Icon from "../assets/icon-theme.svg";
import { useTodoStore } from "../store";
import { DARK } from "../CONSTANTS";

const Navbar = () => {
  const theme = useTodoStore((state) => state.theme);
  const setTheme = useTodoStore((state) => state.setTheme);
  return (
    <div className="navbar-container">
      <div className="container">
        <div className="logo">Todo</div>
        <svg className="theme-icon" width="16" height="16" onClick={setTheme}>
          {theme === DARK ? (
            <use xlinkHref={`${Icon}#icon-sun`} />
          ) : (
            <use xlinkHref={`${Icon}#icon-moon`} />
          )}
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
