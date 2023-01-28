import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './assets/styles/index.css';
import AppContainer from './components/App';

// import { store } from './redux/store';
import { store } from './redux/reduxState';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerender = () => {
	root.render(
		// <React.StrictMode>
		<Provider store={store}>
			<AppContainer />
		</Provider>
		// </React.StrictMode>
	);
}
rerender()
// store.subscribe(rerender)
