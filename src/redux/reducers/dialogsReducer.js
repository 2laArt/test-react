const SHOW_DIALOG = 'SHOW-DIALOG';
const SEND_MESSAGE = 'SEND-MESSAGE';

const defaultState = {
	messages: [
		[
			{
				id: 1,
				text: "Hello."
			},
			{
				id: 2,
				text: "How do you doing."
			},
			{
				id: 1,
				text: "Do you want to go with me."
			},
			{
				id: 1,
				text: "I am sure of it."
			},
		],
		[
			{
				id: 3,
				text: "Hi"
			},
			{
				id: 3,
				text: "Nice to meet you."
			},
			{
				id: 1,
				text: "Hello."
			},
			{
				id: 3,
				text: "You need to learn English more intensively."
			},
			{
				id: 3,
				text: "Bay"
			},
		],
		[
			{
				id: 1,
				text: "Eee."
			}, {
				id: 4,
				text: "What is sup man."
			}, {
				id: 1,
				text: "Let's go !!!!!!."
			}, {
				id: 4,
				text: "yes"
			},
		],
	],
	dialogs: [
		{
			id: 1,
			img: "https://avatars.mds.yandex.net/i?id=8c488830373f58f85a17abf9e2677c70-4231037-images-thumbs&n=13",
			name: "Anna Goodman",
		},
		{
			id: 2,
			img: "https://avatars.mds.yandex.net/i?id=956b7362cef902d3517011d83622a08a_sr-6356719-images-thumbs&n=13",
			name: "Ivan Ivanov",
		},
		{
			id: 3,
			img: "https://avatars.mds.yandex.net/i?id=959634e827f25855c980de6b855b5022_sr-3480301-images-thumbs&n=13",
			name: "Lisa Pop",
		},
	],
	_selectedDialog: [],
	getSelectedDialog() { return this._selectedDialog },
	setSelectedDialog(i) { this._selectedDialog = this.messages[i] },
	selectedDialogIndex: undefined,
}

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

export const dialogsReducer = (state = defaultState, action) => {
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
