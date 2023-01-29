export const authentication = {
	auth() {
		return this.instance(`auth/me`)
			.then(response => response.data)
	}
}