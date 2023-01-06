import "../../assets/styles/stylesModules/Profile.modules.css";
import { UserProfile } from "./addModules/UserProfile";
import UserPosts from "./addModules/UserPosts";
import CreatePost from "./addModules/CreatePost";
const Profile = ({
  postData,
  userProfile,
  newPostText,
  updateInput,
  createNewPost,
}) => {
  return (
    <div className="profile">
      <div className="profile_data">
        <UserProfile userProfile={userProfile} />
        <CreatePost
          updateInput={updateInput}
          newPostText={newPostText}
          createNewPost={createNewPost}
        />
        <UserPosts postData={postData} />
      </div>
    </div>
  );
};
export default Profile;
