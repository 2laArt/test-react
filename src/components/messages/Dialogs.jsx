import { SideBarDl } from "./blocks/SideBarDl";
import { Messages } from "./blocks/Messages";
import { CreateMessage } from "./blocks/CreateMessage";
export const Dialogs = ({ dialogs, myId, messages, sendMessage }) => {
  return (
    <div className="dialogs">
      <SideBarDl dialogs={dialogs} />
      <div
        style={
          {
            // display: selectedDialog?.length ? "block" : "none",
          }
        }
      >
        <Messages messages={messages} myId={myId}>
          <CreateMessage sendMessage={sendMessage} />
        </Messages>
      </div>
    </div>
  );
};
