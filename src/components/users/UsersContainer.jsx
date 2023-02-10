import React from "react";
import { connect } from "react-redux";
import {
  getUsers,
  changeFollow,
  setCurrentPageActionCreator,
} from "../../redux/reducers/usersReducer";

import { Users } from "./Users";

class UserBu extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage);
  }
  changeFollow = (id) => {
    this.props.changeFollow(this.props.users, id);
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
        isAuth={this.props.isAuth}
        getUsers={this.props.getUsers}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.usersData.users,
  numberOfPage: state.usersData.getNumbersOfPages(),
  currentPage: state.usersData.currentPage,
  inProgress: state.usersData.inProgress,
  isAuth: state.auth.isAuth,
});
const mapDispatchToProps = {
  //cb(v)=>dispatch(ac(v))
  getUsers,
  changeFollow,
  setCurrentPage: setCurrentPageActionCreator,
};

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserBu);
