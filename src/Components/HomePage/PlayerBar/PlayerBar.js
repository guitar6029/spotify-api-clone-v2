import { useEffect, useState } from "react";
import "./PlayerBar.css";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";

function PlayerBar({ spotify }) {
  const [likedItem, toggleLikedItem] = useState(false);
  const [onPause, togglePausePlay] = useState(false);
  const [onShuffle, toggleShuffle] = useState(false);
  const [onRepeat, toggleRepeat] = useState(false);
  const [currentTrack, setCurrentTrackInfo] = useState([]);
  const [currentPodcast, setCurrentPodcastInfo] = useState([]);

  
  useEffect(() => {

    const displayCurrentTrack = () => {
      
      spotify.getMyCurrentPlaybackState().then(
        (data) => {
          
          if (data.is_playing) {
            spotify.getMyCurrentPlayingTrack().then(
              (data) => {
                // checks if currently playing
                //console.log(data.is_playing);
                if (data?.is_playing) {
                  togglePausePlay(true); //change the play icon to pause
                }

                if (!data?.is_playing) {
                  togglePausePlay(false);
                }
                //if podcast is playing, the item will be null
                if (data?.item === null) {
                  //console.log('no info : null');
                  let _currentTrack = {
                    artist: null,
                    album: null,
                    images: null,
                  };
                  setCurrentPodcastInfo(_currentTrack);
                }
                //if track is currently playing, get the track's info
                else {
                  
                  let _currentTrack = {
                    artist: data.item.artists[0].name,
                    album: data.item.album.name,
                    trackName: data.item.name,
                    image: data.item.album.images[2].url,
                  };

                  
                  setCurrentTrackInfo(_currentTrack);
                }
                
              },
              (err) => {
                console.log(err);
              }
            );
          } else {
            console.log("Nothing is currently playing");
          }
        },
        (err) => {
          console.log(err);
        }
      );
    };
    displayCurrentTrack();

  }, [currentTrack, spotify]);

  //toggles the heart icon , like or unlike, toggles between two icons
  const handleLikeClick = () => {
    toggleLikedItem((previousState) => !previousState);
  };

  //skipToNext
  const handleToNext = () => {
    spotify.skipToNext();
  };

  //skipToPrevious
  const handleToPrevious = () => {
    spotify.skipToPrevious();
  };

  //toggles the play and pause icons
  const handlePausePlay = () => {
    //if onPaude is false, then play track, otherwise, pause
    if (onPause) {
      spotify.pause();
      togglePausePlay((previousState) => !previousState);
    } else {
      spotify.play();
      togglePausePlay((previousState) => !previousState);
    }
  };

  //toggles between shuffle option
  const handleShuffle = () => {
    spotify.setShuffle();
    toggleShuffle((previousState) => !previousState);
  };

  //toggles repeat function of the audio
  const handleRepeat = () => {
    spotify.setRepeat();
    toggleRepeat((previousState) => !previousState);
  };

  //handles volume
  const handleVolumeDrag = (e) => {
    console.log(e.target.value);
    const myVolume = Number(e.target.value); 
    spotify.setVolume(myVolume);
  }

  return (
    <div className="playerBar">
      <div className="playerBar__description">
        {(currentTrack.image) ? <div>
          <img src={currentTrack?.image} alt="audio-album" />
        </div>: <div></div>}
        <div className="playerBar__description__audio__description">
          <span>{currentTrack.trackName}</span>
          <span>{currentTrack.artist}</span>
        </div>
        {likedItem ? (
          <div>
            <FavoriteIcon className="liked__item" onClick={handleLikeClick} />
          </div>
        ) : (
          <div>
            <FavoriteBorderIcon onClick={handleLikeClick} />
          </div>
        )}
      </div>

      <div className="playerBar__controls">
        {onShuffle ? (
          <ShuffleIcon className="green" onClick={handleShuffle} />
        ) : (
          <ShuffleIcon onClick={handleShuffle} />
        )}

        <SkipPreviousIcon onClick={handleToPrevious} />

        {onPause ? (
          <PauseCircleFilledIcon className="green" onClick={handlePausePlay} />
        ) : (
          <PlayCircleFilledIcon onClick={handlePausePlay} />
        )}

        <SkipNextIcon onClick={handleToNext} />

        {onRepeat ? (
          <RepeatIcon className="green" onClick={handleRepeat} />
        ) : (
          <RepeatIcon onClick={handleRepeat} />
        )}
      </div>

      <div className="playerBar__otherOptions">
        <input type="range" step="2" min="0" max="100" onChange={handleVolumeDrag}/>
        {/* <QueueMusicIcon />
        <PhonelinkIcon /> */}
        {/* <VolumeDownIcon/>
            <VolumeUpIcon/>
            <VolumeOffIcon/> */}
      </div>
    </div>
  );
}

export default PlayerBar;
