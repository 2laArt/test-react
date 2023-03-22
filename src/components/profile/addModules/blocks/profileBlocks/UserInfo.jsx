import { StatusBlock } from "./StatusBlock";

export const UserInfo = ({ userProfile, setUserStatus, loadStatusFalse }) => {
  const items = [
    {
      name: "Name: ",
      text: userProfile.userData.fullName,
    },
    {
      name: "Job: ",
      text: userProfile.userData.lookingForAJobDescription,
    },
    {
      name: "About Me: ",
      text: userProfile.userData.aboutMe,
    },
  ];
  // {userData.aboutMe}
  return (
    <div className="profile_info_wrapper">
      <div className="profile_info">
        {userProfile.status && (
          <StatusBlock
            status={userProfile.status}
            editMode={userProfile.editMode}
            setUserStatus={setUserStatus}
            loadStatusFalse={loadStatusFalse}
            isLoadStatus={userProfile.isLoadStatus}
          />
        )}
        {items.map(
          (item, i) =>
            item.text && (
              <div className="item" key={i}>
                <span className="bold_color"> {item.name} </span>
                {item.text}
              </div>
            )
        )}
      </div>
    </div>
  );
};
