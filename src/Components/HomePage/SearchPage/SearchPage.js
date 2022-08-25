import {useEffect} from 'react';
import PlayerBar from '../PlayerBar/PlayerBar';
import Sidebar from '../Sidebar/Sidebar';
import {User} from '../../../Context/UserContext';
import TopMenu from '../../TopMenu/TopMenu';
import './SearchPage.css';
import SearchedItem from './SearchedItem/SearchedItem';

function SearchPage({spotify}) {

  return (
    <>
    <div className='home'>
        <Sidebar/>
        <SearchedItem spotify={spotify}/>
    </div>
    <PlayerBar spotify={spotify}/>
    </>
  )
}

export default SearchPage