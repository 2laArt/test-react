import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  createNewPostActionCreator,
  updateInputPostActionCreator,
} from "../../redux/reducers/postsReducer";
import {
  setProfile,
  editModeSwitchActionCreator,
  setUserStatus,
  getUserStatus,
} from "../../redux/reducers/userProfileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { ProfilePage } from "./ProfilePage";

class ProfileWrapper extends React.Component {
  componentDidMount() {
    this.props.setProfile(this.props.userId);
    this.props.getUserStatus(this.props.userId);
  }
  editModeSwitch = (isEdit) => {
    const param = { myId: this.props.myId, isEdit };
    this.props.editModeSwitch(param);
  };
  render() {
    return (
      this.props.userProfile.userData.fullName && (
        <ProfilePage {...this.props} editModeSwitch={this.editModeSwitch} />
      )
    );
  }
}

const ProfileLocationContainer = (props) => {
  const param = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    !param?.userId && navigate(`/profile/${props.myId}`);
  });
  return param?.userId && <ProfileWrapper {...props} {...param} />;
};

const mapStateToProps = (state) => ({
  myId: state.auth.data.id,
  postData: state.postData,
  userProfile: state.userProfile,
});
const mapDispatchToProps = {
  handlerChange: updateInputPostActionCreator,
  sendPost: createNewPostActionCreator,
  editModeSwitch: editModeSwitchActionCreator,
  setProfile,
  setUserStatus,
  getUserStatus,
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
