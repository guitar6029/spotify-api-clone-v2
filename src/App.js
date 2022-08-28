import Login from "./Components/Login/Login";
import { useEffect } from "react";
import "./App.css";
import { tokenResponseUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import HomePage from "./Components/HomePage/HomePage";
import { User } from "./Context/UserContext";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RedirectToHomePage from "./RedirectToHomePage";
import SearchPage from "./Components/HomePage/SearchPage/SearchPage";
import Library from "./Components/UserLibrary/Library";
import Playlists from "./Components/UserLibrary/Playlists/Playlists";
import Artists from "./Components/UserLibrary/Artists/Artists";
import Albums from "./Components/UserLibrary/Albums/Albums";

// creates an instance of
// spotify api for easier access to scopes
const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = User();
  const navigate = useNavigate();

  useEffect(() => {
    const hash = tokenResponseUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // add the token to the spotify api for access to scopes
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      // get and set user's playlists
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      // user's top artists (favorite)
      spotify.getMyTopArtists().then(
        (data) => {
          const favoriteArtists = data.items.map((item) => {
            return {
              artistID: item.id,
              artist: item.name,
              images: item.images,
            };
          });

          const randomNum = Math.floor(Math.random() * favoriteArtists.length);
          const randomArtist = favoriteArtists[randomNum];
          dispatch({
            type: "SET_RANDOM_ARTIST_FOR_SIMILAR_RECOMMENDATION",
            randomArtist: randomArtist,
          });

          dispatch({
            type: "SET_FAVORITE_ARTISTS",
            favoriteArtists: favoriteArtists,
          });
        },
        (err) => {
          console.log(err.message);
        }
      );
    }
  }, []);

  return (
    <>
      {token ? (
        <Routes>
          <Route path="/home" element={<HomePage spotify={spotify} />} />
          <Route path="/callback" element={<RedirectToHomePage />} />
          <Route path="/search" element={<SearchPage spotify={spotify} />} />
          <Route path="/user/library" element={<Library spotify={spotify} />} />
          <Route
            path="/user/library/playlists"
            element={<Playlists spotify={spotify} />}
          />
          <Route
            path="/user/library/artists"
            element={<Artists spotify={spotify} />}
          />
          <Route
            path="/user/library/albums"
            element={<Albums spotify={spotify} />}
          />
          <Route
            path="*"
            element={
              <div>
                PAGE NOT FOUND : 404 <Link to="/home">Go Home</Link>
              </div>
            }
          />
        </Routes>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
