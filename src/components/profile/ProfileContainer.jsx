import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { requests } from "../../api/requestAPI";
import {
  createNewPostActionCreator,
  updateInputPostActionCreator,
} from "../../redux/reducers/postsReducer";
import { setUserDataActionCreator } from "../../redux/reducers/userProfileReducer";

import { ProfilePage } from "./ProfilePage";

class ProfileWrapper extends React.Component {
  componentDidMount() {
    const id = this.props.userId || this.props.myId;
    requests.getProfile(id).then((data) => this.props.setUserData(data));
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
  myId: state.auth.data.id,
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
