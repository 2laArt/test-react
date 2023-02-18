import { dialogsReducer, sendMessageActionCreator, showDialogActionCreator } from "../dialogsReducer";

const defaultState = {
	messages: [
		[
			{
				id: 1,
				text: "Hello."
			},

		],
		[
			{
				id: 3,
				text: "Hi"
			},

		],
		[
			{
				id: 1,
				text: "Eee."
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
	selectedDialogIndex: 1,
}

test('selected dialog index should be Number', () => {
	const num = 2;
	const action = showDialogActionCreator(num);
	const data = dialogsReducer(defaultState, action);
	expect(data.selectedDialogIndex).toBe(num - 1);
});

test(
	'the length of the second message should increase', () => {
		const action = sendMessageActionCreator('hello');
		const data = dialogsReducer(defaultState, action);
		expect(data.messages[data.selectedDialogIndex].length).toBe(2);
	});