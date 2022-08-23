import React from 'react'
import uuid from 'react-uuid';
import TrackItem from '../TrackItem/TrackItem';
import './RecentlyPlayed.css';

function RecentlyPlayed({recentlyPlayed}) {

    recentlyPlayed = recentlyPlayed.slice(0,6);

  return (
    <div className='recentlyPlayed__container'>
    {recentlyPlayed.map(item => {
        return (
            <TrackItem key={uuid()} album={item.album} images={item.images} />
            )
        })}
        </div>
  )
}

export default RecentlyPlayed