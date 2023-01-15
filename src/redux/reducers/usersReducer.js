const ADD_NEW_FRIEND = 'ADD-NEW-FRIEND';

const defaultState = {
	users: [
		{
			id: 1,
			avatar: 'https://i.vippng.com/png/small/47-475879_happy-men-transparent-background-png-man-with-smartphone.png',
			name: 'Ivan',
			city: 'New York',
			welcome: 'NIce to meet you'
		},
		{
			id: 2,
			avatar: 'https://soloists-academy.com.ua/wp-content/uploads/2020/12/377-3778780_helper4u-maid-bai-cook-chef-empty-profile-picture.jpg',
			name: 'Jessica',
			city: 'Boston',
			welcome: 'I Like America'
		},
		{
			id: 3,
			avatar: 'https://i.livelib.ru/auface/320145/o/37dd/Oleg_Sidelnikov.jpg',
			name: 'Join',
			city: 'London',
			welcome: 'London is the capital of Britain'
		},
		{
			id: 4,
			avatar: 'http://estateplanlawblog.com/wp-content/uploads/considering-150x150.jpeg',
			name: 'Anna',
			city: 'Tula',
			welcome: 'O my God'
		}
	]
}

const addNewFriend = (state, param) => {
	const index = --param;
	if (state.users[index].isFriend) return state
	const users = [...state.users]
	users[index].isFriend = true;
	return {
		...state,
		users
	}
};

export const usersReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_NEW_FRIEND:
			return addNewFriend(state, action.param);
		default:
			return state;
	}
}

export const addNewFriendActionCreator = (param) => ({
	type: ADD_NEW_FRIEND,
	param: param,
})