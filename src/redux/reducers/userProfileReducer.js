const SET_PROFILE = 'SET-PROFILE'
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

export const userProfileReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_PROFILE:
			return setUserData(state, action.param);
		default:
			return state;
	}
}
export const setUserDataActionCreator = (param) => ({
	type: SET_PROFILE,
	param
})