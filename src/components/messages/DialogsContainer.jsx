import { connect } from "react-redux";
import {
  sendMessageActionCreator,
  showDialogActionCreator,
  newValueOfMessageActionCreator,
} from "../../redux/reducers/dialogsReducer";
import { useState } from "react";
import { Dialogs } from "./Dialogs";

export const DialogsContainer1 = ({ dialogs, selectedDialog, dispatch }) => {
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
const mapStateToProps = (state) => ({
  dialogs: state.dialogsData.dialogs,
  selectedDialog: state.dialogsData.getSelectedDialog(),
  messageValue: state.dialogsData.newMessage,
});
const mapDispatchToProps = (dispatch) => ({
  chooseMessageValue: (text) => dispatch(newValueOfMessageActionCreator(text)),
  sendMessage: () => dispatch(sendMessageActionCreator()),

  chooseDialog: (index) => dispatch(showDialogActionCreator(index)),
});

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);
