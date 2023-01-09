// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './assets/styles/index.css';
// import App from './components/App';


// const root = ReactDOM.createRoot(document.getElementById('root'));

// export const rerender = () => {
//   root.render(<React.StrictMode>
//     <App state={state} />
//   </React.StrictMode>)
// };

// rerender()
import { update } from './redux/state';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './components/App';
const root = ReactDOM.createRoot(document.getElementById('root'));

const rerender = (store) => {
	root.render(
		<React.StrictMode>
			<App store={store} />
		</React.StrictMode>
	);
}
update(rerender)