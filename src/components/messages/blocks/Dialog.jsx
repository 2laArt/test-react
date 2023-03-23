import { NavLink } from "react-router-dom";
import { PATHS } from "../../../router/paths";
import { camera } from "../../../assets/paths/paths";
export const Dialog = ({ dialog }) => {
  const onClickDialog = (event) => {
    event.preventDefault();
    // chooseDialog(dialog.id);
  };
  return (
    <div className="dialog_box" onClick={onClickDialog}>
      <NavLink
        to={`${PATHS.DIALOGS}/${dialog.id}`}
        className={(c) => (c.isActive ? "active_dialogs" : "")}
      >
        <div className="dialog user_created">
          <div className="avatar_min">
            <img
              src={dialog.photos.small || camera}
              alt="img"
              className="avatar"
            />
          </div>
          <div className="dl_content">
            <div className="dl_name">{dialog.userName}</div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};
