import "../../assets/styles/addStyles/Dialogs.css";
import { SideBarDl } from "./blocks/SideBarDl";
import { Messages } from "./blocks/Messages";
import { CreateMessage } from "./blocks/CreateMessage";
export const Dialogs = ({ dialogs, getSelectedDialog, dispatch }) => {
  return (
    <div className="dialogs">
      <SideBarDl dialogs={dialogs} dispatch={dispatch} />
      <div
        style={{
          display: getSelectedDialog().length === 0 ? "none" : "block",
        }}
      >
        <Messages getSelectedDialog={getSelectedDialog}>
          <CreateMessage dispatch={dispatch} />
        </Messages>
      </div>
    </div>
  );
};
