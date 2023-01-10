const UPDATE_INPUT_POST = 'UPDATE-INPUT-POST';
const CREATE_NEW_POST = 'CREATE-NEW-POST';


const createNewPost = (state) => {
	const content = state.newPostText.split(/\n/g);
	const title = content[0];
	const text = content.slice(1).join('<br>');
	const post = {
		id: state.posts.length + 1,
		title: title,
		text: text,
		img: "https://avatars.mds.yandex.net/i?id=16140a7d34dfbc85644112803e4463ac_sr-7012335-images-thumbs&n=13",
		likes: 0,
	};
	state.posts.unshift(post);
	state.newPostText = '';
	return state;
}
const updateInputPost = (state, value) => {
	state.newPostText = value;
	return state;
}
export const profileReducer = (state, action) => {
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