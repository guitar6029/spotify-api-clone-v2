import './SidebarOption.css';
import {useNavigate} from 'react-router-dom';

function SidebarOption({Icon, text, linkTo}) {

  const navigate = useNavigate();

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
        {text}
    </div>
  )
}

export default SidebarOption