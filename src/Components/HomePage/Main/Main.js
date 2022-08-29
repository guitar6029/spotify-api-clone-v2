import TopMenu from '../../TopMenu/TopMenu';
import RecentlyPlayed from '../RecentlyPlayed/RecentlyPlayed';
import Greeting from '../Greeting/Greeting';
import FavoriteArtists from '../Favorite/FavoriteArtists/FavoriteArtists';
import { User } from '../../../Context/UserContext';
import { useEffect, useState } from 'react';
import './Main.css';

function Main({ spotify }) {

  const [{favoriteArtists}, dispatch] = User();
  const [artist, setArtist] = useState();
  const [id, setID] = useState();
  

  useEffect(()=>{

      
      
    
  }, [favoriteArtists, id, artist, dispatch, spotify]);

  return (
    <div className='main__content'>
      <TopMenu spotify={spotify} />
      <Greeting/>
      <RecentlyPlayed spotify={spotify} />
      <FavoriteArtists/>
      


    </div>
  )
}

export default Main