import React from "react";
import { connect } from "react-redux";
import { authUser } from "../../redux/reducers/authReducer";

import Header from "./Header";

class HeaderWrapper extends React.Component {
  componentDidMount() {
    this.props.authUser();
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
  authUser,
};

export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderWrapper);
