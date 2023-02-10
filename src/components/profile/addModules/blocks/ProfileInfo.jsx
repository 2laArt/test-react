import { UserInfo } from "./profileBlocks/UserInfo";
import { UserContacts } from "./profileBlocks/UserContacts";

export const ProfileInfo = ({
  userProfile,
  editModeSwitch,
  setUserStatus,
  loadStatusFalse,
}) => {
  const avatar =
    "https://rabotaip.ru/wp-content/uploads/2021/05/2801748531-150x150.jpg";

  const contacts = Object.entries(userProfile.userData.contacts).filter(
    (i) => i[1]
  );
  return (
    <section className="profile_section">
      <div className="profile_info_flex">
        <div className="avatar">
          <img
            src={userProfile.userData.photos.large || avatar}
            alt="Avatar"
          ></img>
        </div>
        <div>
          <UserInfo
            userProfile={userProfile}
            editModeSwitch={editModeSwitch}
            setUserStatus={setUserStatus}
            loadStatusFalse={loadStatusFalse}
          />
          <UserContacts contacts={contacts} />
        </div>
      </div>
    </section>
  );
};
