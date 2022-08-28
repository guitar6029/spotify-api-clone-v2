import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PlayerBar from "../../HomePage/PlayerBar/PlayerBar";
import Sidebar from "../../HomePage/Sidebar/Sidebar";
import uuid from 'react-uuid';
import "./Albums.css";

function Albums({ spotify }) {

  
  const [offsetNum, setOffset] = useState(0);
  const [ myAlbums, setMyAlbums] = useState([]);
  useEffect(() => {
    
    spotify.getMySavedAlbums({offset: offsetNum}).then(
      (data) => { 

          let _myAlbums = data.items.map(item => {
            return {
              artistID: item.album.artists[0].id,
              album : item.album.name,
              artist: item.album.artists[0].name,
              images: item.album.images
            }
  
          });

          setMyAlbums(_myAlbums);
        if(data.next !== null){
          console.log('not empty');
          //setOffset(previousNum => previousNum+1);
        }
        
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return (
    <>
      <div className="home">
        <Sidebar />
        <div>
          <div className="library__categories">
            <div>
              <Link to="/user/library/playlists" className="active">
                Playlists
              </Link>
            </div>
            <div>
              <Link to="/user/library/artists">Artists</Link>
            </div>
            <div>
              <Link to="/user/library/albums" className="activeLink">
                Albums
              </Link>
            </div>
          </div>

          <div className="library__flex__content">
            <h3>Albums</h3>
            <div className="flex__row">
            {myAlbums?.map((artist) => {
                return (
                    <div key={uuid()} className="section__card background__effect__on__hover section__card__height__sm flex__alignItems__center text__center">
                        <img className='margin__bottom' src={artist?.images[1].url} alt={artist?.artist} />
                        <h5 className='textOverflow'>{artist?.album}</h5>
                    </div>
                )
            })}
            </div>
          </div>
        </div>
      </div>
      <PlayerBar spotify={spotify} />
    </>
  );
}

export default Albums;
