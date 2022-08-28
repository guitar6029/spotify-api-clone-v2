import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import PlayerBar from '../../HomePage/PlayerBar/PlayerBar';
import Sidebar from '../../HomePage/Sidebar/Sidebar';
import './Playlists.css';

function Playlists({spotify}) {

  useEffect(()=>{

  }, []);


  return (
    <>
    <div className='home'>
        <Sidebar/>
        <div className="flex__column">
          
          <div className='library__categories'>
            <div><Link to='/user/library/playlists' className='activeLink'>Playlists</Link></div>
            <div><Link to='/user/library/artists'>Artists</Link></div>
            <div><Link to='/user/library/albums'>Albums</Link></div>
          </div>

        <div className="library__flex__content">
          <h3>Playlists</h3>
          
        </div>

        </div>
        
    </div>
    <PlayerBar spotify={spotify}/>
    </>
  )
}

export default Playlists