import { createSelector } from "reselect"
export const reSelectors = {
	pageNumbers(state) {
		return (createSelector(this.numberOfPage, pages => pages))(state)
	},

}