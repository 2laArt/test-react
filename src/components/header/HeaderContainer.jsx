import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import {
  setAuthDataActionCreator,
  setIsResponseActionCreator,
} from "../../redux/reducers/authReducer";

import Header from "./Header";

class HeaderWrapper extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode) {
          window.history.pushState(null, "", "/auth");
        }
        !response.data.resultCode && this.props.setAuthData(response.data.data);
        setTimeout(() => this.props.setIsResponse(), 100);
      });
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
  setIsResponse: setIsResponseActionCreator,
};

export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderWrapper);
