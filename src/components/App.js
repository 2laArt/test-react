import React from 'react';
import '../assets/styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

import { ProfileContainer } from '../components/profile/ProfileContainer';
import { UsersContainer } from './users/UsersContainer';
import { DialogsContainer } from "../components/messages/DialogsContainer";
import { AuthContainer } from './authentication/Authentication';
import { HeaderContainer } from './header/HeaderContainer';
import { Preloader } from './repeating/preloader/Preloader';


const routes = [
  {
    path: '/profile/:userId?',
    element: ProfileContainer
  },
  {
    path: '/dialogs/:userId?',
    element: DialogsContainer
  },
  {
    path: '/users/:page?',
    element: UsersContainer
  }
]
function App({ isResponse }) {
  return (
    <div className="App" >
      <BrowserRouter>
        <HeaderContainer />
        {
          isResponse ?
            <div className="container"> <Pages /> </div> :
            <Preloader />
        }
      </BrowserRouter>

    </div>
  )
}
const Pages = () => {

  return (
    <>
      <Routes basename={`${process.env.PUBLIC_URL}`}>
        {/*  */}
        <Route path='/auth' element={<AuthContainer />}></Route>
        {/*  */}
        <Route path='/' element={
          <div>
            <h1>Welcome</h1>
          </div>
        } />
        {
          routes.map(r => <Route
            path={r.path}
            element={<r.element />}
            key={r.path} />)
        }
      </Routes>

    </>
  )
}
const AppContainer = connect((state) => ({ isResponse: state.auth.isResponse }))(App)

export default AppContainer;

// {[...router].map(i => <Route path={i.path} element={i.element} key={i.path} />)}

/* <RouterProvider router={router} /> */
