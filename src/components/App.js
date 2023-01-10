import '../assets/styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './header/Header';

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
                userProfile={store.state.userProfile}
                postData={store.state.postData}
                dispatch={store.dispatch.bind(store)}
              />
            } />
            <Route path='/dialogs/*' element={
              <Dialogs
                getSelectedDialog={store.state.dialogsData.getSelectedDialog.bind(store.state.dialogsData)}
                dialogs={store.state.dialogsData.dialogs}
                dispatch={store.dispatch.bind(store)}
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
