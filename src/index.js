import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserContext } from './Context/UserContext';
import reducer, { initialState } from './reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContext initialState={initialState} reducer={reducer}>
      <App />
    </UserContext>
  </React.StrictMode>
);
