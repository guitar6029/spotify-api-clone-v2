import React from 'react'
import { Link } from 'react-router-dom'
import PlayerBar from '../../HomePage/PlayerBar/PlayerBar'
import Sidebar from '../../HomePage/Sidebar/Sidebar'
import './Artists.css';

function Artists({spotify}) {
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