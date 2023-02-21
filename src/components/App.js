import React from 'react';
import '../assets/styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from '../router/router';

import { HeaderContainer } from './header/HeaderContainer';
import { Preloader } from './repeating/preloader/Preloader';


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
const Pages = () => (
  <>
    <Routes basename={`${process.env.PUBLIC_URL}`}>
      {
        routes.map(router => <Route
          path={router.path}
          element={<router.element />}
          key={router.path} />)
      }
    </Routes>
  </>
)

const AppContainer = connect((state) => ({ isResponse: state.auth.isResponse }))(App)

export default AppContainer;

