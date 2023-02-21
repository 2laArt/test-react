// import SearchBar from "./addModules/SearchBar";
import { NavLink } from "react-router-dom";
import "../../assets/styles/addStyles/Header.css";
import NavBar from "./addModules/NavBar";
import { AuthNav } from "./addModules/AuthNav";

const Header = ({ isAuth, login, userSignOut }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header_data">
          <div className="logo">
            <NavLink
              to="/"
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
