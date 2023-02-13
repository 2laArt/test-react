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
const setAuthData = (state, param) => ({
	...state,
	data: { ...param },
	isAuth: param.id,
})
const setIsResponse = (state, param) => {
	return {
		...state,
		isResponse: param,
	}
}

const setAuthDataActionCreator = (param) => ({
	type: SET_AUTH,
	param
})
const setIsResponseActionCreator = (param) => ({
	type: SET_IS_RESPONSE,
	param
})

export const authUser = () =>
	dispatch =>
		requests
			.auth()
			.then((response) => {
				setTimeout(() => dispatch(setIsResponseActionCreator(true)), 200)
				if (response.resultCode) {
					window.history.pushState(null, "", "/auth");
					return;
				}
				dispatch(setAuthDataActionCreator(response.data));
			})

export const userSignIn = (param) =>
	dispatch => {
		dispatch(setIsResponseActionCreator(false))
		requests
			.signIn(param)
			.then((response) => {
				dispatch(setIsResponseActionCreator(true))
				if (response.resultCode) return;
				dispatch(setAuthDataActionCreator(response.data))
				dispatch(authUser())
			})
	}

export const userSignOut = (param) =>
	dispatch =>
		requests
			.signOut(param)
			.then((response) => {
				if (response.resultCode) {
					console.log(response)
					return;
				};
				dispatch(setAuthDataActionCreator(response.data));
			})

export const authReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_AUTH:
			return setAuthData(state, action.param);
		case SET_IS_RESPONSE:
			return setIsResponse(state, action.param);
		default:
			return state;
	}
}