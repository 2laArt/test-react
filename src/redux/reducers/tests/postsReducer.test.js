import { createNewPostActionCreator, postsReducer } from "../postsReducer";

test('post length should increase', () => {
	const action = createNewPostActionCreator('hello');
	const newData = postsReducer(undefined, action);
	expect(newData.posts.length).toBe(newData.posts.length++);
});