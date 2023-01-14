const UPDATE_INPUT_POST = 'UPDATE-INPUT-POST';
const CREATE_NEW_POST = 'CREATE-NEW-POST';


const defaultState = {
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
}

const createNewPost = (state) => {
	const content = state.newPostText.split(/\n/g);
	const title = content[0];
	const text = content.slice(1).join(' ');
	const post = {
		id: state.posts.length + 1,
		title: title,
		text: text,
		img: "https://avatars.mds.yandex.net/i?id=16140a7d34dfbc85644112803e4463ac_sr-7012335-images-thumbs&n=13",
		likes: 0,
	};
	return {
		...state,
		posts: [
			post,
			...state.posts,
		],
		newPostText: '',
	}
}
const updateInputPost = (state, value) => {
	return {
		...state,
		newPostText: value
	}
}
export const postsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case CREATE_NEW_POST:
			return createNewPost(state);
		case UPDATE_INPUT_POST:
			return updateInputPost(state, action.param);
		default:
			return state;
	}
}
export const updateInputPostActionCreator = (param) => ({
	type: UPDATE_INPUT_POST,
	param
})
export const createNewPostActionCreator = () => ({
	type: CREATE_NEW_POST,
})