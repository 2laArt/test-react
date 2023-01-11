import '../assets/styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './header/Header';

import Profile from '../components/profile/Profile';
import { News } from '../components/news/News';
import { Dialogs } from "../components/messages/Dialogs";


function App({ state, dispatch }) {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path='/' element={
              <h1>Welcome</h1>
            } />
            <Route path='/profile' element={
              <Profile
                userProfile={state.userProfile}
                postData={state.postData}
                dispatch={dispatch}
              />
            } />
            <Route path='/dialogs/*' element={
              <Dialogs
                getSelectedDialog={
                  state.dialogsData.getSelectedDialog.bind(state.dialogsData)
                }
                dialogs={state.dialogsData.dialogs}
                dispatch={dispatch}
              />
            } />
            <Route path='/news' element={
              <News />
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </div>

  )
}

export default App;

// {[...router].map(i => <Route path={i.path} element={i.element} key={i.path} />)}

/* <RouterProvider router={router} /> */
