//27586
export const getUsers = {
	getUsers(count = 100, page = 3) {
		return this.instance.get(`users?count=${count}&page=${page}`)
			.then(response => response.data)
	}
}