import { listIcons } from "../../../../icons/ListSocialIcons";
export const UserContacts = ({ contacts }) => {
  return (
    <div className="profile_contacts user_created">
      {contacts.map((item, i) => {
        const Icon = listIcons[item[0]];
        return (
          <div className="profile_contacts_item" key={i}>
            <span className="bold_color">
              <Icon />
            </span>
            <a href={`${item[1]}`} style={{ textDecoration: "underline" }}>
              {item[1]}
            </a>
          </div>
        );
      })}
    </div>
  );
};
