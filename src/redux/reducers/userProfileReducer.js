import { requests } from "../../api/requestAPI";

const SET_PROFILE = 'SET-PROFILE';
const EDIT_MODE = 'EDIT-MODE';
const CHANGE_STATUS = 'CHANGE-STATUS';

const defaultState = {
	introImg:
		"https://w-dog.ru/wallpapers/2/19/422459918751823/prekrasnyj-zakaz-na-more-sredi-skal.jpg",
	userData: {},
	editMode: false,
}

const setUserData = (state, param) => ({
	...state,
	userData: param,
})
const EditModeSwitch = (state, param) => ({
	...state,
	editMode: (state.userData.userId === param.myId) && param.isEdit
})
const changeStatus = (state, param) => ({
	...state,
	userData: {
		...state.userData,
		aboutMe: param
	}

})

const setUserDataActionCreator = (param) => ({
	type: SET_PROFILE,
	param
})
const changeStatusActionCreator = (param) => ({
	type: CHANGE_STATUS,
	param
})
export const editModeSwitchActionCreator = (param) => ({
	type: EDIT_MODE,
	param
})
export const setProfile = id =>
	dispatch =>
		requests
			.getProfile(id)
			.then((data) =>
				dispatch(setUserDataActionCreator(data)));

export const setUserStatus = (status) =>
	dispatch =>
		requests
			.changeStatus(status)
			.then((data) => {
				console.log(data)
				return dispatch(changeStatusActionCreator(status))
			})
			.catch(e => e)


export const userProfileReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_PROFILE:
			return setUserData(state, action.param);
		case EDIT_MODE:
			return EditModeSwitch(state, action.param);
		case CHANGE_STATUS:
			return changeStatus(state, action.param);
		default:
			return state;
	}
}
