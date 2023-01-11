const ACTION_NAME = 'ACTION-NAME'
const defaultState = {
	introImg:
		"https://w-dog.ru/wallpapers/2/19/422459918751823/prekrasnyj-zakaz-na-more-sredi-skal.jpg",

	userData: {
		userAvatar:
			"https://rabotaip.ru/wp-content/uploads/2021/05/2801748531-150x150.jpg",
		userName: "Ivan",
		userCity: "Moscow",
		userEducation: "Intermediate",
		userWebsite: {
			url: 'https://google.com',
			name: "https://ivan-mocsow.com"
		}
	},
}
const actionFunction = (state, param) => {
	//any work
	return state
}

export const userProfileReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ACTION_NAME:
			return actionFunction(state, action.param);
		default:
			return state;
	}
}
export const anyActionCreator = (param) => ({
	type: ACTION_NAME,
	param
})