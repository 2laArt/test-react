const UserInfo = ({ userData }) => {
  const avatar =
    "https://rabotaip.ru/wp-content/uploads/2021/05/2801748531-150x150.jpg";

  const contacts = Object.entries(userData.contacts).filter((i) => i[1]);
  return (
    <section className="profile_section">
      <div className="profile_info_flex">
        <div className="avatar">
          <img src={userData.photos.large || avatar} alt="Avatar"></img>
        </div>
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
          <div className="profile_contacts">
            {contacts.map((item, i) => (
              <div className="item" key={i}>
                <span className="bold_color">{item[0] + " "}</span>
                <a href={`${item[1]}`} style={{ textDecoration: "underline" }}>
                  {item[1]}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default UserInfo;
