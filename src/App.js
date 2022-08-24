import Login from './Components/Login/Login';
import { useEffect } from 'react';
import './App.css';
import { tokenResponseUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import HomePage from './Components/HomePage/HomePage';
import { User } from './Context/UserContext';

// creates an instance of 
// spotify api for easier access to scopes
const spotify = new SpotifyWebApi();

function App() {

  const [{ user, token }, dispatch] = User();


  useEffect(() => {
    const hash = tokenResponseUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {


      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      // add the token to the spotify api for access to scopes
      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {

        dispatch({
          type: 'SET_USER',
          user: user,
        });

      });

      // get and set user's playlists
      spotify.getUserPlaylists().then((playlists) => {

        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })

      });

        // user's top artists (favorite)
      spotify.getMyTopArtists().then(data => {

        const favoriteArtists = data.items.map(item => {
          return {
            artistID: item.id,
            artist: item.name,
            images: item.images
  
          }
        })

        const randomNum = Math.floor(Math.random() * favoriteArtists.length);
        const randomArtist = favoriteArtists[randomNum];
        dispatch({
          type: 'SET_RANDOM_ARTIST_FOR_SIMILAR_RECOMMENDATION',
          randomArtist : randomArtist
        })


        dispatch({
          type: 'SET_FAVORITE_ARTISTS',
          favoriteArtists : favoriteArtists 
        })
               
      }, (err) => {
        console.log(err.message);
      })

      

    }
  }, [])


  return (
    <div>
      {(token) ? <HomePage spotify={spotify} /> : <Login />}

    </div>
  );
}

export default App;
