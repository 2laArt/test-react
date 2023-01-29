import React from "react";
import { connect } from "react-redux";
import { requests } from "../../api/requestAPI";
import {
  setAuthDataActionCreator,
  setIsResponseActionCreator,
} from "../../redux/reducers/authReducer";

import Header from "./Header";

class HeaderWrapper extends React.Component {
  componentDidMount() {
    requests
      .auth()
      .then((response) => {
        if (response.resultCode) {
          window.history.pushState(null, "", "/auth");
        }
        !response.resultCode && this.props.setAuthData(response.data);
      })
      .finally(setTimeout(() => this.props.setIsResponse(), 100));
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
