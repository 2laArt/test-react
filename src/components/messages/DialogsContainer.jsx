import { connect } from "react-redux";
import { compose } from "redux";
import {
  sendMessageActionCreator,
  showDialogActionCreator,
} from "../../redux/reducers/dialogsReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { Dialogs } from "./Dialogs";

const mapStateToProps = (state) => ({
  dialogs: state.dialogsData.dialogs,
  selectedDialog: state.dialogsData.getSelectedDialog(),
});
const mapDispatchToProps = {
  sendMessage: sendMessageActionCreator,
  chooseDialog: showDialogActionCreator,
};

export const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);

// export const DialogsContainer1 = ({ dialogs, selectedDialog, dispatch }) => {
//   const [messageValue, setMessageValue] = useState("");

//   const chooseMessageValue = (event) =>
//     setMessageValue(() => event.target.value);

//   const sendMessage = () => {
//     dispatch(sendMessageActionCreator(messageValue));
//     setMessageValue(() => "");
//   };

//   const chooseDialog = (index) => {
//     dispatch(showDialogActionCreator(index));
//   };

//   return (
//     <Dialogs
//       dialogs={dialogs}
//       selectedDialog={selectedDialog}
//       messageValue={messageValue}
//       chooseDialog={chooseDialog}
//       chooseMessageValue={chooseMessageValue}
//       sendMessage={sendMessage}
//     />
//   );
// };
