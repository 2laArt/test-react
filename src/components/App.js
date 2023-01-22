import '../assets/styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ProfileContainer } from '../components/profile/ProfileContainer';
import { UsersContainer } from './users/UsersContainer';
import { DialogsContainer } from "../components/messages/DialogsContainer";
import { Authentication } from './authentication/Authentication';
import { HeaderContainer } from './header/HeaderContainer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderContainer />
        <div className="container">
          <Routes basename={process.env.PUBLIC_URL}>
            <Route path='/' element={
              <h1>Welcome</h1>
            } />
            <Route path='/profile/:userId?' element={
              <ProfileContainer />
            } />
            <Route path='/dialogs/:userId?' element={
              <DialogsContainer />
            } />
            <Route path='/users' element={
              <UsersContainer />
            } />

            {/*  */}
            <Route path='/auth' element={<Authentication />}></Route>
            {/*  */}
          </Routes>
        </div>
      </BrowserRouter>

    </div>

  )
}

export default App;

// {[...router].map(i => <Route path={i.path} element={i.element} key={i.path} />)}

/* <RouterProvider router={router} /> */
