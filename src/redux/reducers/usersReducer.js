const ADD_NEW_FRIEND = 'ADD-NEW-FRIEND';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';

const defaultState = {
	users: [
		{
			id: 1,
			followed: false,
			name: 'Ivan',
			status: 'NIce to meet you',
			photos: {
				small: 'https://i.vippng.com/png/small/47-475879_happy-men-transparent-background-png-man-with-smartphone.png',
				large: 'https://i.vippng.com/png/small/47-475879_happy-men-transparent-background-png-man-with-smartphone.png',
			},
		},
		{
			id: 2,
			followed: false,
			name: 'Jessica',
			status: 'I Like America',
			photos: {
				small: null,
				large: null,
			},
		},
		{
			id: 3,
			followed: false,
			name: 'Join',
			status: 'London is the capital of Britain',
			photos: {
				small: null,
				large: null,
			},
		},
		{
			id: 4,
			followed: true,
			name: 'Anna',
			status: 'O my God',
			photos: {
				small: 'http://estateplanlawblog.com/wp-content/uploads/considering-150x150.jpeg',
				large: 'http://estateplanlawblog.com/wp-content/uploads/considering-150x150.jpeg',
			},
		}
	],
	getUsers() {
		return this.users.slice(
			this.getStartedDot(), this.getEndDot()
		)
	},
	getStartedDot() {
		return this.currentPage * this.pageUsersCount
	},
	getEndDot() {
		const intendedEnd = this.currentPage * this.pageUsersCount + this.pageUsersCount;
		return intendedEnd >= this.users.length ?
			this.users.length : intendedEnd;
	},
	getNumberOfPage() {
		const someVar = 2;
		const start = 1;
		const last = Math.floor(this.users.length / this.pageUsersCount);
		const previous = this.currentPage > someVar ? this.currentPage - 1 : undefined;
		const next = this.currentPage < last - someVar ? this.currentPage + 1 : undefined;
		return ([...new Set([
			start,
			previous,
			this.currentPage,
			next,
			last
		])].filter(i => i))
	},
	totalCountUsers: 1,
	pageUsersCount: 5,
	currentPage: 1,

}

const addNewFriend = (state, param) => {
	return {
		...state,
		users: state.users.map(
			user => (user.id === param) ?
				{
					...user,
					followed: !user.followed
				} :
				user
		)
	}
};
const setUsers = (state, param) => {
	return {
		...state,
		users: [
			...state.users,
			...param.users.filter(i => {
				return !state.users.some(k => {
					return k.id === i.id
				})
			})
		],
		totalCountUsers: param.totalCount,
	}
}
const setCurrentPage = (state, param) => {
	return {
		...state,
		currentPage: param,
	}
}
export const usersReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_NEW_FRIEND:
			return addNewFriend(state, action.param);
		case SET_USERS:
			return setUsers(state, action.param)
		case SET_CURRENT_PAGE:
			return setCurrentPage(state, action.param)
		default:
			return state;
	}
}

export const addNewFriendActionCreator = (param) => ({
	type: ADD_NEW_FRIEND,
	param: param,
})
export const setUsersActionCreator = (param) => ({
	type: SET_USERS,
	param
})
export const setCurrentPageActionCreator = (param) => ({
	type: SET_CURRENT_PAGE,
	param
})