import '../assets/styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './header/Header';

import { ProfileContainer } from '../components/profile/ProfileContainer';
import { News } from '../components/news/News';
import { DialogsContainer } from "../components/messages/DialogsContainer";



function App() {
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
              <ProfileContainer />
            } />
            <Route path='/dialogs/*' element={
              <DialogsContainer />
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
