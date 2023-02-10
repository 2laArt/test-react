//27586
export const getUsers = {
	getUsers(count = 10, page = 1) {
		return this.instance.get(`users?count=${count}&page=${page}`)
			.then(response => response.data)
	}
}