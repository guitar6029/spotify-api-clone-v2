import { useEffect, useState } from 'react';
import TopMenu from './TopMenu/TopMenu';
import RecentlyPlayed from '../RecentlyPlayed/RecentlyPlayed';
import Greeting from '../Greeting/Greeting';
import FavoriteArtists from '../Favorite/FavoriteArtists/FavoriteArtists';
import RecommendedArtists from '../Recommended/RecommendedArtists/RecommendedArtists';
import './Main.css';

function Main({ spotify }) {

  let [recommendedArtists, setRecommendedArtists] = useState([]);


  //get top artists id and name and put them in array, which will get pulled out randomly for similarTo and recommended
  useEffect(() => {
    //get top artists
    const getTopAritsts = () => {

      spotify.getMyTopArtists().then(data => {

        const _topArtists = data.items.map(item => {
          return {
            artistID: item.id,
            artist: item.name,
            images: item.images
  
          }
        })
        setRecommendedArtists(_topArtists);
        //console.log(_topArtists);       
      }, (err) => {
        console.log(err.message);
      })


      const randomNumberForArray = Math.floor(Math.random() * 20);
      console.log(randomNumberForArray);
      console.log(recommendedArtists);
    }

    getTopAritsts();

  }, []);


  //console.log(recommendedArtists);


  return (
    <div className='main__content'>
      <TopMenu spotify={spotify} />
      <Greeting />
      <RecentlyPlayed spotify={spotify} />
      <FavoriteArtists spotify={spotify} />
      <RecommendedArtists title="Mac DeMarco" spotify={spotify} similarTo="Marc DeMarco" />


    </div>
  )
}

export default Main