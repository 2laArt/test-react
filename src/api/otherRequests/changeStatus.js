
export const changeStatus = {
	changeStatus(status) {
		return this.instance.put(`profile/status`, { status })
			.then(response => response.data)
	},
}