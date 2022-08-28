import React from "react";
import { Link } from "react-router-dom";
import PlayerBar from "../../HomePage/PlayerBar/PlayerBar";
import Sidebar from "../../HomePage/Sidebar/Sidebar";
import "./Albums.css";

function Albums({ spotify }) {
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
          </div>
          
        </div>
      </div>
      <PlayerBar spotify={spotify} />
    </>
  );
}

export default Albums;
