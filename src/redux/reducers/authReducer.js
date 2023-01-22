const SET_AUTH = 'SET_AUTH'
const defaultState = {
	messages: [],
	data: {
		id: undefined,
		email: undefined,
		login: undefined,
	},
	isAuth: false,
}
const setAuthData = (state, param) => {
	return {
		...state,
		data: { ...param },
		isAuth: true,
	}
}

export const authReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_AUTH:
			return setAuthData(state, action.param);
		default:
			return state;
	}
}
export const setAuthDataActionCreator = (param) => ({
	type: SET_AUTH,
	param
})