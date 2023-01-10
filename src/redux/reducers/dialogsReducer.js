const SHOW_DIALOG = 'SHOW-DIALOG';
const SEND_MESSAGE = 'SEND-MESSAGE';


const showDialog = (state, param) => {
	state.selectedDialogIndex = param - 1
	state.setSelectedDialog(state.selectedDialogIndex);
	return state;
}

const sendMessage = (state, param) => {
	if (!(
		state.selectedDialogIndex >= 0 &&
		state.selectedDialogIndex <= state.messages.length - 1
	)) {
		alert('dialog not selected');
		return
	}
	state.messages[state.selectedDialogIndex].push(
		{
			id: 1,
			text: param
		}
	)
	return state;
}

export const dialogsReducer = (state, action) => {
	switch (action.type) {
		case SHOW_DIALOG:
			return showDialog(state, action.param);
		case SEND_MESSAGE:
			return sendMessage(state, action.param);
		default:
			return state;
	}
}

export const showDialogActionCreator = (param) => ({
	type: SHOW_DIALOG,
	param
})
export const sendMessageActionCreator = (param) => ({
	type: SEND_MESSAGE,
	param
})
