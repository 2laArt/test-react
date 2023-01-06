import '../assets/styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './header/Header';

// import { router } from '../router/router'

import Profile from '../components/profile/Profile';
import { News } from '../components/news/News';
import { Dialogs } from "../components/messages/Dialogs";


function App({ state, updateInput, createNewPost, showDialog, sendMessage }) {
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
                postData={state.postData}
                userProfile={state.userProfile}
                newPostText={state.newPostText}
                updateInput={updateInput}
                createNewPost={createNewPost}
              />
            } />
            <Route path='/dialogs/*' element={
              <Dialogs
                currentDialog={state.currentDialog}
                showDialog={showDialog}
                sendMessage={sendMessage}
                dialogs={state.dialogs} />
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
