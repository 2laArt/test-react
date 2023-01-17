import "../../assets/styles/addStyles/UsersCard.css";
import { UserSection } from "./addBlock/UsersSection";
import { React } from "react";

export const Users = ({
  users,
  numberOfPage,
  currentPage,
  addNewFriend,
  setUsers,
  setCurrentPage,
}) => {
  // console.log(users);
  return (
    <article>
      <h3>USERS</h3>
      <UserSection
        users={users}
        numberOfPage={numberOfPage}
        currentPage={currentPage}
        addNewFriend={addNewFriend}
        setUsers={setUsers}
        setCurrentPage={setCurrentPage}
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
