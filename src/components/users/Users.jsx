import "../../assets/styles/addStyles/UsersCard.css";
import { UserCard } from "./addBlock/UserCard";

export const Users = (props) => {
  const setCurrentPage = (page) => {
    props.currentPage !== page && props.setCurrentPage(page);
  };
  return (
    <div className="users">
      <div className="pagination">
        {props.numberOfPage.map((page) => (
          <button
            style={{
              color: props.currentPage === page ? " red" : "inherit",
            }}
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page}
          </button>
        ))}
      </div>

      <div className="users_section">
        {props.users.map((user) => (
          <UserCard
            isAuth={props.isAuth}
            inProgress={props.inProgress}
            user={user}
            changeFollow={props.changeFollow}
            key={user.id}
          />
        ))}
      </div>
    </div>
  );
};
