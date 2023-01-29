import React from "react";
import { connect } from "react-redux";
import { requests } from "../../api/requestAPI";
import {
  changeFollowActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator,
  toggleInProgressActionCreator,
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
    this.props.toggleInProgress(id);
    const result = user ? requests.unFollowUser(id) : requests.followUser(id);
    result.then((resultCode) => {
      if (!resultCode) {
        this.props.changeFollow(id);
        this.props.toggleInProgress(id);
      }
    });
  };
  render() {
    return (
      <Users
        users={this.props.users}
        numberOfPage={this.props.numberOfPage}
        currentPage={this.props.currentPage}
        changeFollow={this.changeFollow}
        setCurrentPage={this.props.setCurrentPage}
        inProgress={this.props.inProgress}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.usersData.getUsers(),
  numberOfPage: state.usersData.getNumberOfPage(),
  currentPage: state.usersData.currentPage,
  inProgress: state.usersData.inProgress,
});
const mapDispatchToProps = {
  //cb(v)=>dispatch(ac(v))
  changeFollow: changeFollowActionCreator,
  setUsers: setUsersActionCreator,
  setCurrentPage: setCurrentPageActionCreator,
  toggleInProgress: toggleInProgressActionCreator,
};

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserBu);
