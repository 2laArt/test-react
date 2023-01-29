import '../assets/styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

import { ProfileContainer } from '../components/profile/ProfileContainer';
import { UsersContainer } from './users/UsersContainer';
import { DialogsContainer } from "../components/messages/DialogsContainer";
import { Authentication } from './authentication/Authentication';
import { HeaderContainer } from './header/HeaderContainer';
import { Preloader } from './repeating/preloader/Preloader';



function App({ isResponse }) {
  return (
    <div className="App" >
      <BrowserRouter>
        <HeaderContainer />
        <div className="container">
          {
            isResponse ? <Tree /> :
              <Preloader />
          }

        </div>
      </BrowserRouter>

    </div>
  )
}
const Tree = () => {
  //process.env.PUBLIC_URL
  return (
    <Routes basename={`${process.env.PUBLIC_URL}/build`}>
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
  )
}
const AppContainer = connect((state) => ({ isResponse: state.auth.isResponse, }))(App)

export default AppContainer;

// {[...router].map(i => <Route path={i.path} element={i.element} key={i.path} />)}

/* <RouterProvider router={router} /> */
