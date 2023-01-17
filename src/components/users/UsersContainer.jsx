import { connect } from "react-redux";
import { Users } from "./Users";
import {
  addNewFriendActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator,
} from "../../redux/reducers/usersReducer";
const mapStateToProps = (state) => ({
  users: state.usersData.getUsers(),
  numberOfPage: state.usersData.getNumberOfPage(),
  currentPage: state.usersData.currentPage,
});
const mapDispatchToProps = (dispatch) => ({
  addNewFriend: (param) => dispatch(addNewFriendActionCreator(param)),
  setUsers: (param) => dispatch(setUsersActionCreator(param)),
  setCurrentPage: (param) => dispatch(setCurrentPageActionCreator(param)),
});

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
