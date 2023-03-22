import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from '../router/router';

import { HeaderContainer } from './header/HeaderContainer';
import { Modal } from './repeating/modalWindows/Modal';
import { Loader } from './repeating/preloader/Loader';


function App({ isResponse }) {
  return (
    <div className="App" >
      <BrowserRouter>
        <HeaderContainer />
        {
          isResponse ?
            <div className="container"> <Pages /> </div> :
            <Modal>
              <Loader size="20vmin" />
            </Modal>
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

