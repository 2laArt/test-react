import { requests } from "../../api/requestAPI";

const SET_PROFILE = 'SET-PROFILE';
const EDIT_MODE = 'EDIT-MODE';
const CHANGE_STATUS = 'CHANGE-STATUS';
const LOAD_STATUS = 'LOAD-STATUS';

const defaultState = {
	introImg:
		"https://about-planet.ru/images/evropa/priroda/sredizemnoe_more/otdyx_sredizemnoe_more.jpeg",
	status: '',
	userData: {},
	editMode: false,
	isLoadStatus: true,
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
	status: param ?? '',
	isLoadStatus: true,
})
const loadStatusFalse = (state) => ({
	...state,
	isLoadStatus: false
})
const setUserDataActionCreator = (param) => ({
	type: SET_PROFILE,
	param
})
const changeStatusActionCreator = (param) => ({
	type: CHANGE_STATUS,
	param
})
export const loadStatusActionCreator = () => ({
	type: LOAD_STATUS,
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
export const getUserStatus = id =>
	dispatch =>
		requests
			.getStatus(id)
			.then(data =>
				dispatch(changeStatusActionCreator(data))
			)
export const setUserStatus = (status) =>
	dispatch =>
		requests
			.changeStatus(status)
			.then((data) =>
				!data.resultCode &&
				dispatch(changeStatusActionCreator(status))
			)
			.catch(e => e)


export const userProfileReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_PROFILE:
			return setUserData(state, action.param);
		case EDIT_MODE:
			return EditModeSwitch(state, action.param);
		case CHANGE_STATUS:
			return changeStatus(state, action.param);
		case LOAD_STATUS:
			return loadStatusFalse(state);
		default:
			return state;
	}
}
