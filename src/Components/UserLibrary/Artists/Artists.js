import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PlayerBar from '../../HomePage/PlayerBar/PlayerBar'
import Sidebar from '../../HomePage/Sidebar/Sidebar'
import './Artists.css';

function Artists({spotify}) {


  const [myArtists, setMyArtists] = useState([]);

  useEffect(()=>{

    spotify.getMySavedAlbums({offset: 0}).then(
      (data) => { 

          let _myArtists = data.items.map(item => {
            return {
              artistID: item.album.artists[0].id,
              album : item.album.name,
              artist: item.album.artists[0].name,
              images: item.album.images
            }
  
          });

          setMyArtists(_myArtists);
        if(data.next !== null){
          console.log('not empty');
          //setOffset(previousNum => previousNum+1);
        }
        
      },
      (err) => {
        console.log(err);
      }
    );
      

  }, []);


  return (
    <>
    <div className='home'>
        <Sidebar/>
        <div>
          <div className='library__categories'>
            <div><Link to='/user/library/playlists'>Playlists</Link></div>
            <div><Link to='/user/library/artists' className='activeLink'>Artists</Link></div>
            <div><Link to='/user/library/albums'>Albums</Link></div>
          </div>
        
          <div className="library__flex__content">
          <h3>Artists</h3>
          
        </div>

        
        </div>
        
    </div>
    <PlayerBar spotify={spotify}/>
    </>
  )
}

export default Artists