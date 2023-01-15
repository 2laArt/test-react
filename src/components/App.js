import '../assets/styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './header/Header';

import { ProfileContainer } from '../components/profile/ProfileContainer';
import { News } from '../components/news/News';
import { DialogsContainer } from "../components/messages/DialogsContainer";
import { useContext } from 'react';
import { ContextStore } from './react-context/contextStore';

// 
// import { ModalWindowContent } from './react-context/modal/ModalWindow';
// import { Provider } from './react-context/modal/reactContext';
// 

function App() {
  const store = useContext(ContextStore);
  const state = store.getState();
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
                dispatch={store.dispatch}
              />
            } />
            <Route path='/dialogs/*' element={
              <DialogsContainer
                selectedDialog={
                  state.dialogsData.getSelectedDialog()
                }
                dialogs={state.dialogsData.dialogs}
                dispatch={store.dispatch}
              />
            } />
            <Route path='/news' element={
              <News />
            } />
          </Routes>
        </div>
      </BrowserRouter>

      {/* <Provider>
        <ModalWindowContent />
      </Provider> */}

    </div>

  )
}

export default App;

// {[...router].map(i => <Route path={i.path} element={i.element} key={i.path} />)}

/* <RouterProvider router={router} /> */
