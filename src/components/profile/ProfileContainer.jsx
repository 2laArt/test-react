import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { useParams } from "react-router-dom";
import {
  createNewPostActionCreator,
  updateInputPostActionCreator,
} from "../../redux/reducers/postsReducer";
import { setProfile } from "../../redux/reducers/userProfileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

import { ProfilePage } from "./ProfilePage";

class ProfileWrapper extends React.Component {
  componentDidMount() {
    const id = this.props.userId || this.props.myId;
    this.props.setProfile(id);
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
  setProfile: setProfile,
};

export const ProfileContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
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
