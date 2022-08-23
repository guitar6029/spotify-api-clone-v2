import {useState} from 'react';
import './PlayerBar.css';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';

function PlayerBar() {

    const [likedItem, toggleLikedItem] = useState(false);
    const [onPause, togglePausePlay] = useState(false);
    const [onShuffle, toggleShuffle] = useState(false);
    const [onRepeat, toggleRepeat] = useState(false);

    //toggles the heart icon , like or unlike, toggles between two icons
    const handleLikeClick = () => {
            toggleLikedItem(previousState => !previousState);
    }

    //toggles the play and pause icons
    const handlePausePlay = () => {
        togglePausePlay(previousState => !previousState);
    }

    //toggles between shuffle option
    const handleShuffle = () => {
        toggleShuffle(previousState => !previousState);
    }

    //toggles repeat function of the audio
    const handleRepeat = () => {
        toggleRepeat(previousState => !previousState);
    }

    return (
        <div className='playerBar'>
            <div className='playerBar__description'>
                <div><img src="https://upload.wikimedia.org/wikipedia/en/d/de/Directions-big.jpg" alt="audio-album"/></div>
                <div className='playerBar__description__audio__description'>
                    <span>song</span><span>artist</span></div>
                { (likedItem) ? <div><FavoriteIcon className='liked__item' onClick={handleLikeClick}/></div> : <div><FavoriteBorderIcon onClick={handleLikeClick}/></div>}
            </div>

           <div className='playerBar__controls'>
           { (onShuffle) ? <ShuffleIcon className="green" onClick={handleShuffle}/>   : <ShuffleIcon onClick={handleShuffle}/>}
            <SkipPreviousIcon/>
            { (onPause) ? <PauseCircleFilledIcon className="green" onClick={handlePausePlay} /> : <PlayCircleFilledIcon onClick={handlePausePlay}/>}
            <SkipNextIcon />
            { (onRepeat)  ? <RepeatIcon className='green' onClick={handleRepeat}/> : <RepeatIcon onClick={handleRepeat}/>}
           </div>

            <div className='playerBar__otherOptions'>
            <QueueMusicIcon/>
            <PhonelinkIcon/>
            {/* <VolumeDownIcon/>
            <VolumeUpIcon/>
            <VolumeOffIcon/> */}

            </div>

        </div>
    )
}

export default PlayerBar