import TopMenu from '../../../TopMenu/TopMenu';
import { User } from '../../../../Context/UserContext';
import { useEffect, useState } from 'react';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import './SearchedItem.css';

function SearchedItem({ spotify }) {

    const [{ searchInput, artistID }, dispatch] = User();
    const [topResult, setTopResult] = useState({});
    //const [artistID, setArtistIDForTopTracks] =useState('');

    useEffect(() => {
 
         //top result for artist
        spotify.searchArtists(`'${searchInput}'`).then(data => {
            
            let _data = {
                artistId: data.artists.items[0].id,
                artistName: data.artists.items[0].name,
                type: data.artists.items[0].type,
                genres: data.artists.items[0].genres,
                image: data.artists.items[0].images[1].url
            }

            _data.type = _data.type.toUpperCase();
           
            // dispatch({
            //     type: 'SET_ARTIST_ID',
            //     artistID : _data.artistId
            // })
                setTopResult(_data);

        }, (err) => { console.log(err) });

        
        // spotify.searchTracks(`artist:${artistID}`).then( data => {console.log(data)}, (err) => {console.log(err)});


         
    }, [searchInput, artistID, spotify, dispatch])

    return (
        <div className='main__content'>
            <TopMenu spotify={spotify} />
            <div className='search__type'>
                <div className='search__type__item background__effect__on__hover selected'><h2>All</h2></div>
                <div className='search__type__item background__effect__on__hover'><h2>Artist</h2></div>
                <div className='search__type__item background__effect__on__hover'><h2>Albums</h2></div>
                <div className='search__type__item background__effect__on__hover'><h2>Songs</h2></div>
            </div>
            <div className='searchResults'>
             <div className='searchResults__top'>
                <div>
                    <h3>Top Result</h3>
                </div>
                <div>
                    <h3>Songs</h3>
                </div>
            </div>
                {(topResult) && 
                <div className='top__result'>
                    <div className='top__resultCard cursorPointer background__effect__on__hover'>
                        <img src={topResult?.image} alt={topResult?.artistName}/>
                        <h3>{topResult?.artistName}</h3>
                        <div className="top__result__playIcon">
                        <h5>{topResult?.type}</h5>
                        <PlayCircleFilledIcon/>
                        </div>
                    </div>
                    
                </div>}
           
            </div>
        </div>
    )
}

export default SearchedItem