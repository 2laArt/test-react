import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './components/App';

// import { store } from './redux/store';
import { store } from './redux/reduxState';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerender = (store) => {
	root.render(
		<React.StrictMode>
			<App state={store.getState()} dispatch={store.dispatch.bind(store)} />
		</React.StrictMode>
	);
}
rerender(store)
store.subscribe(() => rerender(store))