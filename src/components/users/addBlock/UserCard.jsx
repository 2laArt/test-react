export const UserCard = ({ user, addNewFriend }) => {
  const defaultPhoto = {
    male: "https://i.livelib.ru/auface/320145/o/37dd/Oleg_Sidelnikov.jpg",
    female:
      "https://soloists-academy.com.ua/wp-content/uploads/2020/12/377-3778780_helper4u-maid-bai-cook-chef-empty-profile-picture.jpg",
  };
  const addFriend = () => {
    addNewFriend(user.id);
  };
  return (
    <div className="user_card">
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

      <button className="card_add" onClick={addFriend}>
        {user.followed ? "remove" : "follow"}
      </button>
    </div>
  );
};
