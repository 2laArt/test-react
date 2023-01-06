import { ProfileIntro } from "./blocks/UserIntro";
import ProfileInfo from "./blocks/UserInfo";

export const UserProfile = ({ userProfile }) => {
  return (
    <div className="user_profile">
      <ProfileIntro introImg={userProfile.introImg} />
      <ProfileInfo userData={userProfile.userData} />
    </div>
  );
};
