import { connect } from "react-redux";
import axios from "axios";
import { Users } from "./Users";
import {
  addNewFriendActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator,
} from "../../redux/reducers/usersReducer";
import React from "react";

const mapStateToProps = (state) => ({
  users: state.usersData.getUsers(),
  numberOfPage: state.usersData.getNumberOfPage(),
  currentPage: state.usersData.currentPage,
});
const mapDispatchToProps = {
  //cb(v)=>dispatch(ac(v))
  addNewFriend: addNewFriendActionCreator,
  setUsers: setUsersActionCreator,
  setCurrentPage: setCurrentPageActionCreator,
};

class UserBu extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=100&page=${226}`
      )
      .then((response) =>
        this.props.setUsers({
          users: response.data.items,
          totalCount: response.data.totalCount,
        })
      );
  }
  render() {
    return (
      <Users
        users={this.props.users}
        numberOfPage={this.props.numberOfPage}
        currentPage={this.props.currentPage}
        addNewFriend={this.props.addNewFriend}
        setCurrentPage={this.props.setCurrentPage}
      />
    );
  }
}

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserBu);
