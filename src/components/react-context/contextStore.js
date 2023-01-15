import { createContext } from "react";
import { store } from "../../redux/reduxState";

export const ContextStore = createContext();

export const ProviderStore = ({ children }) => {
	return (
		<ContextStore.Provider value={store}>
			{children}
		</ContextStore.Provider>
	)
}
