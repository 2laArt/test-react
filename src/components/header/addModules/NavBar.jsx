import { NavLink } from "react-router-dom";
const NavBar = () => {
  const paths = ["profile", "users", "dialogs"];
  return (
    <nav className="nav_bar">
      {paths.map((p, i) => {
        return (
          <NavLink
            to={`/${p}`}
            className={(c) =>
              c.isActive ? "active_custom nav_item" : "nav_item"
            }
            key={i}
          >
            <span>{p.toUpperCase()} </span>
          </NavLink>
        );
      })}
    </nav>
  );
};
export default NavBar;
