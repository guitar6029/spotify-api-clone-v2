import { useEffect, useState } from 'react';
import './Main.css';
import { User } from '../../../Context/UserContext';
import TopMenu from './TopMenu/TopMenu';
import uuid from 'react-uuid'
import TrackItem from '../TrackItem/TrackItem';
import RecentlyPlayed from '../RecentlyPlayed/RecentlyPlayed';
import Greeting from '../Greeting/Greeting';

function Main({ spotify }) {

  const [{ user }] = User();
  const [errMessage, setErrMessage] = useState(null);
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);

  useEffect(() => {

    const recentlyPlayed = () => {
      spotify.getMyRecentlyPlayedTracks().then(data => {

        let recentlyPlayedAPI = data.items.map(item => {
          return {
            artist: item.track.artists[0].name,
            album: item.track.album.name,
            images: item.track.album.images
          }
        });

        console.log(recentlyPlayedAPI);
        setRecentlyPlayed(recentlyPlayedAPI);

      }, (err) => {
        console.log(err);
      })
    }

    recentlyPlayed();

  }, [])



  return (
    <div className='main__content'>
      <TopMenu spotify={spotify} />
      <Greeting />
      <RecentlyPlayed recentlyPlayed={recentlyPlayed} />
    </div>
  )
}

export default Main