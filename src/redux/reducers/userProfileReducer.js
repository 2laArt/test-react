import { requests } from "../../api/requestAPI";

const SET_PROFILE = 'SET-PROFILE';

const defaultState = {
	introImg:
		"https://w-dog.ru/wallpapers/2/19/422459918751823/prekrasnyj-zakaz-na-more-sredi-skal.jpg",
	userData: {},
}

const setUserData = (state, param) => {
	return {
		...state,
		userData: param,
	}
}

const setUserDataActionCreator = (param) => ({
	type: SET_PROFILE,
	param
})

export const setProfile = id =>
	dispatch =>
		requests
			.getProfile(id)
			.then((data) =>
				dispatch(setUserDataActionCreator(data)));

export const userProfileReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_PROFILE:
			return setUserData(state, action.param);
		default:
			return state;
	}
}
