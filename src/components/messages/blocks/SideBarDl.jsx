import { Dialog } from "./Dialog";

export const SideBarDl = ({ dialogs }) => {
  return (
    <div className="sideBarDl">
      {dialogs.map((el) => {
        return <Dialog dialog={el} key={el.id} />;
      })}
    </div>
  );
};
