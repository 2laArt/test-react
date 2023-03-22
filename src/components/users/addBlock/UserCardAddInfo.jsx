import { MessageIcon } from "../../icons/MessageIcon";

export const UserCardAddInfo = ({
  status,
  followed,
  isAuth,
  disabled,
  addFriend,
  writeMsg,
  userId,
  activeId,
}) => {
  const isActive = activeId === userId;
  const onWriteMsg = (e) => {
    e.stopPropagation();
    writeMsg(userId);
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
        <button className="user_card_btn" onClick={onWriteMsg}>
          <MessageIcon />
        </button>
      </div>
    </div>
  );
};
