// import SearchBar from "./addModules/SearchBar";
import NavBar from "./addModules/NavBar";
import "../../assets/styles/addStyles/Header.css";
import { NavLink } from "react-router-dom";
import { AuthNav } from "./addModules/AuthNav";
const Header = ({ isAuth, login }) => {
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
          <AuthNav isAuth={isAuth} login={login} />
          {isAuth && <NavBar />}
        </div>
      </div>
    </header>
  );
};

export default Header;
