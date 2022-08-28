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

  useEffect(()=>{

    
    console.log('random artist : ' + randomArtist);
    console.log(randomArtist?.artistID);
    console.log(randomArtist?.artist);
  }, []);

  return (
    <div className='main__content'>
      <TopMenu spotify={spotify} />
      <Greeting/>
      <RecentlyPlayed spotify={spotify} />
      <FavoriteArtists/>
      <RecommendedArtists title={randomArtist?.artist} spotify={spotify} artistID={randomArtist?.artistID} />


    </div>
  )
}

export default Main