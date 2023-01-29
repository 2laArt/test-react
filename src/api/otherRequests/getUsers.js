
export const getUsers = {
	getUsers(count = 100, page = 227) {
		return this.instance.get(`users?count=${count}&page=${page}`)
			.then(response => response.data)
	}
}