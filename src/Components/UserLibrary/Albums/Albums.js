import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PlayerBar from "../../HomePage/PlayerBar/PlayerBar";
import Sidebar from "../../HomePage/Sidebar/Sidebar";
import uuid from "react-uuid";
import "./Albums.css";
import { User } from "../../../Context/UserContext";

const DUMMY_DATA = [
  {
    artistID: '12345',
    artist : 'example artists',
    album: 'example album',
    images : "some images"
  }
]


function Albums({ spotify }) {
  
  const [myAlbums, setMyAlbums] = useState(DUMMY_DATA);
  const [{offset}, dispatch] = User();
  
  useEffect(() => {
    

    const fetchSavedAlbums = () => {

      //spotify query limit is currently at 20, if data.next is not null
      // the offset adds 20, which queries the next data set from the next api page, until data.next is null
      spotify.getMySavedAlbums({ offset: offset }).then(
        (data) => {
          
          let _myAlbums = data.items.map((item) => {
            return {
              artistID: item.album.artists[0].id,
              artist: item.album.artists[0].name,
              album: item.album.name,
              images: item.album.images,
            };
          });
  
          setMyAlbums(previousData => {
            return [...previousData, ..._myAlbums]
          })

          if(data.next !== null ){
            dispatch({
              type : "SET_OFFSET",
              offset : offset + 20
            });
          }

        },
        (err) => {
          console.log(err);
        }
      );

    }

    fetchSavedAlbums();

    
  }, [offset] );

  console.log(myAlbums);

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
                  <div
                    key={uuid()}
                    className="section__card background__effect__on__hover section__card__height__sm flex__alignItems__center text__center"
                  >
                     <img
                      className="margin__bottom"
                      src={artist?.images[1].url}
                      alt={artist?.artist}
                    /> 
                    <h5 className="textOverflow">{artist?.album}</h5>
                  </div>
                );
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
