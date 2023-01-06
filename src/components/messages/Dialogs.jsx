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
      <Messages currentDialog={currentDialog}>
        <CreateMessage sendMessage={sendMessage} />
      </Messages>
    </div>
  );
};
