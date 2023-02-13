import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  getUsers,
  changeFollow,
  setCurrentPageActionCreator,
} from "../../redux/reducers/usersReducer";

import { Users } from "./Users";

class UsersFromAPI extends React.Component {
  componentDidMount() {
    this.props.setCurrentPage(+this.props.userPageId);
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
const CurrentPageToPath = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const userPageId = localStorage.getItem("userPageId");
  const setCurrentPage = (page) => {
    localStorage.setItem("userPageId", page);
    props.setCurrentPage(page);
    props.getUsers(page);
  };
  useEffect(() => {
    if (+params.page === +userPageId) return;
    navigate(`/users/${userPageId}`);
  });
  return (
    <UsersFromAPI
      {...props}
      setCurrentPage={setCurrentPage}
      userPageId={userPageId}
    />
  );
};

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
)(CurrentPageToPath);
