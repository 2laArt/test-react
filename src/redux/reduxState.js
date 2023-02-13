import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from "redux-thunk";
import { authReducer } from './reducers/authReducer';

import { dialogsReducer } from "./reducers/dialogsReducer";
import { postsReducer } from "./reducers/postsReducer";
import { userProfileReducer } from "./reducers/userProfileReducer";
import { usersReducer } from './reducers/usersReducer';
import { reducer as formReducer } from 'redux-form'

const reducersBatch = combineReducers({
	auth: authReducer,
	dialogsData: dialogsReducer,
	postData: postsReducer,
	userProfile: userProfileReducer,
	usersData: usersReducer,
	form: formReducer,
})

export const store = legacy_createStore(reducersBatch, applyMiddleware(thunkMiddleware));

window.state = store