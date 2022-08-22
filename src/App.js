import Login from './Components/Login/Login';
import { useEffect, useState } from 'react';
import './App.css';
import { tokenResponseUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import HomePage from './Components/HomePage/HomePage';

// creates an instance of 
// spotify api for easier access to scopes
const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);
  const [userName, setuserName] = useState(null);


  useEffect(()=>{
    const hash = tokenResponseUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    
    //if there is a token , set it to setToken 
    if (_token) {
      setToken(_token);
      // add the token to the spotify api for access to scopes
      spotify.setAccessToken(_token); 

      spotify.getMe().then(user => {
        let _displayName = user.display_name;
        setuserName(_displayName);
      })

    }


  }, [])


  return (
   <div>
    {(token) ? <HomePage /> : <Login/> }
    
   </div>
  );
}

export default App;
