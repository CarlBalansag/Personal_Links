import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {Main} from './pages/Main'
import { Auth } from './pages/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path='/main' element={<Main />} />
          <Route path='/SignUp' element={<Auth />} />
          {/* <Route path='*' exact={true} component={NotFoundRoute} /> */} currently not working 
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);