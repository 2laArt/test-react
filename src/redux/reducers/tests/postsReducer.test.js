import { addNewPostActionCreator, postsReducer } from "../postsReducer";


test('post length should increase', () => {
	const action = addNewPostActionCreator('hello');
	const newData = postsReducer(undefined, action);
	expect(newData.posts.length).toBe(newData.posts.length++);
});