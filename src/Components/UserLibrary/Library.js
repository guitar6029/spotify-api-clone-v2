import { Link } from 'react-router-dom';
import PlayerBar from '../HomePage/PlayerBar/PlayerBar';
import Sidebar from '../HomePage/Sidebar/Sidebar';
import './Library.css';

function Library({spotify}) {
  return (
    <>
    <div className='home'>
        <Sidebar/>
        <div>
          <div className='library__categories'>
            <div><Link to='/user/library/playlists'>Playlists</Link></div>
            <div><Link to='/user/library/artists'>Artists</Link></div>
            <div><Link to='/user/library/albums'>Albums</Link></div>
          </div>
        </div>
    </div>
    <PlayerBar spotify={spotify}/>
    </>
  )
}

export default Library