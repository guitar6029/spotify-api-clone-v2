import React from 'react';
import SpotifyLogo from './Spotify_Logo_RGB_Green.png';
import {loginUrl} from '../../spotify';
import './Login.css';

function Login() {
  return (
    <div className='login__container'>
      <img src={SpotifyLogo} alt='spotify-logo'/>
      <a href={loginUrl}>Login with Spotify</a>
      </div>
  )
}

export default Login