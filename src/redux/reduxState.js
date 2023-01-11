import { legacy_createStore, combineReducers } from 'redux';

import { dialogsReducer } from "./reducers/dialogsReducer";
import { postsReducer } from "./reducers/postsReducer";
import { userProfileReducer } from "./reducers/userProfileReducer";

const reducersBatch = combineReducers({
	dialogsData: dialogsReducer,
	postData: postsReducer,
	userProfile: userProfileReducer
})

export const store = legacy_createStore(reducersBatch);

