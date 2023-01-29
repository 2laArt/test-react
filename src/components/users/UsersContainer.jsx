import React from "react";
import { connect } from "react-redux";
import { requests } from "../../api/requestAPI";
import {
  changeFollowActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator,
} from "../../redux/reducers/usersReducer";
import { Users } from "./Users";

class UserBu extends React.Component {
  componentDidMount() {
    requests.getUsers().then((response) =>
      this.props.setUsers({
        users: response.items,
        totalCount: response.totalCount,
      })
    );
  }
  changeFollow = (id) => {
    const user = this.props.users.filter((u) => u.id === id)[0].followed;
    user ? this.unFollowUser(id) : this.followUser(id);
  };
  followUser(id) {
    requests
      .followUser(id)
      .then((resultCode) => !resultCode && this.props.changeFollow(id));
  }
  unFollowUser(id) {
    requests
      .unFollowUser(id)
      .then((resultCode) => !resultCode && this.props.changeFollow(id));
  }

  render() {
    return (
      <Users
        users={this.props.users}
        numberOfPage={this.props.numberOfPage}
        currentPage={this.props.currentPage}
        changeFollow={this.changeFollow}
        setCurrentPage={this.props.setCurrentPage}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.usersData.getUsers(),
  numberOfPage: state.usersData.getNumberOfPage(),
  currentPage: state.usersData.currentPage,
  APIKey: state.auth.APIKey,
});
const mapDispatchToProps = {
  //cb(v)=>dispatch(ac(v))
  changeFollow: changeFollowActionCreator,
  setUsers: setUsersActionCreator,
  setCurrentPage: setCurrentPageActionCreator,
};

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserBu);
