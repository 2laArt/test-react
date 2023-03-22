import "../../assets/styles/stylesModules/Profile.modules.scss";
import { UserProfile } from "./addModules/UserProfile";
import UserPosts from "./addModules/UserPosts";
import { CreatePost } from "./addModules/CreatePost";
import { Intro } from "./addModules/blocks/Intro";
import { Achievements } from "./addModules/Achievements";

export const ProfilePage = ({
  postData,
  userProfile,
  sendPost,
  setUserStatus,
  loadStatusFalse,
}) => {
  return (
    <div className="profile">
      <Intro introImg={userProfile.introImg} />
      <div className="profile_data">
        <UserProfile
          userProfile={userProfile}
          setUserStatus={setUserStatus}
          loadStatusFalse={loadStatusFalse}
        />
        <div className="profile_middle_col">
          <CreatePost sendPost={sendPost} />
          <UserPosts postData={postData.posts} />
        </div>
        <Achievements />
      </div>
    </div>
  );
};
