import "../../assets/styles/addStyles/Dialogs.css";
import { SideBarDl } from "./blocks/SideBarDl";
import { Messages } from "./blocks/Messages";
import { CreateMessage } from "./blocks/CreateMessage";
export const Dialogs = ({
  dialogs,
  selectedDialog,
  messageValue,
  chooseDialog,
  chooseMessageValue,
  sendMessage,
}) => {
  return (
    <div className="dialogs">
      <SideBarDl dialogs={dialogs} chooseDialog={chooseDialog} />
      <div
        style={{
          display: selectedDialog.length ? "block" : "none",
        }}
      >
        <Messages selectedDialog={selectedDialog}>
          <CreateMessage
            messageValue={messageValue}
            chooseMessageValue={chooseMessageValue}
            sendMessage={sendMessage}
          />
        </Messages>
      </div>
    </div>
  );
};
