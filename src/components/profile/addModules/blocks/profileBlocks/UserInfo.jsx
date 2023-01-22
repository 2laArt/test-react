export const UserInfo = ({ userData }) => {
  return (
    <div className="profile_info_wrapper">
      <div className="profile_info">
        <div className="item">
          <span className="bold_color"> Name: </span>
          {userData.fullName}
        </div>
        <div className="item">
          <span className="bold_color"> Status: </span>
          {userData.aboutMe}
        </div>
        <div className="item">
          <span className="bold_color"> Job: </span>
          {userData.lookingForAJobDescription}
        </div>
      </div>
    </div>
  );
};
