import React from 'react';
import '../assets/styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

import { ProfileContainer } from '../components/profile/ProfileContainer';
import { UsersContainer } from './users/UsersContainer';
import { DialogsContainer } from "../components/messages/DialogsContainer";
import { Authentication } from './authentication/Authentication';
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
    path: '/users',
    element: UsersContainer
  }
]
function App({ isResponse }) {
  return (
    <div className="App" >
      <BrowserRouter>
        <HeaderContainer />
        <div className="container">
          {
            isResponse ? <Pages /> :
              <Preloader />
          }
        </div>
      </BrowserRouter>

    </div>
  )
}
const Pages = () => {

  return (
    <>
      <Routes basename={`${process.env.PUBLIC_URL}`}>
        {/*  */}
        <Route path='/auth' element={<Authentication />}></Route>
        {/*  */}
        <Route path='/' element={
          <h1>Welcome</h1>
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
