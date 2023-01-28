const SET_AUTH = 'SET_AUTH';
const SET_IS_RESPONSE = 'SET-IS-RESPONSE';
const defaultState = {
	messages: [],
	data: {
		id: undefined,
		email: undefined,
		login: undefined,
	},
	isAuth: false,
	isResponse: false,
	APIKey: '8031c677-4f57-4285-9bff-140b1bc864a1',
}
const setAuthData = (state, param) => {
	return {
		...state,
		data: { ...param },
		isAuth: true,
	}
}
const setIsResponse = (state) => {
	return {
		...state,
		isResponse: true,
	}
}

export const authReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_AUTH:
			return setAuthData(state, action.param);
		case SET_IS_RESPONSE:
			return setIsResponse(state);
		default:
			return state;
	}
}
export const setAuthDataActionCreator = (param) => ({
	type: SET_AUTH,
	param
})
export const setIsResponseActionCreator = () => ({
	type: SET_IS_RESPONSE,
})