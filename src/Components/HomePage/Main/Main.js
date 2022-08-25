import TopMenu from '../../TopMenu/TopMenu';
import RecentlyPlayed from '../RecentlyPlayed/RecentlyPlayed';
import Greeting from '../Greeting/Greeting';
import FavoriteArtists from '../Favorite/FavoriteArtists/FavoriteArtists';
import RecommendedArtists from '../Recommended/RecommendedArtists/RecommendedArtists';
import { User } from '../../../Context/UserContext';
import { useEffect } from 'react';
import './Main.css';

function Main({ spotify }) {

  const [{randomArtist}] = User();

  
  console.log(randomArtist?.name);

  return (
    <div className='main__content'>
      <TopMenu spotify={spotify} />
      <Greeting/>
      <RecentlyPlayed spotify={spotify} />
      <FavoriteArtists/>
      {/* <RecommendedArtists title="Mac DeMarco" spotify={spotify} similarTo="Marc DeMarco" /> */}


    </div>
  )
}

export default Main