import { NavLink } from "react-router-dom";
import exitIcon from "../../../assets/images/icons/exit.png";
export const AuthNav = ({ isAuth, login, userSignOut }) => {
  return (
    <>
      {isAuth ? (
        <span style={{ display: "flex" }}>
          <NavLink to="/profile">
            <img
              src="https://i.livelib.ru/auface/320145/o/37dd/Oleg_Sidelnikov.jpg"
              alt="header_avatar"
              className="header_avatar"
            />
          </NavLink>
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
