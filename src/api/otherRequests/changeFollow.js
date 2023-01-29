
export const changeFollow = {
	followUser(id) {
		return this.instance.post(`follow/${id}`)
			.then(response => response.data.resultCode)
	},
	unFollowUser(id) {
		return this.instance.delete(`follow/${id}`)
			.then(response => response.data.resultCode)
	}
}