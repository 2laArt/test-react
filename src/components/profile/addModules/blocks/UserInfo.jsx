const UserInfo = ({ userData }) => {
  return (
    <section className="profile_info profile_section">
      <div className="avatar">
        <img src={userData.userAvatar} alt="Avatar"></img>
      </div>
      <div className="info">
        <div className="item">Name: {userData.userName}</div>
        <div className="item">City: {userData.userCity}</div>
        <div className="item">Education: {userData.userEducation}</div>
        <div className="item">
          WebSite:{" "}
          <a
            href={userData.userWebsite.url}
            style={{ textDecoration: "underline" }}
          >
            {userData.userWebsite.name}
          </a>
        </div>
      </div>
    </section>
  );
};
export default UserInfo;
