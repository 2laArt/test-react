import "../../assets/styles/addStyles/UsersCard.css";
import { UserSection } from "./addBlock/UsersSection";
export const Users = ({ users, addNewFriend }) => {
  // console.log(users);
  return (
    <article>
      <h3>USERS</h3>
      <UserSection users={users} addNewFriend={addNewFriend} />
    </article>
  );
};
