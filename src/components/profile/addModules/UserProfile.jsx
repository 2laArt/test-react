import { Intro } from "./blocks/Intro";
import { ProfileInfo } from "./blocks/ProfileInfo";

export const UserProfile = ({
  userProfile,
  editModeSwitch,
  setUserStatus,
  loadStatusFalse,
}) => {
  return (
    <div className="user_profile">
      <Intro introImg={userProfile.introImg} />
      {userProfile.userData.fullName && (
        <ProfileInfo
          userProfile={userProfile}
          editModeSwitch={editModeSwitch}
          setUserStatus={setUserStatus}
          loadStatusFalse={loadStatusFalse}
        />
      )}
    </div>
  );
};
