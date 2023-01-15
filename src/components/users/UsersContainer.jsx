import { connect } from "react-redux";
import { Users } from "./Users";
import { addNewFriendActionCreator } from "../../redux/reducers/usersReducer";
const mapStateToProps = (state) => ({
  users: state.usersData.users,
});
const mapDispatchToProps = (dispatch) => ({
  addNewFriend: (param) => dispatch(addNewFriendActionCreator(param)),
});

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
