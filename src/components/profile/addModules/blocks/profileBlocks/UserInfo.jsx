import { StatusBlock } from "./StatusBlock";

export const UserInfo = ({ userProfile, editModeSwitch, setUserStatus }) => {
  const items = [
    {
      name: "Name: ",
      text: userProfile.userData.fullName,
    },
    {
      name: "Job: ",
      text: userProfile.userData.lookingForAJobDescription,
    },
  ];
  // {userData.aboutMe}
  return (
    <div className="profile_info_wrapper">
      <div className="profile_info">
        <StatusBlock
          status={userProfile.status}
          editMode={userProfile.editMode}
          editModeSwitch={editModeSwitch}
          setUserStatus={setUserStatus}
        />
        {items.map((item, i) => (
          <div className="item" key={i}>
            <span className="bold_color"> {item.name} </span>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};
