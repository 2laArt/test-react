import { NavLink } from "react-router-dom";
export const AuthNav = ({ isAuth, login }) => {
  return (
    <>
      {isAuth ? (
        login
      ) : (
        <div className="login">
          <NavLink to="/auth">login</NavLink>
        </div>
      )}
    </>
  );
};
