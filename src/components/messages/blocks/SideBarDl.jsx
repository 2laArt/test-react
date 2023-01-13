import { Dialog } from "./Dialog";

export const SideBarDl = ({ dialogs, chooseDialog }) => {
  return (
    <div className="sideBarDl">
      {dialogs.map((el) => {
        return <Dialog dialog={el} chooseDialog={chooseDialog} key={el.id} />;
      })}
    </div>
  );
};
