
export const getProfile = {
	getProfile(id) {
		return this.instance.get(`profile/${id}`)
			.then(response => response.data)
	}
}