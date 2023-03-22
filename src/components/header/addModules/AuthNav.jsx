import { NavLink } from "react-router-dom";
import exitIcon from "../../../assets/images/icons/exit.svg";
import { camera } from "../../../assets/paths/paths";
import { PATHS } from "../../../router/paths";
export const AuthNav = ({ isAuth, login, userSignOut }) => {
  return (
    <>
      {isAuth ? (
        <span style={{ display: "flex", alignItems: "center" }}>
          <NavLink to={PATHS.PROFILE}>
            <img src={camera} alt="header_avatar" className="header_avatar" />
          </NavLink>
          <button className="exit_button" onClick={userSignOut}>
            <img src={exitIcon} alt="exit" />
          </button>
        </span>
      ) : (
        <div className="login">
          <NavLink to={PATHS.AUTH}>login</NavLink>
        </div>
      )}
    </>
  );
};
