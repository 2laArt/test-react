import "../../assets/styles/stylesModules/Profile.modules.css";
import { UserProfile } from "./addModules/UserProfile";
import UserPosts from "./addModules/UserPosts";
import CreatePost from "./addModules/CreatePost";
export const ProfilePage = ({
  postData,
  userProfile,
  handlerChange,
  sendPost,
  editMode,
  editModeSwitch,
  setUserStatus,
}) => {
  return (
    <div className="profile">
      <div className="profile_data">
        <UserProfile
          editModeSwitch={editModeSwitch}
          editMode={editMode}
          userProfile={userProfile}
          setUserStatus={setUserStatus}
        />
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
