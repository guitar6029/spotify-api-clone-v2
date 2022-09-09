import './SidebarOption.css';
import {useNavigate, Link} from 'react-router-dom';

function SidebarOption({Icon, text, id, linkTo}) {

  const navigate = useNavigate();

  const playlistPath = `/user/library/playlist/${id}`;

  const handleRedirect = () => {
      if(linkTo === '#'){
        navigate('#');
      }else{

        navigate(`/${linkTo}`)
      }
  }

  return (
    <div className='sidebar__option' onClick={handleRedirect}>
        { (Icon) ? <Icon /> : null}
        {(id) ? <Link to={playlistPath}>{text}</Link> : <h3>{text}</h3>}
    </div>
  )
}

export default SidebarOption