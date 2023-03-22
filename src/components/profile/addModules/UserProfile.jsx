import { ProfileInfo } from "./blocks/ProfileInfo";

export const UserProfile = ({
  userProfile,
  setUserStatus,
  loadStatusFalse,
}) => {
  return (
    <div className="profile_col card_section">
      {userProfile.userData.fullName && (
        <ProfileInfo
          userProfile={userProfile}
          setUserStatus={setUserStatus}
          loadStatusFalse={loadStatusFalse}
        />
      )}
    </div>
  );
};
