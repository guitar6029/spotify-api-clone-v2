import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import { User } from "../../../Context/UserContext";
import PlayerBar from "../../HomePage/PlayerBar/PlayerBar";
import Sidebar from "../../HomePage/Sidebar/Sidebar";
import "./Artists.css";

const DUMMY_DATA = [
  {
    artistID: "123",
    artist: "artist example",
    image:
      "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1100&q=60",
  },
];

function Artists({ spotify }) {
  const [myArtists, setMyArtists] = useState(DUMMY_DATA);
  const [{ offset }, dispatch] = User();

  useEffect(() => {
    const getArtists = () => {
      spotify.getFollowedArtists().then(
        (data) => {
          let _myArtists = data.artists.items.map((item) => {
            return {
              // artistID: item[0].id,
              artist: item.name,
              image: item.images[0].url,
            };
          });
          
          setMyArtists(_myArtists);

          // setMyArtists((previousArtists) => {
          //   return [...previousArtists, ..._myArtists];
          // });

          // if(data.next !== null){
          //   dispatch({
          //     type: 'SET_OFFSET',
          //     offset: offset + 120
          //   })
          // }
        },
        (err) => {
          console.log(err);
        }
      );
    };

    getArtists();
  }, []);

  return (
    <>
      <div className="home">
        <Sidebar />
        <div>
          <div className="library__categories">
            <div>
              <Link to="/user/library/playlists">Playlists</Link>
            </div>
            <div>
              <Link to="/user/library/artists" className="activeLink">
                Artists
              </Link>
            </div>
            <div>
              <Link to="/user/library/albums">Albums</Link>
            </div>
          </div>

          <div className="library__flex__content">
            <h3>Artists</h3>
            <div className="section__flex__direction__column">
              <div className="section__flex__direction__row">
                {myArtists?.map((artist) => {
                  return (
                    <div
                      key={uuid()}
                      className="section__card background__effect__on__hover section__card__height__sm flex__alignItems__center text__center"
                    >
                      <img
                        className="margin__bottom"
                        src={artist?.image}
                        alt={artist?.artist}
                      />
                      <h5 className="textOverflow">{artist?.artist}</h5>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <PlayerBar spotify={spotify} />
    </>
  );
}

export default Artists;
