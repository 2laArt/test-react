import { requests } from "../../api/requestAPI";
import introImg from '../../assets/images/pictures/introProfile.jpg'
const SET_PROFILE = 'SET-PROFILE';
const CHANGE_STATUS = 'CHANGE-STATUS';
const LOAD_STATUS = 'LOAD-STATUS';

const defaultState = {
	introImg,
	status: '',
	userData: {},
	editMode: false,
	isLoadStatus: true,
}

const setUserData = (state, param) => ({
	...state,
	...param,
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

export const setProfile = param => async dispatch => {
	const response = await requests.getProfile(param.userId);
	if (response.resultCode) return;
	dispatch(setUserDataActionCreator({ userData: response, editMode: response.userId === param.myId }));
}
export const getUserStatus = id => async dispatch => {
	const response = await requests.getStatus(id);
	if (!response || response.resultCode) return;
	dispatch(changeStatusActionCreator(response))
}
export const setUserStatus = (status) => async dispatch => {
	const response = await requests.changeStatus(status);
	!response.resultCode && dispatch(changeStatusActionCreator(status));
}

export const changeProfileInfo = (data) => async dispatch => {
	const result = await requests.changeProfileInfo(data);
	if (result.resultCode) return false;
	return true;
}


export const userProfileReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_PROFILE:
			return setUserData(state, action.param);
		case CHANGE_STATUS:
			return changeStatus(state, action.param);
		case LOAD_STATUS:
			return loadStatusFalse(state);
		default:
			return state;
	}
}
