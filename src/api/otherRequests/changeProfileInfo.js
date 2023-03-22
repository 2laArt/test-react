//27586
export const changeProfileInfo = {
	changeProfileInfo(data) {
		return this.instance.put(`/profile`, data)
			.then(response => response.data)
	}
}