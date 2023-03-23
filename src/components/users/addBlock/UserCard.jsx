import { useNavigate } from "react-router-dom";
import { camera } from "../../../assets/paths/paths";
import { UserCardAddInfo } from "./UserCardAddInfo";
// import { ReactComponent as MessageIcon } from "../../../assets/images/icons/message.svg";

export const UserCard = ({
  user,
  changeFollow,
  inProgress,
  isAuth,
  activeId,
  setActiveId,
  startDialog,
}) => {
  const navigate = useNavigate();
  const addFriend = (e) => {
    e.stopPropagation();
    // e.preventDefault();
    changeFollow(user.id);
  };
  const disabled = () => inProgress.some((id) => id === user.id);
  const redirectToProfile = () => {
    navigate(`/profile/${user.id}`);
  };
  return (
    <div
      className={
        activeId === user.id
          ? " card_section active_user user_card"
          : "card_section user_card"
      }
      onClick={() => setActiveId(user.id)}
    >
      <div className="user_card_bg">
        <img
          className="card_avatar"
          src={user?.photos.small || camera}
          alt="avatar"
        />
        <div className="card_container">
          <div>{user.id}</div>
          <div className="card_name">{user.name}</div>

          <UserCardAddInfo
            activeId={activeId}
            status={user.status}
            followed={user.followed}
            isAuth={isAuth}
            disabled={disabled}
            addFriend={addFriend}
            startDialog={startDialog}
            userId={user.id}
          />

          <button
            className="btn_clear btn_view_profile"
            onClick={redirectToProfile}
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};
