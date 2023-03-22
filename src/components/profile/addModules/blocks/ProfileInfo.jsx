import { UserInfo } from "./profileBlocks/UserInfo";
import { UserContacts } from "./profileBlocks/UserContacts";
import { avatar } from "../../../../assets/paths/paths";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../../../router/paths";

export const ProfileInfo = ({
  userProfile,
  setUserStatus,
  loadStatusFalse,
}) => {
  const contacts = Object.entries(userProfile.userData.contacts).filter(
    (i) => i[1]
  );
  return (
    <section className="profile_section ">
      <div className="profile_info_flex">
        {userProfile.editMode && (
          <NavLink
            className="setting_profile"
            to={`${PATHS.ACCOUNT_SETTING}/main`}
          >
            <div className="setting_dot"></div>
            <div className="setting_dot"></div>
            <div className="setting_dot"></div>
          </NavLink>
        )}

        <div>
          <div className="profile_avatar">
            <img
              src={userProfile.userData.photos.large || avatar}
              alt="Avatar"
            ></img>
          </div>
          <UserInfo
            userProfile={userProfile}
            setUserStatus={setUserStatus}
            loadStatusFalse={loadStatusFalse}
          />
          <UserContacts contacts={contacts} />
        </div>
      </div>
    </section>
  );
};
