import { Intro } from "./blocks/Intro";
import { ProfileInfo } from "./blocks/ProfileInfo";

export const UserProfile = ({
  editMode,
  userProfile,
  editModeSwitch,
  setUserStatus,
}) => {
  return (
    <div className="user_profile">
      <Intro introImg={userProfile.introImg} />
      <ProfileInfo
        editModeSwitch={editModeSwitch}
        editMode={editMode}
        userData={userProfile.userData}
        setUserStatus={setUserStatus}
      />
    </div>
  );
};
