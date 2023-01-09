import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './components/App';
// import { state } from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerender = (store) => {
	console.log('re-render')
	root.render(
		<React.StrictMode>
			<App store={store} />
		</React.StrictMode>
	);
}