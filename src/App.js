import Login from './Components/Login/Login';
import { useEffect } from 'react';
import './App.css';
import { tokenResponseUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import HomePage from './Components/HomePage/HomePage';
import {User} from './Context/UserContext';

// creates an instance of 
// spotify api for easier access to scopes
const spotify = new SpotifyWebApi();

function App() {

  const [{user, token}, dispatch] = User();


  useEffect(()=>{
    const hash = tokenResponseUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    
    //if there is a token , set it to setToken 
    if (_token) {

      dispatch({
        type: 'SET_TOKEN',
        //remove after devstate
        token : _token
      })
      
      // add the token to the spotify api for access to scopes
      spotify.setAccessToken(_token); 

      console.log(_token);

      
      spotify.getMe().then( user => {
        //let _displayName = user.display_name;
        //setuserName(_displayName);

        dispatch({
          type: 'SET_USER',
          user: user,
      });

      });

      spotify.getUserPlaylists().then( (playlists) => {

        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })

      });

    }
  }, [])


  return (
   <div>
    {(token) ? <HomePage spotify={spotify} /> : <Login/> }
    
   </div>
  );
}

export default App;
