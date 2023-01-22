export const UserContacts = ({ contacts }) => {
  return (
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
  );
};
