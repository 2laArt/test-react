import { reSelectors } from "./addSelectors/reselectors"
import { states } from "./addSelectors/states"

export const selectors = {
	...states,
	...reSelectors
}