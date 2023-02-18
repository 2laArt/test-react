export const states = {
	users: (state) => state.usersData.users,
	numberOfPage: (state) => state.usersData.getNumbersOfPages(),
	currentPage: (state) => state.usersData.currentPage,
	inProgress: (state) => state.usersData.inProgress,
	isAuth: (state) => state.auth.isAuth,
}