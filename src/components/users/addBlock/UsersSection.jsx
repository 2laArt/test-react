import { UserCard } from "./UserCard";
import axios from "axios";
import React from "react";

export class UserSection extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users`)
      .then((response) => this.props.setUsers(response.data.items));
  }
  render() {
    return (
      <div className="user_section">
        {this.props.users.map((user) => (
          <UserCard
            user={user}
            addNewFriend={this.props.addNewFriend}
            key={user.id}
          />
        ))}
      </div>
    );
  }
}
// export const UserSection1 = ({ users, addNewFriend, setUsers }) => {
//   if (users.length < 5) {
//     console.log(users.length);
//     axios
//       .get(`https://social-network.samuraijs.com/api/1.0/users`)
//       .then((response) => setUsers(response.data.items));
//   }
//   return (
//     <div className="user_section">
//       {users.map((user) => (
//         <UserCard user={user} addNewFriend={addNewFriend} key={user.id} />
//       ))}
//     </div>
//   );
// };
