import './Sidebar.css';
import sidebarLogo from '../../../Spotify_Logo_RGB_Green.png';
import SidebarOption from './SidebarOption/SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { User } from '../../../Context/UserContext';


function Sidebar() {

    const [{playlists}, dispatch] = User();


  return (
    <div className='sidebar'>
        
        <img className='sidebar__logo' src={sidebarLogo} alt='sidebar-spotify-logo'/>
        <SidebarOption text='Home' Icon={HomeIcon} />
        <SidebarOption text='Search' Icon={SearchIcon}/>
        <SidebarOption text='Your Library' Icon={ViewWeekIcon}/>
        <SidebarOption text='Create Playlist' Icon={LibraryAddIcon} />
        <SidebarOption text='Liked Songs' Icon={FavoriteIcon} />
        <hr className='line'/>

        {playlists?.items?.map( (playlist) => (
          
            <SidebarOption text={playlist.name} />
        ))}
        

    </div>
  )
}

export default Sidebar