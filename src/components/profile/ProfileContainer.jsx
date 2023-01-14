import { connect } from "react-redux";
import {
  createNewPostActionCreator,
  updateInputPostActionCreator,
} from "../../redux/reducers/postsReducer";
import { Profile } from "./Profile";

export const ProfileContainer1 = ({ postData, userProfile, dispatch }) => {
  const handlerChange = (text) => {
    dispatch(updateInputPostActionCreator(text));
  };
  const sendPost = () => {
    dispatch(createNewPostActionCreator());
  };

  return (
    <Profile
      postData={postData}
      userProfile={userProfile}
      handlerChange={handlerChange}
      sendPost={sendPost}
    />
  );
};

const mapStateToProps = (state) => ({
  postData: state.postData,
  userProfile: state.userProfile,
});
const mapDispatchToProps = (dispatch) => ({
  handlerChange: (text) => dispatch(updateInputPostActionCreator(text)),
  sendPost: () => dispatch(createNewPostActionCreator()),
});

export const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
