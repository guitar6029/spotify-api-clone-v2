import React from 'react'
import PlayerBar from '../PlayerBar/PlayerBar';
import Sidebar from '../Sidebar/Sidebar';
import './SearchPage.css';

function SearchPage({spotify}) {
  return (
    <>
    <div className='home'>
        <Sidebar/>
        <div>Searched Stuff appears here</div>
    </div>
    <PlayerBar spotify={spotify}/>
    </>
  )
}

export default SearchPage