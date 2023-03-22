// import SearchBar from "./addModules/SearchBar";
import { NavLink } from "react-router-dom";
import NavBar from "./addModules/NavBar";
import { AuthNav } from "./addModules/AuthNav";
import { PATHS } from "../../router/paths";

const Header = ({ isAuth, login, userSignOut }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header_data">
          <div className="logo">
            <NavLink
              to={PATHS.HOME}
              className={(c) => (c.isActive ? "active_custom" : "")}
            >
              LOGO
            </NavLink>
          </div>
          {<span>{isAuth}</span> && <NavBar />}
          <AuthNav userSignOut={userSignOut} isAuth={isAuth} login={login} />
        </div>
      </div>
    </header>
  );
};

export default Header;
