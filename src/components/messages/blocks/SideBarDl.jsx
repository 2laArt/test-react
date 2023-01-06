import { Dialog } from "./Dialog";

export const SideBarDl = ({ dialogs, showDialog }) => {
  return (
    <div className="sideBarDl">
      {dialogs.map((el) => {
        return <Dialog dialog={el} showDialog={showDialog} key={el.id} />;
      })}
    </div>
  );
};
