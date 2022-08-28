import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import { User } from '../../../Context/UserContext';
import PlayerBar from '../../HomePage/PlayerBar/PlayerBar';
import Sidebar from '../../HomePage/Sidebar/Sidebar';
import './Playlists.css';

function Playlists({spotify}) {

  const [{playlists}, dispatch] = User();
  const [myPlaylists, setMyPlaylists] = useState([]);
  
  useEffect(()=>{
      spotify.getUserPlaylists().then(data => {
        
        let _myPlaylists = data.items.map(item => {
          return {
            name : item.name,
            image : item.images[0].url
          }
        });
        setMyPlaylists(_myPlaylists);
        //console.log(_myPlaylists);
      });
  }, [])

  return (
    <>
    <div className='home'>
        <Sidebar/>
        <div className="flex__column">
          
          <div className='library__categories'>
            <div><Link to='/user/library/playlists' className='activeLink'>Playlists</Link></div>
            <div><Link to='/user/library/artists'>Artists</Link></div>
            <div><Link to='/user/library/albums'>Albums</Link></div>
          </div>

        <div className="library__flex__content">
          <h3>Playlists</h3>
          <div className='section__flex__direction__row'>{myPlaylists?.map((item) => {
                return (
                    <div key={uuid()} className="section__card background__effect__on__hover section__card__height__sm flex__alignItems__center text__center">
                        <img className='margin__bottom' src={item?.image} alt={item?.artist} />
                        <h5 className='textOverflow'>{item?.name}</h5>
                    </div>
                )
            })}
            </div>
        </div>

        </div>
        
    </div>
    <PlayerBar spotify={spotify}/>
    </>
  )
}

export default Playlists