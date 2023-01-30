import { requests } from "../../api/requestAPI";

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

const setAuthDataActionCreator = (param) => ({
	type: SET_AUTH,
	param
})
const setIsResponseActionCreator = () => ({
	type: SET_IS_RESPONSE,
})

export const authUser = () =>
	dispatch =>
		requests
			.auth()
			.then((response) => {
				if (response.resultCode) {
					window.history.pushState(null, "", "/auth");
					return;
				}
				dispatch(setAuthDataActionCreator(response.data));
			})
			.finally(setTimeout(() => dispatch(setIsResponseActionCreator()), 200));

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