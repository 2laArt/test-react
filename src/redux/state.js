import { profileReducer } from "./reducers/profileReducer";
import { dialogsReducer } from "./reducers/dialogsReducer";

const state = {
	dialogsData: {
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
	},
	postData: {
		posts: [
			{
				id: 1,
				img: "https://avatars.mds.yandex.net/i?id=c375e9b50892ee18c63d9bdb1022efcd-4080717-images-thumbs&n=13",
				title: "I like swimming",
				text: "English texts for beginners to practice reading and comprehension online and for free. Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order. The texts below are designed to help you develop while giving you an instant evaluation of your progress.",
				likes: 12,
			},
			{
				id: 2,
				img: "https://static.pixel.ee/avatars/3249_s.jpg",
				title: "My advice",
				text: "Prepared by experienced English teachers, the texts, articles and conversations are brief and appropriate to your level of proficiency. Take the multiple-choice quiz following each text, and you'll get the results immediately.",
				likes: 550,
			},
		],
		newPostText: '',
	},
	userProfile: {
		introImg:
			"https://w-dog.ru/wallpapers/2/19/422459918751823/prekrasnyj-zakaz-na-more-sredi-skal.jpg",

		userData: {
			userAvatar:
				"https://rabotaip.ru/wp-content/uploads/2021/05/2801748531-150x150.jpg",
			userName: "Ivan",
			userCity: "Moscow",
			userEducation: "Intermediate",
			userWebsite: {
				url: 'https://google.com',
				name: "https://ivan-mocsow.com"
			}
		},
	},

}
const store = {
	state,
	dispatch(action) {
		this.state.dialogsData = dialogsReducer(this.state.dialogsData, action)
		this.state.postData = profileReducer(this.state.postData, action);
		this._rerenderEntireTree(this);
	},
	_rerenderEntireTree() { },
	update(observer) {
		store._rerenderEntireTree = observer;
		store._rerenderEntireTree(store);
	},
}

export const update = store.update.bind(store);
