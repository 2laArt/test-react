import { useNavigate } from "react-router-dom";

export const UserCard = ({ user, changeFollow, inProgress, isAuth }) => {
  const navigate = useNavigate();
  const defaultPhoto = {
    male: "https://i.livelib.ru/auface/320145/o/37dd/Oleg_Sidelnikov.jpg",
    female:
      "https://soloists-academy.com.ua/wp-content/uploads/2020/12/377-3778780_helper4u-maid-bai-cook-chef-empty-profile-picture.jpg",
  };
  const addFriend = (e) => {
    e.stopPropagation();
    e.preventDefault();
    changeFollow(user.id);
  };
  const disabled = () => inProgress.some((id) => id === user.id);
  const redirectToProfile = () => {
    navigate(`/profile/${user.id}`);
  };
  return (
    <div className="user_card">
      <div className="redirect_profile" onClick={redirectToProfile}>
        <img
          className="card_avatar"
          src={user?.photos.small || defaultPhoto.male}
          alt="avatar"
        />
        <div className="card_container">
          <div>{user.id}</div>
          <div className="card_name">{user.name}</div>
          <div className="card_welcome">{user.status}</div>
        </div>

        {isAuth && !disabled() && (
          <button
            className="user_button"
            style={{ color: user.followed && "rgb(255, 169, 169)" }}
            onClick={addFriend}
          >
            {user.followed ? "remove" : "follow"}
          </button>
        )}
      </div>
    </div>
  );
};
