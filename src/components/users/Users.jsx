import "../../assets/styles/addStyles/UsersCard.css";
import { UserSection } from "./addBlock/UsersSection";
import { React } from "react";

export const Users = ({ users, addNewFriend, setUsers }) => {
  // console.log(users);
  return (
    <article>
      <h3>USERS</h3>
      <UserSection
        users={users}
        addNewFriend={addNewFriend}
        setUsers={setUsers}
      />
    </article>
  );
};

// export class Users extends React.Component {
//   constructor({ users, addNewFriend, setUsers }) {
//     super({ users, addNewFriend, setUsers });
//   }
//   render() {
//     return (
//       <article>
//         <h3>USERS</h3>
//         <UserSection
//           users={this.users}
//           addNewFriend={this.addNewFriend}
//           setUsers={this.setUsers}
//         />
//       </article>
//     );
//   }
// }
