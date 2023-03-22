import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { addNewPostActionCreator } from "../../redux/reducers/postsReducer";
import {
  setProfile,
  setUserStatus,
  getUserStatus,
  loadStatusActionCreator,
} from "../../redux/reducers/userProfileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { ProfilePage } from "./ProfilePage";

const ProfileWrapper = (props) => {
  useEffect(() => {
    props.setProfile({ userId: props.userId, myId: props.myId });
    props.getUserStatus(props.userId);
  }, [props.userId]);
  return props.userProfile.userData.fullName && <ProfilePage {...props} />;
};

const ProfileLocationContainer = (props) => {
  const param = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!param.userId) {
      navigate(`/profile/${props.myId}`);
    }
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
  loadStatusFalse: loadStatusActionCreator,
  setProfile,
  setUserStatus,
  getUserStatus,
};

export const ProfileContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(ProfileLocationContainer);
