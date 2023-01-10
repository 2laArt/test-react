import "../../assets/styles/stylesModules/Profile.modules.css";
import { UserProfile } from "./addModules/UserProfile";
import UserPosts from "./addModules/UserPosts";
import CreatePost from "./addModules/CreatePost";
const Profile = ({ postData, userProfile, dispatch }) => {
  return (
    <div className="profile">
      <div className="profile_data">
        <UserProfile userProfile={userProfile} />
        <CreatePost newPostText={postData.newPostText} dispatch={dispatch} />
        <UserPosts postData={postData.posts} />
      </div>
    </div>
  );
};
export default Profile;
