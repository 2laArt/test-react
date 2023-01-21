import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  createNewPostActionCreator,
  updateInputPostActionCreator,
} from "../../redux/reducers/postsReducer";
import { setUserDataActionCreator } from "../../redux/reducers/userProfileReducer";

import { Profile } from "./Profile";

class ProfileWrapper extends React.Component {
  getLocation() {
    const location = new URL(window.location);
    const last = location.pathname.split("/").pop();
    const id = last && parseInt(last) ? parseInt(last) : 2;
    return id;
  }
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${this.getLocation()}`
      )
      .then((response) => this.props.setUserData(response.data));
  }
  render() {
    return (
      this.props.userProfile.userData.fullName && <Profile {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  postData: state.postData,
  userProfile: state.userProfile,
});
const mapDispatchToProps = {
  handlerChange: updateInputPostActionCreator,
  sendPost: createNewPostActionCreator,
  setUserData: setUserDataActionCreator,
};

export const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileWrapper);

//   const handlerChange = (text) => {
//     dispatch(updateInputPostActionCreator(text));
//   };
// export const ProfileContainer1 = ({ postData, userProfile, dispatch }) => {
//   const sendPost = () => {
//     dispatch(createNewPostActionCreator());
//   };

//   return (
//     <Profile
//       postData={postData}
//       userProfile={userProfile}
//       handlerChange={handlerChange}
//       sendPost={sendPost}
//     />
//   );
// };
