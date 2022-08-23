import {useEffect} from 'react';
import './Main.css';
import {User} from '../../../Context/UserContext';
import TopMenu from './TopMenu/TopMenu';

function Main({spotify}) {

  const [{user}] = User();


  useEffect(()=>{
    spotify.getMyRecentlyPlayedTracks().then(data => {
      console.log('recent data');

      //let {track} = data;
      //console.log(track.played_at);
      let myarray = data.items.map(x => x.track);
      
      
    }, (err) => {
      console.log(err);
    })
  }, [])



  console.log(user);
  return (
    <div className='main__content'>
      <TopMenu spotify={spotify}/>
     
      </div>
  )
}

export default Main