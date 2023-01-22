import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  createNewPostActionCreator,
  updateInputPostActionCreator,
} from "../../redux/reducers/postsReducer";
import { setUserDataActionCreator } from "../../redux/reducers/userProfileReducer";

import { ProfilePage } from "./ProfilePage";

class ProfileWrapper extends React.Component {
  componentDidMount() {
    const id = this.props.userId || 2;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
      .then((response) => this.props.setUserData(response.data));
  }
  render() {
    return (
      this.props.userProfile.userData.fullName && (
        <ProfilePage {...this.props} />
      )
    );
  }
}

const ProfileLocationContainer = (props) => {
  const param = useParams();
  return <ProfileWrapper {...props} {...param} />;
};

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
)(ProfileLocationContainer);

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
