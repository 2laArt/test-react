import {
  createNewPostActionCreator,
  updateInputPostActionCreator,
} from "../../redux/reducers/postsReducer";
import { Profile } from "./Profile";

export const ProfileContainer = ({ postData, userProfile, dispatch }) => {
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
