import { requests } from "../../api/requestAPI";
import { stopSubmit } from "redux-form";

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

export const authUser = () => async dispatch => {
	const response = await requests.auth();
	dispatch(setIsResponseActionCreator(true));
	if (response.resultCode) {
		window.history.pushState(null, "", "/auth");
		return;
	}
	dispatch(setAuthDataActionCreator(response.data));
}
export const userSignIn = (param) => async dispatch => {
	const response = await requests.signIn({ ...param });
	if (response.resultCode) {
		const message = response.messages.length ?
			response.messages.join(', ') :
			'Some Error';
		return dispatch(stopSubmit('signIn', { _error: message }))
	}
	dispatch(setAuthDataActionCreator(response.data))
	dispatch(authUser())

}

export const userSignOut = param => async dispatch => {
	const response = await requests.signOut(param);
	if (!response.resultCode) {
		return dispatch(setAuthDataActionCreator(response.data));
	};
}

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
