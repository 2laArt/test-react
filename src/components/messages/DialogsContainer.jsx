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
