import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './components/App';

// import { store } from './redux/store';
import { store } from './redux/reduxState';
import { ProviderStore } from './components/react-context/contextStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerender = () => {
	root.render(
		<React.StrictMode>
			<ProviderStore>
				<App />
			</ProviderStore>
		</React.StrictMode>
	);
}
rerender()
store.subscribe(rerender)