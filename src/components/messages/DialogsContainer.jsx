import { connect } from "react-redux";
import { compose } from "redux";
import {
  getDialogs,
  sendMessage,
  getUserDialog,
} from "../../redux/reducers/dialogsReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { Dialogs } from "./Dialogs";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const DialogsData = (props) => {
  const { getDialogs, sendMessage: sendMsg, getUserDialog } = props;
  const { userId } = useParams();
  const sendMessage = (text) => sendMsg({ id: userId, text });
  useEffect(() => {
    getDialogs();
    getUserDialog(userId);
  }, [getDialogs, userId, getUserDialog]);
  return <Dialogs {...props} userId={userId} sendMessage={sendMessage} />;
};

const mapStateToProps = (state) => ({
  dialogs: state.dialogsData.dialogs,
  messages: state.dialogsData.messages,
  myId: state.auth.data.id,
});
const mapDispatchToProps = {
  sendMessage: sendMessage,
  getDialogs: getDialogs,
  getUserDialog: getUserDialog,
};

export const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(DialogsData);
