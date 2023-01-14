import '../assets/styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './header/Header';

import { ProfileContainer } from '../components/profile/ProfileContainer';
import { News } from '../components/news/News';
import { DialogsContainer } from "../components/messages/DialogsContainer";

// 
import { ModalWindowContent } from './react-context/ModalWindow';
import { Provider } from './react-context/reactContext';
// 

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
              <ProfileContainer
                userProfile={state.userProfile}
                postData={state.postData}
                dispatch={dispatch}
              />
            } />
            <Route path='/dialogs/*' element={
              <DialogsContainer
                selectedDialog={
                  state.dialogsData.getSelectedDialog()
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

      {/*  */}
      {/* <Provider>
        <ModalWindowContent />
      </Provider> */}
      {/*  */}

    </div>

  )
}

export default App;

// {[...router].map(i => <Route path={i.path} element={i.element} key={i.path} />)}

/* <RouterProvider router={router} /> */
