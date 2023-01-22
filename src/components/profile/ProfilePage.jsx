import "../../assets/styles/stylesModules/Profile.modules.css";
import { UserProfile } from "./addModules/UserProfile";
import UserPosts from "./addModules/UserPosts";
import CreatePost from "./addModules/CreatePost";
export const ProfilePage = ({
  postData,
  userProfile,
  handlerChange,
  sendPost,
}) => {
  return (
    <div className="profile">
      <div className="profile_data">
        <UserProfile userProfile={userProfile} />
        <CreatePost
          newPostText={postData.newPostText}
          handlerChange={handlerChange}
          sendPost={sendPost}
        />
        <UserPosts postData={postData.posts} />
      </div>
    </div>
  );
};
