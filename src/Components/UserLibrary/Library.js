import PlayerBar from '../HomePage/PlayerBar/PlayerBar';
import Sidebar from '../HomePage/Sidebar/Sidebar';
import './Library.css';

function Library({spotify}) {
  return (
    <>
    <div className='home'>
        <Sidebar/>
        <div>Library</div>
    </div>
    <PlayerBar spotify={spotify}/>
    </>
  )
}

export default Library