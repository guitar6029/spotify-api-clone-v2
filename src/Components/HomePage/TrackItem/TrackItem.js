import './TrackItem.css';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

function TrackItem({album,images}) {
  return (
    <div className='trackItem__container'>
        <img src={images[2].url} alt={album}/>
        <h4>{album}</h4>
        <PlayCircleFilledIcon />
    </div>
  )
}

export default TrackItem