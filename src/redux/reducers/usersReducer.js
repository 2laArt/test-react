import { requests } from "../../api/requestAPI";

const CHANGE_FOLLOW = 'CHANGE-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IN_PROGRESS = 'TOGGLE-IN-PROGRESS';

const defaultState = {
	users: [],
	totalCountUsers: 1,
	pageUsersCount: 5,
	currentPage: 1,
	inProgress: [],
	getUsersPage() {
		return this.users.slice(
			this.startedDot(), this.endDot()
		)
	},
	startedDot() {
		return (this.currentPage - 1) * this.pageUsersCount
	},
	endDot() {
		const intendedEnd = (this.currentPage - 1) * this.pageUsersCount + this.pageUsersCount;
		return intendedEnd >= this.users.length ?
			this.users.length : intendedEnd;
	},
	getNumbersOfPages() {
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

const setFollowToState = (state, param) => {
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
const toggleInProgress = (state, param) => {
	const isHave = state.inProgress.some(id => id === param);
	return {
		...state,
		inProgress: isHave ?
			state.inProgress.filter(id => id !== param) :
			[...state.inProgress, param]
	}
}

const setUsersActionCreator = (param) => ({
	type: SET_USERS,
	param
})
const changeFollowActionCreator = (param) => ({
	type: CHANGE_FOLLOW,
	param: param,
})
const toggleInProgressActionCreator = (param) => ({
	type: TOGGLE_IN_PROGRESS,
	param
})
export const setCurrentPageActionCreator = (param) => ({
	type: SET_CURRENT_PAGE,
	param
})

export const getUsers = () =>
	dispatch =>
		requests
			.getUsers()
			.then((response) =>
				dispatch(setUsersActionCreator({
					users: response.items,
					totalCount: response.totalCount,
				}))
			);

export const changeFollow = (users, id) =>
	dispatch => {
		const user = users.filter((u) => u.id === id)[0].followed;
		dispatch(toggleInProgressActionCreator(id));
		const result = user ? requests.unFollowUser(id) : requests.followUser(id);
		result.then((resultCode) => {
			if (!resultCode) {
				dispatch(changeFollowActionCreator(id));
				dispatch(toggleInProgressActionCreator(id));
			}
		});
	}

export const usersReducer = (state = defaultState, action) => {
	switch (action.type) {
		case CHANGE_FOLLOW:
			return setFollowToState(state, action.param);
		case SET_USERS:
			return setUsers(state, action.param)
		case SET_CURRENT_PAGE:
			return setCurrentPage(state, action.param);
		case TOGGLE_IN_PROGRESS:
			return toggleInProgress(state, action.param)
		default:
			return state;
	}
}