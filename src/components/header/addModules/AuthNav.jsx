import { NavLink } from "react-router-dom";
import exitIcon from "../../../assets/images/icons/exit.png";
export const AuthNav = ({ isAuth, login, userSignOut }) => {
  return (
    <>
      {isAuth ? (
        <span>
          <NavLink to="/profile">{login}</NavLink>
          <button className="exit_button" onClick={userSignOut}>
            <img src={exitIcon} alt="exit" />
          </button>
        </span>
      ) : (
        <div className="login">
          <NavLink to="/auth">login</NavLink>
        </div>
      )}
    </>
  );
};
