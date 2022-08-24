import { useEffect, useState } from 'react';
import TopMenu from './TopMenu/TopMenu';
import RecentlyPlayed from '../RecentlyPlayed/RecentlyPlayed';
import Greeting from '../Greeting/Greeting';
import FavoriteArtists from '../Favorite/FavoriteArtists/FavoriteArtists';
import RecommendedArtists from '../Recommended/RecommendedArtists/RecommendedArtists';
import './Main.css';

function Main({ spotify }) {

  return (
    <div className='main__content'>
      <TopMenu spotify={spotify} />
      <Greeting/>
      <RecentlyPlayed spotify={spotify} />
      <FavoriteArtists/>
      <RecommendedArtists title="Mac DeMarco" spotify={spotify} similarTo="Marc DeMarco" />


    </div>
  )
}

export default Main