import { createContext, useState } from "react";
export const UserContext = createContext();

const store = {
	text: 'Manual TExt',

}

export const Provider = ({ children }) => {
	const [isOpen, onClose] = useState(true)
	return (
		<UserContext.Provider value={store}>
			<div
				style={{
					display: isOpen ? 'flex' : 'none',
					position: 'fixed',
					top: 0,
					width: '100%',
					height: '100vh',
					background: 'rgba(0,0,0,0.6)',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<div>
					{children}
					<button onClick={() => onClose(() => false)}>Close</button>
				</div>
			</div>
		</UserContext.Provider>
	)
}
