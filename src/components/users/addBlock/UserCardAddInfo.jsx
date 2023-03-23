import { NavLink } from "react-router-dom";
import { PATHS } from "../../../router/paths";
import { MessageIcon } from "../../icons/MessageIcon";

export const UserCardAddInfo = ({
  status,
  followed,
  isAuth,
  disabled,
  addFriend,
  startDialog,
  userId,
  activeId,
}) => {
  const isActive = activeId === userId;
  const onWriteMsg = (e) => {
    e.stopPropagation();
    startDialog(userId);
  };
  return (
    <div className={isActive ? "user_add_info" : "user_add_info heightZero"}>
      <div className="card_welcome">{status}</div>
      <div className="user_card_btns">
        {isAuth && !disabled() && (
          <button className="user_button user_card_btn" onClick={addFriend}>
            {followed ? "Unfollow" : "Follow"}
          </button>
        )}
        <NavLink
          to={`${PATHS.DIALOGS}/${userId}`}
          className="user_card_btn"
          onClick={onWriteMsg}
        >
          <MessageIcon />
        </NavLink>
      </div>
    </div>
  );
};
