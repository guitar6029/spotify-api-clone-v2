import {useState, useEffect} from 'react'
import uuid from 'react-uuid';
import TrackItem from '../TrackItem/TrackItem';
import './RecentlyPlayed.css';

function RecentlyPlayed({spotify}) {

  const [errMessage, setErrMessage] = useState(null);
  let [recentlyPlayed, setRecentlyPlayed] = useState([]);

  useEffect(() => {

    const recentlyPlayed = () => {
      spotify.getMyRecentlyPlayedTracks().then(data => {
        //console.log(data);
        let recentlyPlayedAPI = data.items.map(item => {
          return {
            trackID: item.track.id,
            artist: item.track.artists[0].name,
            album: item.track.album.name,
            images: item.track.album.images
          }
        });
        
        setRecentlyPlayed(recentlyPlayedAPI);

      }, (err) => {
        setErrMessage(err);
        console.log(err);
      })
    }

    recentlyPlayed();

  }, [])
  
  //show the first 6 items
  recentlyPlayed = recentlyPlayed.slice(0,6);

  return (
    <div className='recentlyPlayed__container'>
    {recentlyPlayed.map(item => {
        return (
            <TrackItem key={uuid()} album={item.album} images={item.images} />
            )
        })}
        </div>
  )
}

export default RecentlyPlayed