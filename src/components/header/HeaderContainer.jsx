import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setAuthDataActionCreator } from "../../redux/reducers/authReducer";

import Header from "./Header";

class HeaderWrapper extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then(
        (response) =>
          !response.data.resultCode &&
          this.props.setAuthData(response.data.data)
      );
  }
  render() {
    return <Header isAuth={this.props.isAuth} login={this.props.login} />;
  }
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.data.login,
  };
};
const mapDispatchToProps = {
  setAuthData: setAuthDataActionCreator,
};

export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderWrapper);
