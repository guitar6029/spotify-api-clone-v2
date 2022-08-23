import React from 'react'
import './HomePage.css';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import PlayerBar from './PlayerBar/PlayerBar';

function HomePage({spotify}) {
  return (
    <>
    <div className='home'>
        <Sidebar/>
        <Main spotify={spotify}/>
    </div>
    <PlayerBar/>
    </>
  )
}

export default HomePage