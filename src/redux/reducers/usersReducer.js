const ADD_NEW_FRIEND = 'ADD-NEW-FRIEND';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';

const defaultState = {
	users: [],
	totalCountUsers: 1,
	pageUsersCount: 5,
	currentPage: 1,
	getUsers() {
		return this.users.slice(
			this.getStartedDot(), this.getEndDot()
		)
	},
	getStartedDot() {
		return (this.currentPage - 1) * this.pageUsersCount
	},
	getEndDot() {
		const intendedEnd = (this.currentPage - 1) * this.pageUsersCount + this.pageUsersCount;
		return intendedEnd >= this.users.length ?
			this.users.length : intendedEnd;
	},
	getNumberOfPage() {
		const someVar = 2;
		const start = 1;
		const last = Math.floor(this.users.length / this.pageUsersCount);
		const current = this.currentPage;
		const previous = this.currentPage > someVar ? current - 1 : undefined;
		const next = this.currentPage < last - 1 ? current + 1 : undefined;
		return ([...new Set([
			start,
			previous,
			current,
			next,
			last
		])].filter(i => i))
	},

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
