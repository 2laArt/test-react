import { NavLink } from "react-router-dom";
export const Dialog = ({ dialog, showDialog }) => {
  const path = "/dialogs/";
  const click = (event) => {
    event.preventDefault();
    showDialog(dialog.id);
  };
  return (
    <div className="dialog_box" onClick={click}>
      <NavLink
        to={`${path}${dialog.id}`}
        className={(c) => (c.isActive ? "active_dialogs" : "")}
      >
        <div className="dialog">
          <div className="avatar_min">
            <img src={dialog.img} alt="img" className="avatar" />
          </div>
          <div className="dl_content">
            <div className="dl_name">{dialog.name}</div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};
