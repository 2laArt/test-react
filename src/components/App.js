import '../assets/styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './header/Header';

// import { router } from '../router/router'

import Profile from '../components/profile/Profile';
import { News } from '../components/news/News';
import { Dialogs } from "../components/messages/Dialogs";


function App({ store }) {
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
                postData={store.state.postData}
                userProfile={store.state.userProfile}
                newPostText={store.state.newPostText}
                updateInput={store.updateInput.bind(store)}
                createNewPost={store.createNewPost.bind(store)}
              />
            } />
            <Route path='/dialogs/*' element={
              <Dialogs
                currentDialog={store.state.currentDialog}
                showDialog={store.showDialog.bind(store)}
                sendMessage={store.sendMessage.bind(store)}
                dialogs={store.state.dialogs} />
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
