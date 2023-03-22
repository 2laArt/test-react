import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './assets/styles/index.scss';
import AppContainer from './components/App';

import { store } from './redux/reduxState';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerender = () => {
	root.render(
		<Provider store={store}>
			<AppContainer />
		</Provider>
	);
}
rerender()
