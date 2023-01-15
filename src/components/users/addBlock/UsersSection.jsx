import { UserCard } from "./UserCard";

export const UserSection = ({ users, addNewFriend }) => {
  return (
    <div className="user_section">
      {users.map((user) => (
        <UserCard user={user} addNewFriend={addNewFriend} key={user.id} />
      ))}
    </div>
  );
};
