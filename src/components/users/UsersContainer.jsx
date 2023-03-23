import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { startDialog } from "../../redux/reducers/dialogsReducer";
import { PATHS } from "../../router/paths";
import {
  getUsers,
  changeFollow,
  setCurrentPageActionCreator,
} from "../../redux/reducers/usersReducer";
import { selectors } from "../../redux/selectors/selectors";

import { Users } from "./Users";

class UsersFromAPI extends React.Component {
  componentDidMount() {
    this.props.setCurrentPage(+this.props.userPageId || 1);
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
        startDialog={this.props.startDialog}
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
    navigate(`${PATHS.USERS}/${userPageId}`);
  }, [userPageId, params.page, navigate]);
  return (
    <UsersFromAPI
      {...props}
      setCurrentPage={setCurrentPage}
      userPageId={userPageId}
    />
  );
};

const mapStateToProps = (state) => ({
  users: selectors.users(state),
  numberOfPage: selectors.pageNumbers(state),
  currentPage: selectors.currentPage(state),
  inProgress: selectors.inProgress(state),
  isAuth: selectors.isAuth(state),
});
const mapDispatchToProps = {
  //cb(v)=>dispatch(ac(v))
  getUsers,
  changeFollow,
  setCurrentPage: setCurrentPageActionCreator,
  startDialog: startDialog,
};

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentPageToPath);
