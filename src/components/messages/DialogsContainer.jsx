import {
  sendMessageActionCreator,
  showDialogActionCreator,
} from "../../redux/reducers/dialogsReducer";
import { useState } from "react";
import { Dialogs } from "./Dialogs";
export const DialogsContainer = ({ dialogs, selectedDialog, dispatch }) => {
  const [messageValue, setMessageValue] = useState("");

  const chooseMessageValue = (event) =>
    setMessageValue(() => event.target.value);

  const sendMessage = () => {
    dispatch(sendMessageActionCreator(messageValue));
    setMessageValue(() => "");
  };

  const chooseDialog = (index) => {
    dispatch(showDialogActionCreator(index));
  };

  return (
    <Dialogs
      dialogs={dialogs}
      selectedDialog={selectedDialog}
      messageValue={messageValue}
      chooseDialog={chooseDialog}
      chooseMessageValue={chooseMessageValue}
      sendMessage={sendMessage}
    />
  );
};
