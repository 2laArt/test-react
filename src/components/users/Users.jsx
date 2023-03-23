import { useState } from "react";
import { UserCard } from "./addBlock/UserCard";

export const Users = (props) => {
  const [activeId, setActiveId] = useState(undefined);
  const toggleActiveId = (id) => {
    activeId === id ? setActiveId(undefined) : setActiveId(id);
  };
  const setCurrentPage = (page) => {
    props.currentPage !== page && props.setCurrentPage(page);
  };
  return (
    <div className="users">
      <div className="pagination">
        {props.numberOfPage.map((page) => (
          <button
            className="button"
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
            activeId={activeId}
            setActiveId={toggleActiveId}
            inProgress={props.inProgress}
            user={user}
            changeFollow={props.changeFollow}
            startDialog={props.startDialog}
            key={user.id}
          />
        ))}
      </div>
    </div>
  );
};
