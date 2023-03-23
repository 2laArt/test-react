

export const dialogsMethods = {
	getAllDialogs() {
		return this.instance.get(`dialogs`)
			.then(response => response.data)
	},
	getUserDialog(id) {
		return this.instance.get(`dialogs/${id}/messages`)
			.then(response => response.data)
	},
	sendMessage(data) {
		return this.instance.post(`dialogs/${data.id}/messages`, data.msg)
			.then(response => response.data)
	},
	startDialog(id) {
		return this.instance.put(`dialogs/${id}`)
			.then(response => response.data)
	},
}
// userId - (number) - user id of your friend
// page (number,default 1) number of requested portion
// count (number, default 10) size of requestedPortion
