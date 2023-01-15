export const UserCard = ({ user, addNewFriend }) => {
  const addFriend = () => {
    console.log(user.id);
    addNewFriend(user.id);
  };
  return (
    <div className="user_card">
      <img className="card_avatar" src={user.avatar} alt="avatar" />
      <div className="card_container">
        <div className="card_name">{user.name}</div>
        <div className="card_city">{user.city}</div>
        <div className="card_welcome">{user.welcome}</div>
      </div>
      {!user.isFriend && (
        <button className="card_add" onClick={addFriend}>
          add
        </button>
      )}
    </div>
  );
};
