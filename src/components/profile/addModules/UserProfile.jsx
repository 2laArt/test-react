import { Intro } from "./blocks/Intro";
import { ProfileInfo } from "./blocks/ProfileInfo";

export const UserProfile = ({ userProfile, editModeSwitch, setUserStatus }) => {
  return (
    <div className="user_profile">
      <Intro introImg={userProfile.introImg} />
      <ProfileInfo
        userProfile={userProfile}
        editModeSwitch={editModeSwitch}
        setUserStatus={setUserStatus}
      />
    </div>
  );
};
