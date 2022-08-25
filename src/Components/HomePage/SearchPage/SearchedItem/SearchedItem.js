import TopMenu from '../../../TopMenu/TopMenu';
import {User} from '../../../../Context/UserContext';
import './SearchedItem.css';
import { useEffect } from 'react';

function SearchedItem({spotify}) {

    const [{searchInput}] = User();

    useEffect(()=>{
        spotify.searchTracks(`${searchInput}`).then(data => {
          
            let _data = data.tracks.items.map(item => {
                return {
                    artistID : item.artists[0].id, 
                    artist : item.artists[0].name,
                    albumName : item.album.name,
                    albumImages : item.album.images
                }
            })
            console.log(_data);
            //console.log(data.tracks.items);
        }, (err) => {
            console.log(err)
        } );

    }, [searchInput, spotify])



  return (
    <div className='main__content'>
        <TopMenu spotify={spotify} />
        <div className='search__type'>
            <div className='search__type__item background__effect__on__hover'><h2>All</h2></div>
            <div className='search__type__item background__effect__on__hover'><h2>Artist</h2></div>
            <div className='search__type__item background__effect__on__hover'><h2>Albums</h2></div>
            <div className='search__type__item background__effect__on__hover'><h2>Songs</h2></div>
        </div>
        <div>
            <h3>Top Result</h3>
        </div>
        </div>
  )
}

export default SearchedItem