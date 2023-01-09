import "../../assets/styles/stylesModules/Profile.modules.css";
import { UserProfile } from "./addModules/UserProfile";
import UserPosts from "./addModules/UserPosts";
import CreatePost from "./addModules/CreatePost";
const Profile = ({ postData, userProfile, newPostText, dispatch }) => {
  return (
    <div className="profile">
      <div className="profile_data">
        <UserProfile userProfile={userProfile} />
        <CreatePost newPostText={newPostText} dispatch={dispatch} />
        <UserPosts postData={postData} />
      </div>
    </div>
  );
};
export default Profile;
