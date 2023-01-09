import { Dialog } from "./Dialog";

export const SideBarDl = ({ dialogs, dispatch }) => {
  return (
    <div className="sideBarDl">
      {dialogs.map((el) => {
        return <Dialog dialog={el} dispatch={dispatch} key={el.id} />;
      })}
    </div>
  );
};
