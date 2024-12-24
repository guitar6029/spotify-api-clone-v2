import './Sidebar.css';
import { User } from '../../../Context/UserContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import SearchIcon from '@mui/icons-material/Search';
import sidebarLogo from '../../../Spotify_Logo_RGB_Green.png';
import SidebarOption from './SidebarOption/SidebarOption';
import uuid from 'react-uuid';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';

function Sidebar() {

    const [{playlists}] = User();


  return (
    <div className='sidebar'>
        
        <img className='sidebar__logo' src={sidebarLogo} alt='sidebar-spotify-logo'/>
        <SidebarOption text='Home' Icon={HomeIcon} linkTo="home" />
        {/* <SidebarOption text='Search' Icon={SearchIcon} linkTo="#"/> */}
        <SidebarOption text='Your Library' Icon={ViewWeekIcon} linkTo="user/library/playlists"/>
        {/* <SidebarOption text='Create Playlist' Icon={LibraryAddIcon} linkTo="user/create-playlist"/> */}
        {/* <SidebarOption text='Liked Songs' Icon={FavoriteIcon}  linkTo="user/liked"/> */}
        <hr className='line'/>

        {playlists?.items?.map( (playlist) => (
          
            <SidebarOption key={uuid()} text={playlist.name} id={playlist.id} />
        ))}
        

    </div>
  )
}

export default Sidebar