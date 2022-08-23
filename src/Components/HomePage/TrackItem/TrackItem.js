import './TrackItem.css';

function TrackItem({album,images}) {
  return (
    <div className='trackItem__container'>
        <div><img src={images[2].url} alt={album}/></div>
        <div>{album}</div>

    </div>
  )
}

export default TrackItem