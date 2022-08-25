import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserContext } from './Context/UserContext';
import reducer, { initialState } from './reducer';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserContext initialState={initialState} reducer={reducer}>
      <App />
    </UserContext>
    </BrowserRouter>
  </React.StrictMode>
);
