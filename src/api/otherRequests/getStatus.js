//27586
export const getStatus = {
	getStatus(userId) {
		return this.instance.get(`/profile/status/${userId}`)
			.then(response => response.data)
	}
}