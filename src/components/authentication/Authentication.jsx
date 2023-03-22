import React, { useState } from "react";
import { connect } from "react-redux";
import { userSignIn } from "../../redux/reducers/authReducer";
import { SignIn } from "./SIgnIn";
import { SignUp } from "./SignUp";

const Authentication = ({ userSignIn }) => {
  const [switcher, setSwitcher] = useState(true);

  return (
    <div>
      {switcher ? (
        <button className="button" onClick={() => setSwitcher(false)}>
          Sing Up
        </button>
      ) : (
        <button className="button" onClick={() => setSwitcher(true)}>
          Sing In
        </button>
      )}
      {switcher ? <SignIn userSignIn={userSignIn} /> : <SignUp />}
    </div>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  userSignIn,
};

export const AuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Authentication);
//sign ( in / up )
