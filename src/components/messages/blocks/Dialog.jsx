import { NavLink } from "react-router-dom";
import { showDialogActionCreator } from "../../../redux/reducers/dialogsReducer";
export const Dialog = ({ dialog, dispatch }) => {
  const path = "/dialogs/";
  const click = (event) => {
    event.preventDefault();
    dispatch(showDialogActionCreator(dialog.id));
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
