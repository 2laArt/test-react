import { StatusBlock } from "./StatusBlock";

export const UserInfo = ({
  editMode,
  userData,
  editModeSwitch,
  setUserStatus,
}) => {
  const items = [
    {
      name: "Name: ",
      text: userData.fullName,
    },
    {
      name: "Job: ",
      text: userData.lookingForAJobDescription,
    },
  ];
  // {userData.aboutMe}
  return (
    <div className="profile_info_wrapper">
      <div className="profile_info">
        <StatusBlock
          status={userData.aboutMe}
          editMode={editMode}
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
