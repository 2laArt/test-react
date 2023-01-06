import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './components/App';
// import { state } from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerender = (state, updateInput, createNewPost, showDialog, sendMessage) => {
	console.log('re-render')
	root.render(
		<React.StrictMode>
			<App state={state} updateInput={updateInput} createNewPost={createNewPost} showDialog={showDialog} sendMessage={sendMessage} />
		</React.StrictMode>
	);
}