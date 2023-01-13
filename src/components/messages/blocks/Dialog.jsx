import { NavLink } from "react-router-dom";
export const Dialog = ({ dialog, chooseDialog }) => {
  const path = "/dialogs/";
  const onClickDialog = (event) => {
    event.preventDefault();
    chooseDialog(dialog.id);
  };
  return (
    <div className="dialog_box" onClick={onClickDialog}>
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
