import "../../assets/styles/addStyles/UsersCard.css";
import React from "react";

import { UserCard } from "./addBlock/UserCard";

export const Users = (props) => {
  return (
    <div className="users">
      <div className="pagination">
        {props.numberOfPage.map((page) => (
          <button
            style={{
              color: props.currentPage === page ? " red" : "inherit",
            }}
            onClick={() => props.setCurrentPage(page)}
            key={page}
          >
            {page}
          </button>
        ))}
      </div>
      <div className="users_section">
        {props.users.map((user) => (
          <UserCard
            inProgress={props.inProgress}
            user={user}
            changeFollow={props.changeFollow}
            key={user.id}
          />
        ))}
      </div>
    </div>
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
