import { Intro } from "./blocks/Intro";
import { ProfileInfo } from "./blocks/ProfileInfo";

export const UserProfile = ({ userProfile }) => {
  return (
    <div className="user_profile">
      <Intro introImg={userProfile.introImg} />
      <ProfileInfo userData={userProfile.userData} />
    </div>
  );
};
