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
	getSelectedDialog() {
		return this.messages[this.selectedDialogIndex] || []
	},
	selectedDialogIndex: undefined,
}

const showDialog = (state, param) => {
	return { ...state, selectedDialogIndex: --param };
}

const sendMessage = (state, param) => {
	console.log(param)
	return {
		...state,
		messages: state.messages.map((msg, i) =>
			(i === state.selectedDialogIndex) ?
				[
					...msg,
					{
						id: 1,
						text: param
					}
				] :
				msg
		),
	}
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
