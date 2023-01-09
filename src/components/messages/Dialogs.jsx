import "../../assets/styles/addStyles/Dialogs.css";
import { SideBarDl } from "./blocks/SideBarDl";
import { Messages } from "./blocks/Messages";
import { CreateMessage } from "./blocks/CreateMessage";
export const Dialogs = ({
  dialogs,
  currentDialog,
  showDialog,
  sendMessage,
}) => {
  return (
    <div className="dialogs">
      <SideBarDl dialogs={dialogs} showDialog={showDialog} />
      <div style={{ display: currentDialog.length === 0 ? "none" : "block" }}>
        <Messages currentDialog={currentDialog}>
          <CreateMessage sendMessage={sendMessage} />
        </Messages>
      </div>
    </div>
  );
};
