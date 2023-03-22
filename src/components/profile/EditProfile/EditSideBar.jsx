import { NavLink } from "react-router-dom";
import { PATHS } from "../../../router/paths";

export const EditSideBar = ({ curPage, pages }) => {
  return (
    <div className="edit_side_bar">
      <div>
        {pages.map((item) => (
          <NavLink
            to={`${PATHS.ACCOUNT_SETTING}/${item}`}
            className={(c) => (c.isActive ? "active" : "")}
            key={item}
          >
            {item.toUpperCase()}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
