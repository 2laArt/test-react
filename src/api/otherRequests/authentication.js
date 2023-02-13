export const authentication = {
	auth() {
		return this.instance.get(`auth/me`)
			.then(response => response.data)
	},
	signIn(param) {
		return this.instance.post(`auth/login`, param)
			.then(response => response.data)
	},
	signOut() {
		return this.instance.post(`auth/logout`)
			.then(response => response.data)
	}
}