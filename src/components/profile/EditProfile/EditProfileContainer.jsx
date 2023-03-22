import { compose } from "redux";
import { connect } from "react-redux";

import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import {
  setProfile,
  changeProfileInfo,
} from "../../../redux/reducers/userProfileReducer";

import { EditProfile } from "./EditProfile";
import { useEffect } from "react";

const pages = ["main", "contacts"];
const sections = {
  main: ["lookingForAJobDescription", "fullName", "aboutMe"],
  contacts: [
    "github",
    "vk",
    "facebook",
    "instagram",
    "twitter",
    "website",
    "youtube",
    "mainLink",
  ],
};

const initialValues = (userData = {}) => {
  const state = {};
  pages.forEach((page) => {
    state[page] = {};
    sections[page].forEach(
      (i) =>
        (state[page][i] =
          typeof userData[page] === "object"
            ? userData[page][i] || ""
            : userData[i] || "")
    );
  });
  return state;
};

const mapStateToProps = (state) => ({
  pages,
  initialValues: initialValues(state.userProfile.userData),
  userData: state.userProfile.userData,
  userId: state.auth.data.id,
});
const mapDispatchToProps = {
  setProfile,
  changeProfileInfo,
};

const InitialUserData = (Component) => {
  const use = useEffect;
  return (props) => {
    use(() => {
      !props.userData.userId &&
        props.setProfile({ userId: props.userId, my: props.userId });
    }, []);
    return props.userData.userId && <Component {...props} />;
  };
};

export const EditProfileContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
  InitialUserData
)(EditProfile);
