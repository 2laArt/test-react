import { legacy_createStore, combineReducers } from 'redux';
import { authReducer } from './reducers/authReducer';

import { dialogsReducer } from "./reducers/dialogsReducer";
import { postsReducer } from "./reducers/postsReducer";
import { userProfileReducer } from "./reducers/userProfileReducer";
import { usersReducer } from './reducers/usersReducer';

const reducersBatch = combineReducers({
	auth: authReducer,
	dialogsData: dialogsReducer,
	postData: postsReducer,
	userProfile: userProfileReducer,
	usersData: usersReducer,
})

export const store = legacy_createStore(reducersBatch);

