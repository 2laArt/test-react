import { connect } from "react-redux";
import axios from "axios";
import { Users } from "./Users";
import {
  changeFollowActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator,
} from "../../redux/reducers/usersReducer";
import React from "react";

const URL = "https://social-network.samuraijs.com/api/1.0";

class UserBu extends React.Component {
  componentDidMount() {
    axios
      .get(`${URL}/users?count=100&page=${227}`, { withCredentials: true })
      .then((response) =>
        this.props.setUsers({
          users: response.data.items,
          totalCount: response.data.totalCount,
        })
      );
  }
  changeFollow = (id) => {
    const user = this.props.users.filter((u) => u.id === id)[0].followed;
    user ? this.unFollowUser(id) : this.followUser(id);
    // this.props.changeFollow(id);
  };
  followUser(id) {
    axios
      .post(
        `${URL}/follow/${id}`,
        {},
        {
          withCredentials: true,
          "API-KEY": this.props.APIKey,
        }
      )
      .then((response) => {
        !response.data.resultCode && this.props.changeFollow(id);
      });
  }
  unFollowUser(id) {
    axios
      .delete(
        `${URL}/follow/${id}`,
        {},
        {
          withCredentials: true,
          "API-KEY": this.props.APIKey,
        }
      )
      .then((response) => {
        !response.data.resultCode && this.props.changeFollow(id);
      });
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
