import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHref, useNavigate } from "react-router-dom";
import { authUser, userSignOut } from "../../redux/reducers/authReducer";

import Header from "./Header";

export const HeaderWrapper = (props) => {
  const params = useHref();
  const navigate = useNavigate();
  const isAuthPage = () => /auth/.test(params);
  useEffect(() => {
    props.authUser();
    if (props.isAuth && isAuthPage()) return navigate("/profile");
  });
  return (
    <Header
      isAuth={props.isAuth}
      userSignOut={props.userSignOut}
      login={props.login}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.data.login,
  };
};
const mapDispatchToProps = {
  authUser,
  userSignOut,
};

export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderWrapper);
