import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { addNewPostActionCreator } from "../../redux/reducers/postsReducer";
import {
  setProfile,
  editModeSwitchActionCreator,
  setUserStatus,
  getUserStatus,
  loadStatusActionCreator,
} from "../../redux/reducers/userProfileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { ProfilePage } from "./ProfilePage";

const ProfileWrapper = (props) => {
  const editModeSwitch = (isEdit) => {
    const param = { myId: props.myId, isEdit };
    props.editModeSwitch(param);
  };
  useEffect(() => {
    props.setProfile(props.userId);
    props.getUserStatus(props.userId);
  }, []);
  return (
    props.userProfile.userData.fullName && (
      <ProfilePage {...props} editModeSwitch={editModeSwitch} />
    )
  );
};

const ProfileLocationContainer = (props) => {
  const param = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    !param.userId && navigate(`/profile/${props.myId}`);
  }, [param.userId, props.myId, navigate]);
  return param?.userId && <ProfileWrapper {...props} {...param} />;
};

const mapStateToProps = (state) => ({
  myId: state.auth.data.id,
  postData: state.postData,
  userProfile: state.userProfile,
});
const mapDispatchToProps = {
  sendPost: addNewPostActionCreator,
  editModeSwitch: editModeSwitchActionCreator,
  loadStatusFalse: loadStatusActionCreator,
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
