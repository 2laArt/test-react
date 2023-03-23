import { requests } from "../../api/requestAPI";
// import { addById } from "../../utilities/mapping/mapping";

const SET_MESSAGES = 'SET-MESSAGES';
const SET_DIALOGS = 'SET-DIALOGS';
const IS_REFRESH = 'IS-REFRESH';

const defaultState = {
	dialogs: [],
	messages: [],
	isRefresh: true,
}


export const sendMessage = param => async dispatch => {
	const data = { id: param.id, msg: { body: param.text } }
	const result = await requests.sendMessage(data);
	console.log(result)
	getUserDialog(param.id)(dispatch)
}
const setDialogs = (state, param) => {
	return {
		...state,
		dialogs: param
	}
}
const setRefresh = (state, param) => ({ ...state, isRefresh: param })
const setMessages = (state, param) => ({ ...state, messages: param })

const setRefreshActionCreator = (param) => ({
	type: IS_REFRESH,
	param
})
const setDialogsActionCreator = (param) => ({
	type: SET_DIALOGS,
	param
})
export const setMsgActionCreator = (param) => ({
	type: SET_MESSAGES,
	param
})


export const getDialogs = () => async dispatch => {
	const dialogs = await requests.getAllDialogs();
	dispatch(setDialogsActionCreator(dialogs))
	dispatch(setRefreshActionCreator(false))
	console.log(dialogs)
}
export const getUserDialog = (id) => async dispatch => {
	const result = await requests.getUserDialog(id)
	dispatch(setMsgActionCreator(result.items))
}
export const startDialog = (id) => async dispatch => {
	if (!id) return;
	const result = await requests.startDialog(id);
	dispatch(setRefreshActionCreator(true))
	console.log(result)
	return result.resultCode
}

export const dialogsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_DIALOGS:
			return setDialogs(state, action.param);
		case IS_REFRESH:
			return setRefresh(state, action.param);
		case SET_MESSAGES:
			return setMessages(state, action.param);


		default:
			return state;
	}
}


